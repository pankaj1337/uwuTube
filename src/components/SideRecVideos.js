// import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import VideoCard, { AdVideoCard } from "./VideoCard";
// import { Link } from "react-router-dom";

// const SideRecVideos = () => {

//     const [videos, setVideos] = useState([]);
  
//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     try {
//       const response = await fetch(YOUTUBE_VIDEOS_API);
//       if (!response.ok) {
//         throw new Error('Failed to fetch videos');
//       }
//       const data = await response.json();
//       setVideos(data.items);
//     } catch (error) {
//       console.error('Error fetching videos:', error.message);
//     }
//   };

//   return (
//     <div>
//       {/* Header */}
//       <h2 className="text-lg font-bold mb-2">Recommended Videos</h2>

//       {/* Recommended videos */}
//       <div className="flex flex-wrap">
//         {videos.map((video) => (
//           <Link key={video.id} to={"/watch?v=" + video.id}>
//             <VideoCard info={video} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
  
// }

// export default SideRecVideos
