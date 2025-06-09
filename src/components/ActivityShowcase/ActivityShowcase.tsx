"use client"

import { useState, useEffect } from "react"

const ActivityShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const activities = [
  {
    title: "Makerspace",
    des: "Where tiny hands build big ideas through creativity and innovation.",
    src: "/photo/1.jpg",
  },
  {
    title: "Art Studio",
    des: "A colorful world where imagination comes to life with every brushstroke.",
    src: "/photo/7.jpg",
  },
  {
    title: "Outdoor Play Space",
    des: "Adventure awaits with climbing, running, and nature exploration.",
    src: "/photo/18.jpg",
  },
  {
    title: "Homerooms",
    des: "A cozy, nurturing space where learning feels like a second home.",
    src: "/photo/27.jpg",
  },
  {
    title: "Movement Studio",
    des: "Stretch, dance, and grow—where little bodies stay active and joyful.",
    src: "/photo/22.jpg",
  },
  {
    title: "Library & Reading Books",
    des: "Storytime magic that sparks curiosity and a love for books.",
    src: "/photo/14.jpg",
  },
  {
    title: "Construction Area",
    des: "Future architects at work, stacking, designing, and problem-solving.",
    src: "/photo/34.jpg",
  },
  {
    title: "Changing Room",
    des: "A tidy, organized space for quick transitions and independence.",
    src: "/photo/2.jpg",
  },
  {
    title: "Dining Area",
    des: "Fueling young minds with healthy meals and happy conversations.",
    src: "/photo/11.jpg",
  },
  {
    title: "Montessori Zone",
    des: "Hands-on learning that fosters confidence and self-discovery.",
    src: "/photo/42.jpg",
  },
  {
    title: "Nap Room",
    des: "A peaceful retreat for sweet dreams and recharging little energies.",
    src: "/photo/27.jpg",
  },
  {
    title: "Music Room",
    des: "Where giggles, rhythm, and melodies create the soundtrack of childhood.",
    src: "/photo/32.jpg",
  },
]


  // Create infinite loop by duplicating activities
  const extendedActivities = [
    ...activities.slice(-5), // Last 5 items at the beginning
    ...activities,
    ...activities.slice(0, 5), // First 5 items at the end
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex >= activities.length + 5) {
      // Reset to beginning without transition
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(5) // Start position (after duplicated items)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 700) // Wait for transition to complete
    } else if (currentIndex < 5) {
      // Reset to end without transition
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(activities.length + 4) // End position (before duplicated items)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 700)
    }
  }, [currentIndex, activities.length])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + 5) // Offset by 5 due to duplicated items at start
  }

  return (
    <section className="py-16 bg-[#F7F7F7] relative flex items-center justify-center">

    <div className="md:w-[90%]">

      {/* top wave container */}
      <div className="absolute top-0 translate-y-[-95%]">
        <img src="/activities/topwave.svg" alt="topwave" />
      </div>

      <div className="container mx-auto px-4 bg-[#F7F7F7]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full mr-4 flex items-center justify-center">
              <span className="text-white font-bold text-sm">12</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">12 different activity zones</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cuddle&apos;s mission is to provide affordable, high-quality early education and childcare services
          </p>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Carousel Track */}
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {extendedActivities.map((activity, index) => (
              <div key={`${activity.title}-${index}`} className="w-1/5 flex-shrink-0 px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  {/* Image */}
                  <div className="h-48">
                    <img
                      src={activity.src || "/placeholder.svg?height=192&width=300"}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{activity.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {activities.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor((currentIndex - 5) % activities.length) === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* bottom wave container */}
      <div className="absolute bottom-0 translate-y-[100%]">        
        <img src="/activities/bottomwave.svg" alt="bottomwave" />
      </div>
    </div>

    </section>
  )
}

export default ActivityShowcase
