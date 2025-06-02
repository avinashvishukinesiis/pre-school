"use client"

import { useState, useEffect } from "react"
import { Star, Smile } from "lucide-react"

export default function ParentsTestimonial() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const testimonials = [
		{
			text: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for t",
			name: "Tina Roberts",
			subtitle: "Lorem Ipsum has been the",
			image: "/parentsTestimonial/parent1.jpg",
			cardColor: "bg-pink-400",
		},
		{
			text: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for t",
			name: "James Colines",
			subtitle: "Lorem Ipsum has been the",
			image: "/parentsTestimonial/parent2.jpg",
			cardColor: "bg-purple-500",
		},
		{
			text: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for t",
			name: "Kate Brown",
			subtitle: "Lorem Ipsum has been the",
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

			<div className="relative bg-[#FFE9EF] py-16 overflow-hidden m-0">


				<div className="container mx-auto px-4 relative z-10">
					{/* Header */}
					<div className="text-center mb-12">
						<div className="flex justify-center items-center mb-4 relative">
							<Star className="w-10 h-10 text-pink-400 mr-4" fill="currentColor" />
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800">What Parents Say</h2>
							<div className="absolute right-0 top-0">
								<Smile className="w-8 h-8 text-pink-300" />
							</div>
						</div>
						<p className="text-gray-600 text-lg max-w-3xl mx-auto">
							The LittleDino&apos;s mission is to provide affordable, high-quality early education and childcare services for
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


		</section>
	)
}
