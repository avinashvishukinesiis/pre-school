"use client"

import { useState } from "react"
import Link from "next/link"

export default function Section3() {
  const [activeCard, setActiveCard] = useState(1) // Default to Day Care (index 1)

  const programs = [
    {
      title: "Pre School",
      image: "./pre-school.jpg",
      content:
        "The amazing way to olor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore inventore The amazing way to olor sit amet,",
    },
    {
      title: "Day Care",
      image: "./day-care.jpg",
      content:
        "The amazing way to olor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore inventore The amazing way to olor sit amet,",
    },
    {
      title: "Parent Counselling",
      image: "./parent-counselling.jpg",
      content:
        "The amazing way to olor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore inventore The amazing way to olor sit amet,",
    },
    {
      title: "Teacher Training",
      image: "./teacher-training.jpg",
      content:
        "The amazing way to olor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore inventore The amazing way to olor sit amet,",
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
      <div className="absolute bg-[#8E449A] top-[100px] w-full h-[450px] z-[100]">
      </div>

      <div className="pt-16 pb-32 relative z-[110]">
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

                        <img
                          src={program.image || "/placeholder.svg"}
                          alt={program.image}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                    <p className="mb-6">{program.content}</p>
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
    </section>
  )
}
