import React from 'react'

const CompanySection = () => {

	const companyImages = [
		{
			src: "/companyImg1.jpg"
		},
		{
			src: "/companyImg2.jpg"
		},
		{
			src: "/companyImg3.jpg"
		},
		{
			src: "/companyImg4.jpg"
		},
		{
			src: "/companyImg1.jpg"
		}
	]

	return (
		<div className='flex justify-center items-center md:py-[20px]'>

			{/* parent container */}
			<div className='flex justify-center items-center w-full min-h-[200px] relative' >

				{/* images sections */}
				<div className='absolute left-[20px] top-[50%] translate-y-[-50%] '>
					<img src="/companySectionImages/wave1.jpg" alt="wave1" />
				</div>

				{/* second wave's container */}
				<div className='absolute right-[20px]'>
					<img src="/companySectionImages/wave2.jpg" alt="wave2" className='w-auto h-[50px]' />
				</div>

				<div className='container w-[90%] flex justify-around items-center gap-[10px]' >

					{companyImages.map((img, ind) => {
						return <div key={ind} className='flex-1 flex justify-center items-center'>
							<img className='object-cover' src={img.src} alt={img.src} />
						</div>
					})}

				</div>
			</div>

		</div>
	)
}

export default CompanySection
