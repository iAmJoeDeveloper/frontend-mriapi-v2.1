import { useState } from 'react'
// import ButtonInfo from '../components/ButtonInfo';
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [inputValue, setInputValue] = useState('')

	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	// const testAPI = async (e) => {
	// 	e.preventDefault()

	// 	try {
	// 		//Await Fetch
	// 		const request = await fetch(`https://pokeapi.co/api/v2/characteristic/${consult}`)
	// 		const response = await request.json()
	// 		setData(response)
	// 	} catch (error) {
	// 		// Handle your error
	// 		setError(error)
	// 		console.log(error)
	// 	}
	// }

	const onSubmit = async (e) => {
		e.preventDefault()

		setError(null)
		setData(null)

		const url = inputValue
			? `http://localhost:3000/consultInbox/${inputValue}`
			: 'http://localhost:3000/consultInbox'

		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Network response was not ok: ${response.statusText}`)
			}

			const result = await response.text()
			console.log(result)
			setData(result)
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen 2xl:w-[95%] xl:w-[95%]  md:w-[100%] 2xl:pt-0 md:pt-24'>
			<div className='bg-[#292D32] h-52 2xl:w-2/4 md:w-5/6 p-6 rounded-xl  shadow-2xl shadow-[#4D4D4D] '>
				<form onSubmit={onSubmit} autoComplete='off'>
					<div className='mb-6'>
						<div className=''>
							<p className='text-white font-bold text-2xl mb-6'>NÚMERO DE FACTURA</p>
							<div className='grid grid-cols-1 xl:grid-cols-12 gap-4'>
								<input
									autoFocus
									type='text'
									className='col-span-4 py-2 px-4 rounded-lg outline-none bg-[#b2bec3] text-white placeholder-white'
									placeholder='Ingrese consulta...'
									name='invoice1'
									onChange={handleChange}
									value={inputValue}
								/>
								{/* Botones */}
								<div className=''>
									<button className='relative flex items-center gap-4 py-2 px-5 text-md overflow-hidden  bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md text-black hover:bg-gray-300 '>
										<FaSearch />
										CONSULTAR
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
				<hr className='hidden md:hidden xl:flex 2xl:flex' />
			</div>
			{/*  */}
			<div className='rounded-lg whitespace-pre-wrap bg-gray-800 text-white p-4 mt-10 mb-20 h-96 xl:h-[400px] md:h-96 w-full md:w-[650px]  xl:w-full shadow-2xl shadow-[#4D4D4D] overflow-y-auto overflow-x-hidden'>
				{error && <div>Error: {error.message}</div>}
				{/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
				{data && <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{data}</pre>}
			</div>
		</div>
	)
}

export { Search }
