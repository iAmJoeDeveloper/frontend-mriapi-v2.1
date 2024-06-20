import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Invoice } from './pages/Invoice';
import { ARInvoice } from './pages/ARInvoice';
import './App.css';

import MyNavbar from './components/MyNavBar';
import Sidebar from './components/Sidebar';
import { Login } from './components/Login';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/*"
					element={
						<div className="xl:flex ">
							<div
								className={`${
									sidebarOpen ? 'block' : 'hidden'
								} xl:block xl:w-1/6`}
							>
								<Sidebar isOpen={sidebarOpen} />
							</div>
							<div className=" xl:flex flex-wrap items-center justify-center">
								<MyNavbar toggleSidebar={toggleSidebar} />
								<div className="xl:ml-32">
									<div className="mt-16">
										<Routes>
											<Route path="/" element={<Invoice />} />
											<Route path="/arinvoices" element={<ARInvoice />} />
										</Routes>
									</div>
								</div>
							</div>
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
