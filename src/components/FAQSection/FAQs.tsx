"use client"

import { useState } from "react"
import { Star, Plus } from "lucide-react"

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(2) // Third item open by default

  const faqs = [
    {
      question: "What are your operating hours?",
      answer:
        "Our daycare operates Monday through Friday from 7:00 AM to 6:00 PM. We also offer extended hours for working parents who need early drop-off or late pick-up services.",
    },
    {
      question: "Do you offer part-time enrollment?",
      answer:
        "Yes, we offer flexible enrollment options including part-time schedules. You can choose from 2-day, 3-day, or 5-day programs to fit your family's needs and schedule.",
    },
    {
      question: "What age groups do you accept?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section>

      {/* wave image svg container */}
      <div className="mb-[-20px]">
        <img src="/faqSection/top-wave.svg" alt="top-wave" />
      </div>

      <div className="py-16 bg-[#FDEAC7] relative overflow-hidden" >
        {/* Decorative elements */}
        <div className="absolute bottom-10 right-10">
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10L25 25M30 5L45 20M50 15L65 30"
              stroke="#4FD1C7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8,4"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 justify-center items-center">
            {/* Left side - FAQ Content */}
            <div>
              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mr-4">
                    Know More About Cuddles
                  </h2>
                  <Star className="w-12 h-12 text-yellow-400" fill="currentColor" />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The LittleDino's mission is to provide affordable, high-quality early education and childcare services
                  for working families to ensure every child.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 ${openIndex === index
                        ? "bg-gradient-to-r from-yellow-300 to-orange-300 shadow-lg"
                        : "bg-white shadow-md hover:shadow-lg"
                      }`}
                  >
                    <button
                      className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span
                        className={`text-lg font-semibold ${openIndex === index ? "text-gray-900" : "text-gray-800"}`}
                      >
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 ml-4 ${openIndex === index ? "text-gray-900" : "text-gray-600"}`}>
                        {openIndex === index ? (
                          <Plus className="w-6 h-6 transform rotate-45 transition-transform duration-300" />
                        ) : (
                          <Plus className="w-6 h-6 transition-transform duration-300" />
                        )}
                      </div>
                    </button>

                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-gray-200 border-opacity-30">
                          <p className="text-gray-800 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative">
                {/* Dashed circle border */}
                <div className="absolute inset-0 border-4 border-dashed border-yellow-400 rounded-full transform scale-110"></div>

                {/* Image container */}
                <div className="relative z-10 rounded-full transform duration-300 overflow-hidden w-96 h-96">
                  <img
                    src="/faqSection/hero.jpg"
                    alt="Four happy children lying on their stomachs in a classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
