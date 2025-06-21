"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, Calendar, Clock, User, ThumbsUp, Eye } from "lucide-react"
import { motion } from "framer-motion"

// This would normally come from an API call
const YOUTUBE_VIDEOS = [
  {
    id: "video1",
    title: "Siddharudh Swamiji Pravachana - The Path of Devotion",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-05-15T10:30:00Z",
    viewCount: "15,432",
    likeCount: "1,245",
    duration: "PT45M20S",
    description: "In this divine discourse, learn about the path of devotion and its significance in spiritual growth.",
  },
  {
    id: "video2",
    title: "Understanding Karma - Spiritual Discourse by Sri Dr. Shivkumar Swamiji",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742713234/wlcayjd8fi0eu6h2pnon.webp",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-06-22T14:15:00Z",
    viewCount: "12,876",
    likeCount: "987",
    duration: "PT38M45S",
    description: "Sri Dr. Shivkumar Swamiji explains the concept of Karma and how it affects our spiritual journey.",
  },
  {
    id: "video3",
    title: "The Essence of Bhagavad Gita - Chapter 2 Explained",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-07-10T09:45:00Z",
    viewCount: "18,543",
    likeCount: "1,567",
    duration: "PT52M10S",
    description: "A comprehensive explanation of the second chapter of Bhagavad Gita and its relevance in modern life.",
  },
  {
    id: "video4",
    title: "Morning Meditation Techniques - Guided Session",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742713234/wlcayjd8fi0eu6h2pnon.webp",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-08-05T06:30:00Z",
    viewCount: "9,876",
    likeCount: "876",
    duration: "PT25M30S",
    description: "Learn effective meditation techniques for your morning spiritual practice with this guided session.",
  },
  {
    id: "video5",
    title: "The Power of Mantra Chanting - Spiritual Benefits Explained",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-09-12T11:20:00Z",
    viewCount: "14,321",
    likeCount: "1,123",
    duration: "PT41M15S",
    description: "Discover the transformative power of mantra chanting and its benefits for spiritual growth.",
  },
  {
    id: "video6",
    title: "Special Discourse on Guru Purnima - The Significance of Guru",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742713234/wlcayjd8fi0eu6h2pnon.webp",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-07-03T16:45:00Z",
    viewCount: "21,543",
    likeCount: "1,876",
    duration: "PT58M20S",
    description:
      "A special discourse delivered on the auspicious occasion of Guru Purnima, explaining the importance of Guru in spiritual life.",
  },
  {
    id: "video7",
    title: "Vedanta Philosophy - Understanding Non-Duality",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-10-08T13:10:00Z",
    viewCount: "11,234",
    likeCount: "932",
    duration: "PT47M50S",
    description: "An in-depth exploration of Advaita Vedanta philosophy and the concept of non-duality.",
  },
  {
    id: "video8",
    title: "Bhakti Yoga - The Path of Divine Love",
    thumbnail: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742713234/wlcayjd8fi0eu6h2pnon.webp",
    channelTitle: "Siddharudh Math Official",
    publishedAt: "2023-11-15T10:00:00Z",
    viewCount: "16,789",
    likeCount: "1,345",
    duration: "PT43M25S",
    description: "Learn about Bhakti Yoga, the path of devotion and divine love, and how to practice it in daily life.",
  },
]

// Format YouTube duration string to readable format
const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

  const hours = match && match[1] ? Number.parseInt(match[1].replace("H", "")) : 0
  const minutes = match && match[2] ? Number.parseInt(match[2].replace("M", "")) : 0
  const seconds = match && match[3] ? Number.parseInt(match[3].replace("S", "")) : 0

  let result = ""
  if (hours > 0) {
    result += `${hours}:`
  }
  result += `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  return result
}

// Format date to readable format
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function PravachanaPage() {
  const [selectedVideo, setSelectedVideo] = useState(YOUTUBE_VIDEOS[0])
  const [relatedVideos, setRelatedVideos] = useState(YOUTUBE_VIDEOS.slice(1))

  useEffect(() => {
    // Update related videos when selected video changes
    setRelatedVideos(YOUTUBE_VIDEOS.filter((video) => video.id !== selectedVideo.id))
  }, [selectedVideo])

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
            Enlightening discourses by Sadguru Sri Siddharoodh Swamiji and Sri Dr. Shivkumar Swamiji
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={selectedVideo.thumbnail || "/placeholder.svg"}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFCB05] hover:bg-[#e6b700] text-[#37131d] rounded-full p-4 shadow-lg"
                    >
                      <Play className="w-8 h-8 fill-current" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#37131d] mb-3 font-['Playfair_Display',serif]">
                  {selectedVideo.title}
                </h2>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedVideo.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{formatDuration(selectedVideo.duration)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{selectedVideo.channelTitle}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{selectedVideo.viewCount} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{selectedVideo.likeCount} likes</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{selectedVideo.description}</p>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#37131d]/10 text-[#37131d] px-3 py-1 rounded-full text-sm">
                    Spiritual Discourse
                  </span>
                  <span className="bg-[#37131d]/10 text-[#37131d] px-3 py-1 rounded-full text-sm">Vedanta</span>
                  <span className="bg-[#37131d]/10 text-[#37131d] px-3 py-1 rounded-full text-sm">Bhakti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Videos */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#37131d] mb-4 font-['Playfair_Display',serif]">
              Recommended Pravachanas
            </h3>

            <div className="space-y-4">
              {relatedVideos.slice(0, 5).map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-1/3">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full aspect-video sm:h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                        {formatDuration(video.duration)}
                      </div>
                    </div>
                    <div className="p-3 sm:w-2/3">
                      <h4 className="font-medium text-[#37131d] line-clamp-2 mb-1">{video.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span>{formatDate(video.publishedAt)}</span>
                        <span>•</span>
                        <span>{video.viewCount} views</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* More Videos Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#37131d] mb-6 font-['Playfair_Display',serif] text-center">
            More Divine Discourses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedVideos.slice(0, 8).map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                      {formatDuration(video.duration)}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#FFCB05]/80 hover:bg-[#FFCB05] text-[#37131d] rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-[#37131d] line-clamp-2 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{formatDate(video.publishedAt)}</span>
                    <span>{video.viewCount} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-[#37131d] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFCB05] mb-4 font-['Playfair_Display',serif]">
              Subscribe to Our Channel
            </h2>
            <p className="text-white mb-8">
              Stay updated with the latest divine discourses and spiritual teachings from our Swamijis
            </p>
            <Link href="https://youtube.com" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFCB05] hover:bg-[#e6b700] text-[#37131d] font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                Subscribe on YouTube
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

