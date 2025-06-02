import React from 'react'

const CompanySection = () => {

	const companyImages = [
		{
			src : "/companyImg1.jpg"
		},
		{
			src : "/companyImg2.jpg"
		},
		{
			src : "/companyImg3.jpg"
		},
		{
			src : "/companyImg4.jpg"
		},
		{
			src : "/companyImg1.jpg"
		}
	]

  return (
	<div className='flex justify-center items-center md:py-[20px]'>

		<div className='container w-[75%] flex justify-around items-center gap-[10px]' >

			{companyImages.map((img , ind)=>{
				return <div key={ind} className='flex-1 flex justify-center items-center'>
					<img className='object-cover' src={img.src} alt={img.src} />
				</div>
			})}

		</div>

	</div>
  )
}

export default CompanySection
