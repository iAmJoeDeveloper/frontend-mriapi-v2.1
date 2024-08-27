import { useContext, useState } from 'react'
import { json, Link } from 'react-router-dom'
import { PackageContext } from '../context/PackageContext'
import ReactPaginate from 'react-paginate'

const PackageList = () => {
	const { packages } = useContext(PackageContext)
	const itemsPerPage = 10 // Definir cuántos elementos quieres mostrar por página

	const [currentPage, setCurrentPage] = useState(0)

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected)
	}

	const offset = currentPage * itemsPerPage
	const currentPackages = packages.slice(offset, offset + itemsPerPage)

	return (
		<div className=' pb-4 shadow-2xl shadow-[#9b9b9b]	rounded-xl '>
			<div className='overflow-x-auto rounded-xl '>
				<table className='w-[1200px] h-96 bg-white '>
					<thead>
						<tr>
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
								ID
							</th>
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
								Entity
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
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left'>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{currentPackages
							.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
							.map((item) => (
								<tr key={item.id}>
									<td className='py-2 px-4 border-b border-gray-300'>{item.id}</td>
									<td className='py-2 px-4 border-b border-gray-300'>{item.entity}</td>
									<td className='py-2 px-4 border-b border-gray-300'>{item.name}</td>
									<td className='py-2 px-4 border-b border-gray-300'>{item.createdAt}</td>
									<td className='py-2 px-4 border-b border-gray-300'>
										<p
											className={
												item.status === 'completed'
													? 'bg-green-200 rounded-full  w-28  text-black   bg-center py-1  text-center'
													: item.status === 'canceled'
													? 'bg-red-200 rounded-full  w-28  text-black   bg-center py-1  text-center'
													: 'bg-orange-400 rounded-full  w-28  text-black   bg-center py-1  text-center'
											}
										>
											{item.status}
										</p>
									</td>

									<td className='py-2 px-4 border-b border-gray-300 '>
										<Link to={`/packages/${item._id}`}>
											<button className='bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded'>
												<svg viewBox='0 0 1024 1024' fill='currentColor' height='1em' width='1em'>
													<path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z' />
												</svg>
											</button>
										</Link>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				pageCount={Math.ceil(packages.length / itemsPerPage)}
				onPageChange={handlePageClick}
				containerClassName={'flex justify-center mt-4'}
				pageClassName={'mx-1'}
				pageLinkClassName={'px-3 py-1 border rounded'}
				previousLinkClassName={'px-3 py-1 border rounded'}
				nextLinkClassName={'px-3 py-1 border rounded'}
				activeLinkClassName={'bg-blue-500 text-white'}
			/>
		</div>
	)
}

export { PackageList }
