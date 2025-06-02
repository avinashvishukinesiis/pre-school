"use client"

import type React from "react"
import { useState } from "react"
import { Star } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 relative overflow-hidden min-h-screen flex justify-center items-center bg-[#FFFFFF]">

      <div className="container mx-auto w-[70%] px-4 relative z-10 bg-[#FFFFFF]">
        {/* Decorative teal shape top left */}
        <div className="absolute top-0 left-16">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 20C45 5 70 15 85 35C95 50 90 75 70 85C50 95 25 85 15 65C5 45 15 35 30 20Z"
              fill="#A8D5D0"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Large dashed circle on the right */}
        {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-40">
          <div className="w-[600px] h-[600px] border-4 border-dashed border-pink-300 rounded-full opacity-60"></div>
        </div> */}

        <div className="container mx-auto px-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left side - Child with megaphone image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/contactUs/leftimage.jpg"
                  alt="Child with megaphone sitting cross-legged wearing light blue sweater"
                  className="w-full max-w-md"
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="max-w-lg relative bg-white">

              {/* dotted frame */}
              <div className="absolute right-[-100px] top-[120px] bg-transparent z-0">
                <img className="bg-transparent" src="./contactUs/form-frame.jpg" alt="form-frame" />
              </div>

              {/* Contact Us label */}
              <p className="text-pink-400 font-medium text-lg mb-6 relative z-10">Contact Us</p>

              {/* Main heading */}
              <h1 className="text-5xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 relative z-10 py-[20px]">
                Join Our Best Fun Classes
              </h1>

              {/* Pink star
              <div className="mb-12">
                <Star className="w-12 h-12 text-pink-400" fill="currentColor" />
              </div> */}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-[10px] bg-white shadow-2xl rounded-lg px-[20px] py-[10px] relative z-10">
                <div className=" rounded-md px-[10px] py-[5px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-1 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-pink-400 text-gray-800 text-[15px]"
                    required
                  />
                </div>

                <div className=" rounded-md px-[10px] py-[5px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-1 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-pink-400 text-gray-800 text-[15px]"
                    required
                  />
                </div>

                <div className=" rounded-md px-[10px] py-[5px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-1 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-pink-400 text-gray-800 text-[15px]"
                    required
                  />
                </div>

                <div className=" rounded-md px-[10px] py-[5px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-1 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-pink-400 text-gray-800 text-[15px]"
                    required
                  />
                </div>

                <div className=" rounded-md px-[10px] py-[5px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">Comment</label>
                  <textarea
                    name="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="w-full px-0 py-1 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-pink-400 text-gray-800 text-lg resize-[15px]"
                  ></textarea>
                </div>

                <div className="pt-8 py-[20px] flex justify-start items-center ">
                 <div className="rounded-br-full rounded-tl-full rounded-bl-full  bg-[#EF577C] p-[2px]">
                 <button
                    type="submit"
                    className=" text-white border-[4px] border-dotted border-white px-10 py-2 rounded-br-full rounded-tl-full rounded-bl-full font-medium text-md transition-colors duration-300 shadow-lg"
                  >
                    Submit Now
                  </button>
                 </div>
                </div>
              </form>
            </div>


          </div>
        </div>

        {/* Bottom colorful wave */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            ></path>
          </svg>
        </div> */}
      </div>

    </section>
  )
}
