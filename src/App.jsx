import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

// Components
import MyNavbar from './components/MyNavBar'
import Sidebar from './components/Sidebar'
import { Login } from './components/Login'
// -- Packages
import { PackageProvider } from './context/PackageContext'
import { PackageList } from './components/PackageList'
import { PackageDetail } from './components/PackageDetail'

// Pages
import { Invoice } from './pages/Invoice'
import { ARInvoice } from './pages/ARInvoice'
import { Search } from './pages/Search'

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	return (
		<PackageProvider>
			<Router>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/*'
						element={
							<div className='xl:flex '>
								<div className={`${sidebarOpen ? 'block' : 'hidden'} xl:block xl:w-1/6 rounded-xl`}>
									<Sidebar isOpen={sidebarOpen} />
								</div>

								<div className='xl:flex h-screen flex-wrap items-center justify-center  bg-white w-[90%]  z-30 rounded-l-[60px]'>
									<div className='fixed top-0 right-0 w-[80%] z-40'>
										<MyNavbar toggleSidebar={toggleSidebar} />
									</div>
									<div className='xl:ml-32 mt-20 w-full flex items-center justify-center'>
										<div className=''>
											<Routes>
												<Route path='/' element={<Invoice />} />
												<Route path='/arinvoices' element={<ARInvoice />} />
												<Route path='/search' element={<Search />} />
												<Route exact path='/packages' element={<PackageList />} />
												<Route path='/packages/:id' element={<PackageDetail />} />
											</Routes>
										</div>
									</div>
								</div>
							</div>
						}
					/>
				</Routes>
			</Router>
		</PackageProvider>
	)
}

export default App
