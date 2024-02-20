import React from "react";

// Function to format view count
const formatViewCount = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount.toString();
  } else if (viewCount < 1000000) {
    return Math.floor(viewCount / 1000) + "K";
  } else if (viewCount < 1000000000) {
    return Math.floor(viewCount / 1000000) + "M";
  } else {
    return Math.floor(viewCount / 1000000000) + "B";
  }
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-3 m-3 w-72 shadow-lg">
      <img 
        className="rounded-lg" 
        src={thumbnails.medium.url} 
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatViewCount(statistics.viewCount)} views</li> 
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
      <h1 className="font-bold">Ad</h1>
    </div>
  );
}

export default VideoCard;
