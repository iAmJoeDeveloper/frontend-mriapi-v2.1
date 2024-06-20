import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MyNavBar = ({ toggleSidebar }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleSidebar = () => {
		setIsOpen(!isOpen);
		toggleSidebar();
	};
	return (
		<div className="w-full xl:w-full lg:w-screen min-h-20 h-20 bg-white text-black p-4 flex items-center justify-between xl:justify-center">
			<h1 className="uppercase font-semibold cursor-pointer text-xl lg:ml-48 ml-4 hidden xl:block">
				MRI BAVEL
			</h1>
			<nav className="flex items-center ml-auto">
				<button className="xl:hidden mr-4" onClick={handleToggleSidebar}>
					{isOpen ? (
						<FaTimes className="w-6 h-6" />
					) : (
						<FaBars className="w-6 h-6" />
					)}
				</button>
				{/* <!-- Logo --> */}
				<div className="logo flex items-center self-center gap-2 mr-5">
					<img
						src="https://cdn-icons-png.freepik.com/512/7718/7718888.png"
						className="w-10 h-10 bg-gray-500  rounded-3xl hidden xl:block"
					/>
					<div>
						<h3 className="font-bold text-black mb-[-5px] hidden xl:block">
							BlueMall User
						</h3>
						<span className="text-sm hidden xl:block">Admin</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default MyNavBar;
