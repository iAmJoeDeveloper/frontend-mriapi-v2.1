import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Invoice } from './pages/Invoice';
import { ARInvoice } from './pages/ARInvoice';
import './App.css';

import MyNavbar from './components/MyNavBar';
import Sidebar from './components/Sidebar';
import { Login } from './components/Login';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/*"
					element={
						<div className="grid grid-cols-6">
							<Sidebar />
							<div className="col-span-5">
								<MyNavbar />
								<div className="ml-32">
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
