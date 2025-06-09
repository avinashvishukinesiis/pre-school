"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Section3() {
  const [activeCard, setActiveCard] = useState(1) // Default to Day Care (index 1)

  const programs = [
  {
    title: "Pre School",
    image: "/pre-school.jpg",
    content:
      "Cuddle’s preschool program sparks curiosity through playful learning, storytelling, and hands-on activities. We nurture social, emotional, and cognitive development to prepare your little ones for school and life.",
  },
  {
    title: "Day Care",
    image: "/day-care.jpg",
    content:
      "Our safe, vibrant Day Care gives your child a second home. With age-appropriate games, guided learning, healthy meals, and nap time, we create a loving environment for full-day care you can trust.",
  },
  {
    title: "Parent Counselling",
    image: "/parent-counselling.jpg",
    content:
      "Parenting is a journey—and we’re here to support you. Our expert-led sessions offer personalized guidance, behavioral tips, and emotional support to help you connect more deeply with your child.",
  },
  {
    title: "Teacher Training",
    image: "/teacher-training.jpg",
    content:
      "Empowering educators with the skills and heart to teach little learners. Our training blends theory and practice to develop creative, compassionate, and confident early childhood professionals.",
  },
]

  const handleCardClick = (index: number) => {
    setActiveCard(index)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Top wavy border */}
      {/* <div className="absolute top-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      {/* first top wave image container */}
      <div>
        <img src="./wave.svg" alt="" />
      </div>

      {/* background color */}
      <div className="absolute bg-[#8E449A]  w-full h-[450px] z-[100] rounded-b-4xl">
      </div>

      {/* <div className="absolute">
        <svg
          id="wave"
          style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
          viewBox="0 0 1440 360"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(142, 68, 154, 1)" offset="0%" />
              <stop stopColor="rgba(142, 68, 154, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,36L26.7,72C53.3,108,107,180,160,198C213.3,216,267,180,320,186C373.3,192,427,240,480,228C533.3,216,587,144,640,114C693.3,84,747,96,800,84C853.3,72,907,36,960,60C1013.3,84,1067,168,1120,186C1173.3,204,1227,156,1280,168C1333.3,180,1387,252,1440,270C1493.3,288,1547,252,1600,198C1653.3,144,1707,72,1760,48C1813.3,24,1867,48,1920,78C1973.3,108,2027,144,2080,180C2133.3,216,2187,252,2240,222C2293.3,192,2347,96,2400,78C2453.3,60,2507,120,2560,168C2613.3,216,2667,252,2720,252C2773.3,252,2827,216,2880,210C2933.3,204,2987,228,3040,240C3093.3,252,3147,252,3200,252C3253.3,252,3307,252,3360,228C3413.3,204,3467,156,3520,126C3573.3,96,3627,84,3680,114C3733.3,144,3787,216,3813,252L3840,288L3840,360L3813.3,360C3786.7,360,3733,360,3680,360C3626.7,360,3573,360,3520,360C3466.7,360,3413,360,3360,360C3306.7,360,3253,360,3200,360C3146.7,360,3093,360,3040,360C2986.7,360,2933,360,2880,360C2826.7,360,2773,360,2720,360C2666.7,360,2613,360,2560,360C2506.7,360,2453,360,2400,360C2346.7,360,2293,360,2240,360C2186.7,360,2133,360,2080,360C2026.7,360,1973,360,1920,360C1866.7,360,1813,360,1760,360C1706.7,360,1653,360,1600,360C1546.7,360,1493,360,1440,360C1386.7,360,1333,360,1280,360C1226.7,360,1173,360,1120,360C1066.7,360,1013,360,960,360C906.7,360,853,360,800,360C746.7,360,693,360,640,360C586.7,360,533,360,480,360C426.7,360,373,360,320,360C266.7,360,213,360,160,360C106.7,360,53,360,27,360L0,360Z"
          />
        </svg>
      </div> */}
      <div className="w-full flex items-center justify-center">
        <div className="pt-16 pb-32 relative z-[110] md:w-[90%]">
          {/* Decorative elements */}
          {/* <div className="absolute right-1/4 top-40 opacity-20">
          <Hexagon className="w-12 h-12 text-white" />
        </div>
        <div className="absolute right-16 top-60 opacity-20">
          <Sparkles className="w-16 h-16 text-white" />
        </div>
        <div className="absolute left-1/3 top-48 opacity-20">
          <svg width="100" height="50" viewBox="0 0 100 50" className="text-white">
            <path
              d="M10,30 Q25,5 40,30 T70,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div> */}

          <div className="container mx-auto px-4 relative">
            {/* Heading */}
            <div className="mb-16 relative">
              <h2 className="text-5xl font-bold text-white mb-2">Cuddles Programs</h2>
              <div className="w-16 h-1 bg-white mb-6"></div>
              <p className="text-white text-lg max-w-2xl">
                Kidzo mission is to provide affordable, high-quality early education and childcare services for working
                families to ensure every child.
              </p>

              {/* <div className="absolute">
				<img src="./star-brush.jpg" alt="star-brush" />
			</div> */}
            </div>

            {/* Program cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => {
                const isActive = activeCard === index
                const bgColor = isActive ? "bg-[#812B8F]" : "bg-white"
                const textColor = isActive ? "text-white" : "text-gray-800"
                const linkColor = isActive ? "text-white" : "text-gray-700"

                return (
                  <div
                    key={index}
                    className={`${bgColor} ${textColor} rounded-lg shadow-lg relative cursor-pointer transition-all duration-300 hover:shadow-xl`}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* Circle image */}
                    <div className="flex justify-center -mt-12 mb-4">
                      <div className="rounded-full relative z-[100] border-4 border-dashed border-pink-300 p-1">
                        <div className="rounded-full overflow-hidden h-24 w-24">
                          {/* <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          width={150}
                          height={150}
                          className="object-cover"
                        /> */}

                          {/* <img
                            src={program.image || "/placeholder.svg"}
                            alt={program.image}
                            className="w-full h-full object-cover"
                          /> */}
                          <Image
                            src={program.image || "/placeholder.svg"}
                            alt={program.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-4">{program.title}</h3>
                      <p className="text-[14px] mb-6">{program.content}</p>
                      <Link href="#" className={`inline-block font-medium ${linkColor} hover:underline`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom wavy border */}
          {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div> */}
        </div>
      </div>

    </section>
  )
}
