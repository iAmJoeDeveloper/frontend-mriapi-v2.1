import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PackageContext } from '../context/PackageContext'

const PackageDetail = () => {
	const { packages } = useContext(PackageContext)
	const { id } = useParams()
	const pkg = packages.find((pkg) => pkg._id === id)

	if (!pkg) {
		return <div className='font-bold text-2xl'>Package not found</div>
	}

	const checkStatus = async () => {
		console.log(pkg)
	}

	return (
		<div className='flex flex-col gap-6 '>
			<div className='flex flex-col dark:bg-[#292D32] dark:border-[#292D32] text-white w-3/6 p-6 rounded-lg gap-3 '>
				<h1 className='text-xl font-smibold'>
					Package ID: <span className='font-normal'>{pkg._id}</span>
				</h1>
				<p className='text-lg font-semibold'>
					Status: <span className='font-normal'>{pkg.status}</span>
				</p>
				<div className='flex flex-col items-center justify-center'>
					<button
						onClick={checkStatus}
						className=' w-3/5 py-2 px-4 text-lg  overflow-hidden  bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md text-black  hover:bg-gray-200'
					>
						Check Status
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
													: invoice.status === 'canceled'
													? 'bg-red-200 rounded-full  w-28  text-black   bg-center py-1  text-center'
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
