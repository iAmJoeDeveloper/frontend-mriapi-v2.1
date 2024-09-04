import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen }) => {
	let { pathname } = useLocation()
	let subpage = pathname.split('/')?.[1]
	// console.log(subpage)

	function Linkness(type = null) {
		let classes =
			'flex items-center gap-4 hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'

		if (type === subpage) {
			classes += ' text-black bg-gray-200 '
		} else {
			classes += ' '
		}

		return classes
	}

	return (
		<aside
			className={`fixed z-20 top-0 left-0 flex flex-col justify-between gap-8 bg-[#292D32] 2xl:w-80 xl:w-72 md:w-72  text-white h-screen pt-8 pl-4 transition-transform duration-300 ${
				isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
			}`}
		>
			{/* <!-- Top --> */}
			<section>
				{/* <!-- Logo --> */}
				<div className='logo flex flex-col items-center justify-center mb-6 w-[90%]'>
					<h2 className='text-4xl font-bold '>MRI API</h2>
					<p className='text-gray-400 text-center'>Invoice Management Dashboard</p>
				</div>
				{/* <!-- Search --> */}
				{/* <form>
					<input
						type='text'
						className='w-full p-2 rounded-lg outline-none bg-gray-200'
						placeholder='Buscador'
					/>
				</form> */}
				<ul className='mt-4 2xl:mb-8 xl:mb-4 md:mb-8'>
					<li>
						<a
							href='#'
							className='flex items-center gap-6  hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
								/>
							</svg>
							<span>Historico</span>
						</a>
					</li>
				</ul>
				<hr className='2xl:my-8 xl:my-4 md:my-8' />
				<h5 className='uppercase font-bold text-md text-white mb-2 '>Menu</h5>
				<ul>
					<li>
						<NavLink to='/' className={Linkness('')}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
								/>
							</svg>
							<span>Factura Fiscal CM</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/ARInvoices' className={Linkness('ARInvoices')}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
								/>
							</svg>
							<span>Factura Fiscal AR</span>
						</NavLink>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center gap-4  hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
								/>
							</svg>
							<span>Notas de crédito</span>
						</a>
					</li>
					<li>
						<NavLink to='/Packages' className={Linkness('Packages')}>
							<svg viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em'>
								<path d='M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' />
							</svg>
							<span>Packages</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/Search' className={Linkness('Search')}>
							<svg viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em'>
								<path d='M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' />
							</svg>
							<span>Consulta</span>
						</NavLink>
					</li>

					<li>
						<a
							href='#'
							className='flex items-center gap-4  hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
								/>
							</svg>
							<span>Usuarios</span>
						</a>
					</li>
				</ul>
				<h5 className='uppercase font-bold text-md text-white my-2'>Proyectos</h5>
				<ul>
					<li>
						<a
							href='#'
							className='flex items-center gap-4  hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5 text-indigo-500'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
								/>
							</svg>
							<span>QR Factura Fiscal</span>
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center gap-4  hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5 text-sky-500'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
								/>
							</svg>
							<span>QR Notas de crédito</span>
						</a>
					</li>
				</ul>
			</section>
			{/* <!-- Bottom --> */}
			<section>
				{/* <!-- Settings --> */}
				<ul className='my-4'>
					<li>
						<a
							href='#'
							className='flex items-center gap-6  text-gray-500 hover:bg-white hover:text-black 2xl:p-4 xl:p-2 md:p-4 rounded-tl-3xl rounded-bl-3xl group transition-colors'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
							<span className='font-bold '>Ajustes</span>
						</a>
					</li>
				</ul>
			</section>
		</aside>
	)
}

export default Sidebar
