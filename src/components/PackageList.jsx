import { useContext } from 'react'
import { json, Link } from 'react-router-dom'
import { PackageContext } from '../context/PackageContext'

const PackageList = () => {
	const { packages } = useContext(PackageContext)

	return (
		<div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 text-white'>
			<h1 className='mb-10 text-base font-semibold text-gray-900 md:text-xl dark:text-white'>
				PACKAGE LIST
			</h1>
			<ul className='my-4 space-y-3'>
				{packages.map((item) => (
					<li key={item._id} className='mb-5'>
						<Link
							to={`/packages/${item._id}`}
							className='flex flex-col p-5 text-base  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
						>
							{' '}
							<h5 className='text-base font-semibold text-gray-900 md:text-xl dark:text-white'>
								{item.name}
							</h5>
							<p>{item.tag}</p>
							<p
								className={
									item.status === 'completed'
										? 'text-green-400'
										: item.status === 'canceled'
										? 'text-red-400'
										: 'text-orange-400'
								}
							>
								{item.status}
							</p>
							<p>{item.createdAt}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export { PackageList }
