import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const { signIn, isAuthenticated } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) navigate('/')
	}, [isAuthenticated])

	const onSubmit = handleSubmit((data) => {
		signIn(data)
	})

	return (
		<div className="grid grid-cols-1  lg:grid-cols-2  h-screen bg-[url('src/assets/Azul2_11zon.webp')] bg-cover lg:bg-white">
			<div className="hidden lg:block  relative w-full bg-[url('src/assets/descarga_11zon.webp')] bg-no-repeat bg-cover  ">
				<div className=' sm:absolute inset-0 bg-black opacity-50'></div>
				<div className='flex justify-center items-center h-full'>
					<h1 className=' sm:absolute text-white font-bold text-9xl text-center'>MRIAPI!</h1>
				</div>
			</div>
			<div className='bg-white bg-opacity-10 lg:bg-opacity-100  w-full flex justify-center items-center flex-col'>
				<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
					<div className='w-full'>
						<img className='mx-auto h-20 w-auto' src='src\assets\contrato.png' alt='Your Company' />
						<h2 className='mt-10 text-center text-3xl font-bold  text-[#414141] font-sans'>
							Please login to your account
						</h2>
					</div>

					<div className='mt-10'>
						<form className='space-y-8' onSubmit={onSubmit}>
							<div>
								<label htmlFor='email' className='block text-lg font-medium   text-[#414141] '>
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
										{...register('email', { required: true })}
									/>
									{errors.email && <p className='text-red-500'>email is required</p>}
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between'>
									<label htmlFor='password' className='block text-lg font-medium  text-[#414141]'>
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
										{...register('password', { required: true })}
									/>
									{errors.password && <p className='text-red-500'>password is required</p>}
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-[#414141] px-3 py-1.5 text-xl font-bold leading-9 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-slate-500'
								>
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Login }
