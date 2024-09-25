import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Toaster, toast } from 'react-hot-toast'

const UserDetail = () => {
	const { id } = useParams()

	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [role, setRole] = useState()
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const updatedData = {}
		if (username) updatedData.username = username
		if (email) updatedData.email = email
		if (role) updatedData.role = role
		if (password) updatedData.password = password

		const updatedUserData = { username, email, role }

		try {
			console.log(updatedUserData)
			const response = await fetch(`http://localhost:3000/users/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedUserData),
			})

			if (response.ok) {
				console.log('User updated successfully!')
				toast.success('User updated successfully!')

				setTimeout(() => {
					navigate('/users') // Redirecciona a la ruta deseada
				}, 2000)
			} else {
				console.log('Error updating user')
				toast.error('Error updating user')
			}
		} catch (error) {
			console.error('Error al actualizar el usuario:', error)
		}
	}

	useEffect(() => {
		fetch(`http://localhost:3000/users/${id}`)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setUsername(data.username)
				setEmail(data.email)
				setRole(data.role)
			})
	}, [])

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='bg-[#292D32] bg-opacity-10 lg:bg-opacity-100 w-[600px] p-10 rounded-lg '>
				<Toaster position='bottom-right' reverseOrder={true} />
				<h2 className='text-white text-2xl text-center'>Update User</h2>
				<div className=' px-6 py-12 lg:px-8'>
					<div className=''>
						<form className='space-y-8' onSubmit={handleSubmit}>
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
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
									{/* {errors.email && <p className='text-red-500'>email is required</p>} */}
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
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									{/* {errors.email && <p className='text-red-500'>email is required</p>} */}
								</div>
							</div>

							<div>
								<label htmlFor='email' className='block text-lg font-medium   text-white '>
									Role
								</label>
								<div className='mt-2'>
									<select
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
										value={role}
										onChange={(e) => setRole(e.target.value)}
									>
										{role === 'admin' ? (
											<>
												<option value='admin'>admin</option>
												<option value='user'>user</option>
											</>
										) : (
											<>
												<option value='user'>user</option>
												<option value='admin'>admin</option>
											</>
										)}
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
										className='block w-full rounded-md pl-5 py-1.5 leading-9 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300'
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-md font-bold leading-9 text-black shadow-sm hover:bg-orange-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-slate-500'
								>
									Update User
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export { UserDetail }
