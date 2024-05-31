const MyNavBar = () => {
	return (
		<div className='w-full min-h-20 h-20 bg-white text-black p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between '>
			<h1 className='uppercase font-semibold cursor-pointer text-xl ml-4'>MRI BAVEL</h1>
			<nav className='flex items-center justify-center gap-4'>
				{/* <a href='#' className='xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors'>
					Factura
				</a> */}

				{/* <!-- Logo --> */}
				<div className='logo flex items-center self-center gap-2 mr-5 '>
					<img
						src='https://cdn-icons-png.freepik.com/512/7718/7718888.png'
						className='w-10 h-10 bg-gray-500  rounded-3xl'
					/>
					<div>
						<h3 className='font-bold text-black mb-[-5px]'>BlueMall User</h3>
						<span className='text-sm'>Admin</span>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default MyNavBar
