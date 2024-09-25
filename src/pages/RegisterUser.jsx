import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Toaster, toast } from 'react-hot-toast'

const RegisterUser = () => {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [role, setRole] = useState()
	const [password, setPassword] = useState()

	const [errors, setErrors] = useState({})

	const navigate = useNavigate()

	const handleSelect = (e) => {
		setRole(e.target.value)
	}

	const createUser = async (e) => {
		e.preventDefault()

		const newUser = {
			username: username,
			email: email,
			role: role,
			password: password,
		}

		try {
			const response = await fetch('http://localhost:3000/users/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			})

			if (!response.ok) {
				// Manejar errores del servidor (404, 500, etc.)
				const errorData = await response.json() // Leer el JSON de la respuesta
				if (errorData.email) {
					setErrors({ email: errorData.email })
					console.log(errors)
					throw new Error(errorData.email)
				}

				if (errorData.username) {
					setErrors({ username: errorData.username })
					console.log(errors)
					throw new Error(errorData.username)
				}
			}

			setErrors({})

			toast.success('User created successfully!')

			const data = await response.json()

			setTimeout(() => {
				navigate('/users') // Redirecciona a la ruta deseada
			}, 2000)
			return data
		} catch (error) {
			console.log('Error fetching users: ', error)
			return []
		}
	}

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='bg-[#292D32] bg-opacity-10 lg:bg-opacity-100 w-[600px] p-10 rounded-lg '>
				<Toaster position='bottom-right' reverseOrder={true} />

				<h2 className='text-white text-2xl text-center'>Register New User</h2>
				<div className=' px-6 py-12 lg:px-8'>
					<div className=''>
						<form className='space-y-8' onSubmit={createUser}>
							<div>
								<label htmlFor='username' className='block text-lg font-medium   text-white '>
									Username
								</label>
								<div className='mt-2'>
									<input
										id='username'
										name='username'
										type='username'
										autoComplete='username'
										placeholder='username'
										minLength={4}
										required
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
									{errors.username && <p className='text-red-500'>username already exist</p>}
								</div>
							</div>

							<div>
								<label htmlFor='email' className='block text-lg font-medium   text-white '>
									Email
								</label>
								<div className='mt-2'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										placeholder='email'
										required
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									{errors.email && <p className='text-red-500'>email already exist</p>}
								</div>
							</div>

							<div>
								<label htmlFor='email' className='block text-lg font-medium   text-white '>
									Role
								</label>
								<div className='mt-2'>
									<select
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
										id='role'
										value={role}
										onChange={handleSelect}
									>
										<option value=''>--Select an option--</option>
										<option value='admin'>admin</option>
										<option value='user'>user</option>
									</select>
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between'>
									<label htmlFor='password' className='block text-lg font-medium  text-white'>
										Password
									</label>
									<div className='text-sm'></div>
								</div>
								<div className='mt-2'>
									<input
										id='password'
										name='password'
										type='password'
										autoComplete='current-password'
										placeholder='*********'
										minLength={6}
										required
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-md font-bold leading-9 text-black shadow-sm hover:bg-green-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-slate-500'
								>
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export { RegisterUser }
