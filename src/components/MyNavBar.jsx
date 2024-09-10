import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const MyNavBar = ({ toggleSidebar }) => {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()
	const [title, setTitle] = useState('')

	useEffect(() => {
		const pathToTitle = {
			'/': 'Factura Fiscal CM',
			'/ARInvoices': 'Factura Fiscal AR',
			'/NCInvoices': 'Notas de Crédito CM',
			'/Packages': 'Packages',
			'/Search': 'Consulta',
			// Agrega más rutas y títulos según sea necesario
		}
		const currentTitle = pathToTitle[location.pathname] || ''
		setTitle(currentTitle)
	}, [location.pathname])

	const handleToggleSidebar = () => {
		setIsOpen(!isOpen)
		toggleSidebar()
	}
	return (
		<div className=' w-full xl:w-full h-20 rounded-tl-[60px] lg:w-screen bg-white text-black p-4 flex items-center  xl:justify-center '>
			<h1 className='uppercase cursor-pointer text-2xl font-bold lg:ml-48 ml-4 hidden xl:block'>
				{title}
			</h1>
			<nav className='flex items-center ml-auto'>
				<button className='xl:hidden mr-4' onClick={handleToggleSidebar}>
					{isOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
				</button>
				{/* <!-- Logo --> */}
				<div className='logo flex items-center self-center gap-2 mr-5'>
					<img
						src='https://cdn-icons-png.freepik.com/512/7718/7718888.png'
						className='w-10 h-10 bg-gray-500  rounded-3xl hidden xl:block'
					/>
					<div>
						<h3 className='font-bold text-black  hidden xl:block'>BlueMall User</h3>
						<span className='text-sm hidden xl:block'>Admin</span>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default MyNavBar
