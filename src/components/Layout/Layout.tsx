import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
	<div className='flex justify-center items-center'>

		<div className='md:w-[90%]'>
			{children}
		</div>

	</div>
  )
}

export default Layout
