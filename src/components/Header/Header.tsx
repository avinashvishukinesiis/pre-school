import React from 'react'
import TopBanner from './TopBanner'

const Header = () => {

	// const bgColor = "bg-[#00A8B3]"

	return (
		<div>
			<TopBanner />

			{/* actual header */}
			<div className='bg-[#00A8B3] py-[25px] px-[8px] flex justify-center items-center'>


				{/* wrapper */}
				<div className='md:w-[80%] flex justify-center items-center md:gap-[20px] relative'>

					{/* main image */}
					<div className='text-white absolute left-0'> Main Image </div>

					{/* nav links */}
					<div className='text-white'>
						<ul className='flex gap-[25px]'>
							<li className='px-[10px] py-[5px] justify-center items-center cursor-pointer'> Programs </li>
							<li className='px-[10px] py-[5px] justify-center items-center cursor-pointer '> Curriculum </li>
							<li className='px-[10px] py-[5px] justify-center items-center cursor-pointer'> Partnerships </li>
							<li className='px-[10px] py-[5px] justify-center items-center cursor-pointer '> Safety </li>
							<li className='px-[10px] py-[5px] justify-center items-center cursor-pointer '> Support </li>
							<li className='px-[10px] py-[5px] justify-center items-center cursor-pointer '> Contacts Us </li>
						</ul>
					</div>

				</div>

			</div>

		</div>
	)
}

export default Header
