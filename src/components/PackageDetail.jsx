import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PackageContext } from '../context/PackageContext'

const PackageDetail = () => {
	const { packages, updatePackageStatus } = useContext(PackageContext)
	const { id } = useParams()
	// const pkg = packages.find((pkg) => pkg._id === id)
	const [pkg, setPkg] = useState(packages.find((pkg) => pkg._id === id))

	const [intervalId, setIntervalId] = useState(null)
	const [isRunning, setIsRunning] = useState(false)

	// const [documentId, setDocumentId] = useState('')

	useEffect(() => {
		setPkg(packages.find((pkg) => pkg._id === id))
	}, [packages, id])

	// Limpia el intervalo cuando el componente se desmonta
	useEffect(() => {
		return () => {
			if (intervalId) {
				clearInterval(intervalId)
			}
		}
	}, [intervalId])

	const startInterval = () => {
		// Ejecutar checkDocumentStatus inmediatamente
		checkDocumentStatus(pkg._id)
		if (!isRunning) {
			const id = setInterval(() => {
				checkDocumentStatus(pkg._id)
			}, 1 * 60 * 1000) // 5 minutos en milisegundos
			setIntervalId(id)
			setIsRunning(true)
		}
	}

	const stopInterval = () => {
		console.log('Interval Stopped')
		if (isRunning && intervalId) {
			clearInterval(intervalId)
			setIntervalId(null)
			setIsRunning(false)
		}
	}

	if (!pkg) {
		return <div className='font-bold text-2xl'>Package not found</div>
	}

	//Activate Generate QR Codes by Status
	let packageCompleted = pkg.status

	const checkDocumentStatus = async (id) => {
		// console.log(pkg._id)
		//'http://localhost:5173//package/checking/:id'

		try {
			const response = await fetch(`http://localhost:3000/package/checking/${id}`, {
				'content-type': 'application/json',
				method: 'GET',
				//mode: 'no-cors',
			})
			// .then((response) => console.log(response))
			const updatedPackage = await response.json()
			updatePackageStatus(id, updatedPackage) // Actualiza el estado en el contexto
			console.log('Mensaje: ', updatedPackage)

			// const updatedPackage = await response.json()
			// Actualiza el paquete en el estado local
			// setPkg(updatedPackage)
		} catch (error) {
			console.error('Error comprobando el estado del documento:', error)
		}
	}

	const generateQRCodes = async () => {
		try {
			const response = await fetch(`http://localhost:3000/qrcodes/generate/${id}`, {
				'content-type': 'application/json',
				method: 'GET',
				//mode: 'no-cors',
			}).then((response) => console.log(response))
		} catch (error) {
			console.error('Error gerando códigos:', error)
		}
	}

	return (
		<div className='flex flex-col gap-6 '>
			<div className='flex flex-col dark:bg-[#292D32] dark:border-[#292D32] text-white w-3/6 p-6 rounded-lg gap-3 '>
				<h1 className='text-xl font-smibold'>
					Package ID: <span className='font-normal'>{pkg._id}</span>
					{isRunning ? <span className='ml-2'>🟢</span> : <span className='ml-2'>🔴</span>}
				</h1>
				<p className='text-lg font-semibold'>
					Entity: <span className='font-normal'>{pkg.entity}</span>
				</p>
				<p className='text-lg font-semibold'>
					Status: <span className='font-normal'>{pkg.status}</span>
				</p>
				<div className='flex flex-row  space-x-4'>
					<button
						onClick={startInterval}
						disabled={isRunning}
						className={`w-3/5 py-2 px-4 text-lg  overflow-hidden  rounded-lg transition-all duration-400 ease-in-out shadow-md text-black ${
							isRunning
								? 'bg-gray-400 text-gray-700 cursor-not-allowed'
								: 'bg-white text-gray hover:bg-gray-200'
						}`}
					>
						Check Status
					</button>

					<button
						onClick={stopInterval}
						disabled={!isRunning}
						className={`w-3/5 py-2 px-4 text-lg  overflow-hidden  rounded-lg transition-all duration-400 ease-in-out shadow-md text-black ${
							!isRunning
								? 'bg-gray-400 text-gray-700 cursor-not-allowed'
								: 'bg-blue-500 text-white hover:bg-blue-600'
						}`}
					>
						Stop Check
					</button>
				</div>
				<div>
					<button
						onClick={generateQRCodes}
						disabled={packageCompleted === 'pending'}
						className={`w-full py-2 px-4 text-lg  overflow-hidden  rounded-lg transition-all duration-400 ease-in-out shadow-md text-black ${
							packageCompleted === 'pending'
								? 'bg-gray-400 text-gray-700 cursor-not-allowed'
								: 'bg-blue-500 text-white hover:bg-blue-600'
						}`}
					>
						Generate QR Codes 🗳
					</button>
				</div>
			</div>
			<h2 className='text-lg font-bold'>INVOICES</h2>
			<div className='overflow-x-auto rounded-xl h-96 '>
				<div className='overflow-y-auto h-full'>
					<table className='w-[1200px] bg-white '>
						<thead>
							<tr className='sticky top-0 z-10'>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
									ID
								</th>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
									Name
								</th>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
									Fecha
								</th>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
									Estado
								</th>
							</tr>
						</thead>
						<tbody>
							{pkg.invoices.map((invoice, index) => (
								<tr key={index}>
									<td className='py-2 px-4 border-b border-gray-300'>{invoice.ncf}</td>
									<td className='py-2 px-4 border-b border-gray-300'>{invoice.ref}</td>
									<td className='py-2 px-4 border-b border-gray-300'>{invoice.date}</td>
									<td className='py-2 px-4 border-b border-gray-300'>
										<p
											className={
												invoice.status === 'completed'
													? 'bg-green-200 rounded-full  w-28  text-black   bg-center py-1  text-center'
													: invoice.status === 'rejected'
													? 'bg-red-600 rounded-full  w-28  text-white   bg-center py-1  text-center'
													: 'bg-orange-400 rounded-full  w-28  text-black   bg-center py-1  text-center'
											}
										>
											{invoice.status}
										</p>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export { PackageDetail }
