"use client";

import { useState, useEffect } from "react";
import { Play, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const API_KEY = "AIzaSyCBI_wJB-2xJgqqu1n6sULEaYcGd-Mpnik";
const CHANNEL_ID = "UCY6OgXcUJTggfsie2UvYGhw";
const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/@chidambarashramsrishiddhar2341";

const fetchVideos = async (pageToken = "") => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5&pageToken=${pageToken}`
    );
    const data = await response.json();
    console.log("Fetched video data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return null;
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function PravachanaPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchVideos();
      if (videoData && videoData.items.length > 0) {
        setVideos(videoData.items);
        setSelectedVideo(videoData.items[0]); // Set the first video as the selected video
        setNextPageToken(videoData.nextPageToken);
      } else {
        window.location.href = YOUTUBE_CHANNEL_URL; // Redirect to YouTube channel if no videos are found
      }
    };

    loadVideos();
  }, []);

  const loadMoreVideos = async () => {
    const videoData = await fetchVideos(nextPageToken);
    if (videoData && videoData.items.length > 0) {
      setVideos((prevVideos) => [...prevVideos, ...videoData.items]);
      setNextPageToken(videoData.nextPageToken);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#37131d]/70 to-[#37131d]/90"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#FFCB05] mb-4 font-['Playfair_Display',serif]">
            Divine Pravachanas
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl font-['Playfair_Display',serif]">
            Enlightening discourses by Sadguru Sri Siddharoodh Swamiji and Sri
            Dr. Shivkumar Swamiji
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured Video */}
        {selectedVideo && (
          <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
            <div className="relative aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#37131d] mb-3 font-['Playfair_Display',serif]">
                {selectedVideo.snippet.title}
              </h2>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedVideo.snippet.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedVideo.snippet.channelTitle}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {selectedVideo.snippet.description}
              </p>
            </div>
          </div>
        )}

        {/* Additional Videos */}
        <h3 className="text-xl font-bold text-[#37131d] mb-4 font-['Playfair_Display',serif]">
          More Videos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video) => (
            <motion.div
              key={video.id.videoId}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-1/3">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full aspect-video sm:h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:w-2/3">
                  <h4 className="font-medium text-[#37131d] line-clamp-2 mb-1">
                    {video.snippet.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span>{formatDate(video.snippet.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {nextPageToken && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreVideos}
              className="bg-[#FFCB05] text-[#37131d] px-4 py-2 rounded-full font-bold transition-colors hover:bg-[#e6b804]"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
