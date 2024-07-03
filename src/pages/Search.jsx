import { useState } from 'react'
import ButtonInfo from '../components/ButtonInfo'

const Search = () => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [consult, setConsult] = useState('')

	const handleChange = (e) => {
		setConsult(e.target.value)
		console.log(consult)
	}

	const testAPI = async (e) => {
		e.preventDefault()

		try {
			//Await Fetch
			const request = await fetch(`https://pokeapi.co/api/v2/characteristic/${consult}`)
			const response = await request.json()
			setData(response)
		} catch (error) {
			// Handle your error
			setError(error)
			console.log(error)
		}
	}

	const onSubmit = async (e) => {
		e.preventDefault()

		setError(null)
		setData(null)

		try {
			const response = await fetch('http://localhost:3000/consultInbox')
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
		<div className='container w-dvw'>
			<h2 className='font-semibold text-3xl my-10 text-center xl:text-start'>CONSULTA</h2>

			<div className='bg-white h-auto  p-6 rounded-lg xl:mr-20'>
				<form onSubmit={onSubmit} autoComplete='off'>
					<div className='mb-4'>
						<div className='w-full'>
							<p className='text-black mb-2'>Número de factura</p>
							<div className='grid grid-cols-1 xl:grid-cols-4 gap-4'>
								<input
									autoFocus
									type='text'
									className='w-full py-2 px-4 rounded-lg outline-none bg-[#b2bec3] text-white placeholder-white'
									placeholder='N Factura 1'
									name='invoice1'
									onChange={handleChange}
									value={consult}
								/>
								{/* Botones */}
								<div className=''>
									<ButtonInfo name='Consultar' />
								</div>
							</div>
						</div>
					</div>
				</form>
				<hr />
			</div>
			{/*  */}
			<div className='rounded-lg whitespace-pre-wrap bg-gray-800 text-white p-2 mt-10 mb-20 w-vw mr-20'>
				{error && <div>Error: {error.message}</div>}
				{/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
				{data && <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{data}</pre>}
			</div>
		</div>
	)
}

export { Search }
