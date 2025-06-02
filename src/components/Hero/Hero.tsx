import React from 'react'

const Hero = () => {
	return (
		<div className='flex flex-col justify-center items-center py-[20px] gap-[25px]'>


			{/* hero top section */}
			<div className='flex justify-center items-stretch py-[15px]' >
				{/* left section */}
				<div className='flex-1 flex flex-col gap-[20px]'>
					<div className='flex justify-center items-strech'>
						<h2 className='text-[48px] p-0 m-0 flex-1 leading-[48px]'> Better Future For <br /> Your Kids </h2>
					</div>
					<div>
						<button className='bg-[#EF577C] flex justify-center items-center  text-white rounded-full'> <span className='m-[2px] flex rounded-full border-[4px] border-dotted border-white h-full w-full px-[15px] py-[12px]' > Schedule a Visit </span> </button>
					</div>
				</div>

				{/* right section */}
				<div className='flex-1 flex'>
					<p className='text-[15px]'> Look into the eyes of a young child and see the sparkle and wonder. Develop these passions and watch the adult bloom into someone special. At Littledino Center, we work every day to build the foundations for amazing futures.</p>
				</div>

			</div>

			{/* image section */}
			<div>
				<img className='h-full w-full object-cover' src="/child-image.jpg" alt="hero-image" />
			</div>

		</div>
	)
}

export default Hero
