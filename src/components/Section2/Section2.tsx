import React from 'react'

const Section2 = () => {
  return (
	<div className='flex justify-center items-center gap-[20px]'>

		{/* left section */}
		<div className='flex-1' >
			<h2 className='text-[48px] p-0 m-0 flex-1 leading-[48px]' > Why Early Education Matters </h2>
			<p className='text-[15px]'>Look into the eyes of a young child and see the sparkle and wonder. Develop these passions and watch the adult bloom into someone special. At Littledino Center, we work every day to build the foundations for amazing futures.</p>

			<div className='flex justify-start my-[10px]'>
				<button className='border-[5px] rounded-tl-full rounded-bl-full rounded-br-full  border-dotted border-[#EF577C] px-[20px] font-semibold cursor-pointer text-[#EF577C] py-[10px]'>Discover Now</button>
			</div>

		</div>


		{/* right section */}
		<div className='flex-1 flex justify-center items-center'>

			<div className='w-[80%] h-[90%] object-contain flex justify-center items-center ' >
				<img src="./child-image2.png" alt="child-image-2" />
			</div>
			
		</div>

	</div>
  )
}

export default Section2
