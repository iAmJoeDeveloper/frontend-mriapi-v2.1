import { useState } from 'react';

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="grid grid-cols-1  lg:grid-cols-2  h-screen bg-[url('src/assets/Azul2_11zon.webp')] bg-cover lg:bg-white">
			<div className="hidden lg:block  relative w-full bg-[url('src/assets/descarga_11zon.webp')] bg-no-repeat bg-cover  ">
				<div className=" sm:absolute inset-0 bg-black opacity-50"></div>
				<div className="flex justify-center items-center h-full">
					<h1 className=" sm:absolute text-white font-bold text-9xl text-center">
						MRIAPI!
					</h1>
				</div>
			</div>
			<div className="bg-white bg-opacity-10 lg:bg-opacity-100  w-full flex justify-center items-center flex-col">
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="w-full">
						<img
							className="mx-auto h-20 w-auto"
							src="src\assets\contrato.png"
							alt="Your Company"
						/>
						<h2 className="mt-10 text-center text-3xl font-bold  text-[#414141] font-sans">
							Please login to your account
						</h2>
					</div>

					<div className="mt-10">
						<form className="space-y-8" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block text-lg font-medium   text-[#414141] "
								>
									User Name
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										placeholder="username@gmail.com"
										value={loginData.email}
										onChange={handleChange}
										className="block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-lg font-medium  text-[#414141]"
									>
										Password
									</label>
									<div className="text-sm"></div>
								</div>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										placeholder="*********"
										value={loginData.password}
										onChange={handleChange}
										className="block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-[#414141] px-3 py-1.5 text-xl font-bold leading-9 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-slate-500"
								>
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Login };
