import React from 'react'

const Layout = ({children}) => {
  return (
	<div className='flex justify-center items-center'>

		<div className='md:w-[75%]'>
			{children}
		</div>

	</div>
  )
}

export default Layout
