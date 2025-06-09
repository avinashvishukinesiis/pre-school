"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export default function ParentsTestimonial() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const testimonials = [
		{
			text: "Cuddle has been an absolute blessing for our family. My daughter wakes up excited every morning to go to school. The teachers are warm, caring, and truly treat the children like their own.",
			name: "Tina Roberts",
			subtitle: "Mother of 3-year-old Ava",
			image: "/parentsTestimonial/parent1.jpg",
			cardColor: "bg-pink-400",
		},
		{
			text: "As working parents, we wanted a safe and nurturing place for our child—and we found that in Cuddle. Their day care program is thoughtfully designed and the staff communicates with us daily.",
			name: "James Colines",
			subtitle: "Father of 2-year-old Liam",
			image: "/parentsTestimonial/parent2.jpg",
			cardColor: "bg-purple-500",
		},
		{
			text: "We absolutely love how Cuddle blends fun with learning. From storytelling to outdoor play, my son has grown more confident, curious, and expressive. Highly recommended!",
			name: "Kate Brown",
			subtitle: "Mother of 4-year-old Noah",
			image: "/parentsTestimonial/parent3.jpg",
			cardColor: "bg-teal-500",
		},
	]


	// Auto-advance testimonials
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
		}, 5000) // Change every 5 seconds

		return () => clearInterval(interval)
	}, [testimonials.length])

	return (
		<section className="relative bg-white py-[20px]">

		
				<div className="relative mb-[-10px] top-0 left-0 right-0 m-0 p-0">
					<img src="./parentsTestimonial/topwave.svg" alt="topwave" />
				</div>

				<div className="relative bg-[#FFE9EF] py-16 overflow-hidden m-0 flex items-center justify-center">


					<div className="container mx-auto px-4 relative z-10 md:w-[90%]">
						{/* Header */}
						<div className="text-center mb-12">
							<div className="flex justify-center items-center mb-4 relative">
								<Star className="w-10 h-10 text-pink-400 mr-4" fill="currentColor" />
								<h2 className="text-4xl md:text-5xl font-bold text-gray-800">What Parents Say</h2>

								{/* support image's container */}
								<div className="absolute right-0 bottom-0 translate-y-[100%]">
									<img src="/parentsTestimonial/supportImage.svg" alt="supportImage" />
								</div>

							</div>
							<p className="text-gray-600 text-lg max-w-3xl mx-auto">
								Cuddle&apos;s mission is to provide affordable, high-quality early education and childcare services for
								working families to ensure every child.
							</p>
						</div>

						{/* Testimonials Grid */}
						<div className="grid md:grid-cols-3 gap-6 mb-12">
							{testimonials.map((testimonial, index) => (
								<div key={index} className="space-y-6">
									{/* Testimonial Card */}
									<div
										className={`${testimonial.cardColor} text-white p-8 rounded-3xl shadow-lg transform transition-all duration-500 ${index === currentIndex ? "scale-105" : "scale-100 opacity-80"
											}`}
									>
										<p className="text-white leading-relaxed">{testimonial.text}</p>
									</div>

									{/* Profile Section */}
									<div className="flex items-center space-x-4">
										<div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
											<img
												src={testimonial.image || "/placeholder.svg"}
												alt={testimonial.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
											<p className="text-gray-500 text-sm">{testimonial.subtitle}</p>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation Dots */}
						<div className="flex justify-center space-x-3">
							{testimonials.map((_, index) => (
								<button
									key={index}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-pink-400 scale-125" : "bg-gray-300 hover:bg-gray-400"
										}`}
									onClick={() => setCurrentIndex(index)}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
					</div>

					{/* Wavy bottom border */}
					<div className="absolute bottom-0 left-0 right-0">
						<img src="/parentsTestimonial/bottomwave.svg" alt="bottomwave" />
					</div>

				</div>

				{/* bottom wave container */}
				<div className="absolute bottom-0 z-[1000]">
					<img src="/parentsTestimonial/bottomwave.svg" alt="bottomwave" />
				</div>


		</section>
	)
}
