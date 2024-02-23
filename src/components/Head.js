import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = useCallback(async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = YOUTUBE_SEARCH_API + searchQuery;
    
    try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(cacheResults({ [searchQuery]: data[1] }));
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSearchSuggestions]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg  ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://imgs.search.brave.com/e_wlXErs2RylQhqg9KAkWWjgjKrlwf81SwZBFghaH8c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODhhNjRlN2QwNmY2/NzE5NjkyYTJkMTEu/cG5n"
          alt="menu"
        />

        <a href="/">
          <img
            className="h-12 mx-2 hover:bg-gray-400"
            src="https://cdn.discordapp.com/attachments/1138507317600604303/1209046721200529418/image-removebg-preview.png?ex=65e57f81&is=65d30a81&hm=30fc8285e9a12131ba8cd7453628975fc555540e8f1d0555d32428044a4a550f&"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
