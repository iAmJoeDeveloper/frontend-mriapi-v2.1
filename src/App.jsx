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
import { NCInvoice } from './pages/NCInvoice'

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

								<div className='xl:flex justify-between items-center h-screen  bg-white w-[80%] 2xl:w-[90%] xl:w-[90%] md:w-[100%] 2xl:z-30 z-10 2xl:rounded-l-[20px] '>
									<div className='fixed top-0 right-0 w-[100%] 2xl:w-[80%] xl:w-[90%]'>
										<MyNavbar toggleSidebar={toggleSidebar} />
									</div>
									<div className='xl:ml-32 2xl:ml-32 2xl:mt-auto xl:mt-auto w-full flex items-center justify-center'>
										<div className=''>
											<Routes>
												<Route path='/' element={<Invoice />} />
												<Route path='/arinvoices' element={<ARInvoice />} />
												<Route path='/ncinvoices' element={<NCInvoice />} />
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
