import React from 'react'

const Hero = () => {
	return (
		<div className='flex flex-col py-[20px] gap-[25px]'>
			{/* hero top section */}
			<div className='flex py-[15px]' >
				{/* left section */}
				<div className='flex-1 flex flex-col gap-[20px]'>
					<div className='flex justify-center items-strech'>
						<h2 className='text-[48px] p-0 m-0 flex-1 leading-[48px]'> We take play <br /> seriously</h2>
					</div>
					<div>
						<button className='bg-[#EF577C] flex justify-center items-center  text-white rounded-full'> <span className='m-[2px] flex rounded-full border-[4px] border-dotted border-white h-full w-full px-[15px] py-[12px]' > Schedule a Visit </span> </button>
					</div>
				</div>

				{/* right section */}
				<div className='flex-1 flex'>
					<p className='text-[15px]'>
						At Cuddles Preschool, we believe that every child’s journey begins with a sense of wonder, joy, and discovery. Our preschool is more than just a place for early education it’s a second home where children feel loved, valued, and inspired to explore the world around them.

					</p>
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
