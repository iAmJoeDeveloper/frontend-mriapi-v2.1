import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PackageContext } from '../context/PackageContext'
import Button from '../components/Button'

const PackageDetail = () => {
	const { packages } = useContext(PackageContext)
	const { id } = useParams()
	const pkg = packages.find((pkg) => pkg._id === id)

	if (!pkg) {
		return <div>Package not found</div>
	}

	const checkStatus = async () => {
		console.log(pkg)
	}

	return (
		<div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 text-white'>
			<h1>{pkg._id}</h1>
			<p>Status: {pkg.status}</p>
			<h2>Invoices</h2>
			<Button name='Check Status' onClick={checkStatus} />
			<ul className='mt-8'>
				{pkg.invoices.map((invoice, index) => (
					<li
						key={index}
						className='flex flex-col mb-4 p-5 text-base  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
					>
						<p>NCF: {invoice.ncf}</p>
						<p>Ref: {invoice.ref}</p>
						<p>
							Status:{' '}
							<span
								className={
									invoice.status === 'completed'
										? 'text-green-400'
										: invoice.status === 'canceled'
										? 'text-red-400'
										: 'text-orange-400'
								}
							>
								{invoice.status}
							</span>
						</p>
						<p>Date: {invoice.date}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export { PackageDetail }
