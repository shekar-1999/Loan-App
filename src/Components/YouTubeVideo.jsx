import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with your YouTube API key
const API_KEY = 'AIzaSyB6pU1eq3vTc_oYIf-im_0lhRDz7zALLCM'; 
// Replace with the YouTube video ID you want to display
const VIDEO_ID = 'u56vBNUoR1I'; 

const YouTubeVideo = () => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet,contentDetails,statistics',
            id: VIDEO_ID,
            key: API_KEY,
          },
        });
        setVideoData(response.data.items[0]);
      } catch (err) {
        setError('Failed to fetch video data.');
      }
    };

    fetchVideoData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!videoData) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{videoData.snippet.title}</h1>
      {/* Container for video and description */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Laptop with YouTube Video */}
        <div className="w-full lg:w-1/2 relative ">
          <img
            src="https://3.bp.blogspot.com/-6O6PM4qT93I/VQxavCMrEUI/AAAAAAAABRI/zGD9SpxhOT8/s1600/Samsung-laptop.jpg" // Replace this with your laptop image URL
            alt="Laptop"
            className="w-full"
          />
          {/* Video inside the laptop screen */}
          <div className="absolute top-[5%] left-[18%] w-[65%] h-[80%] pb-[84px] ">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title={videoData.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Description - takes 60% of the screen on large screens */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-xl font-semibold mb-2">Video Description</h2>
          {/* <p className="mt-4">{videoData.snippet.description}</p> */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Video Duration: {videoData.contentDetails.duration}</li>
              <li>View Count: {videoData.statistics.viewCount}</li>
              <li>Like Count: {videoData.statistics.likeCount}</li>
              {/* Add your own custom content or more video details here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
