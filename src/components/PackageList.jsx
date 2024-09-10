import { useContext, useState } from 'react'
import { json, Link } from 'react-router-dom'
import { PackageContext } from '../context/PackageContext'
import ReactPaginate from 'react-paginate'
import Swal from 'sweetalert2'

const PackageList = () => {
	const { packages, removePackage } = useContext(PackageContext)
	const itemsPerPage = 10 // Definir cuántos elementos quieres mostrar por página

	const [currentPage, setCurrentPage] = useState(0)

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected)
	}

	const deletePackage = (packageId) => {
		Swal.fire({
			title: '¿Seguro que desea eliminar el registro?',
			text: 'No podrás revertir esta acción',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'No, cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/package/delete/${packageId}`, {
					method: 'DELETE',
				})
					.then(async (response) => {
						if (!response.ok) {
							throw new Error('Error trying to delete record')
						}

						const data = await response.json()
						Swal.fire('Deleted', data.message, 'success')
						removePackage(packageId) // ideal actualizar el estado aquí
					})
					.catch((error) => {
						Swal.fire('Error', 'Hubo un problema al eliminar el registro', error)
					})
			}
		})
	}

	const sortedPackages = packages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	const offset = currentPage * itemsPerPage
	const currentPackages = sortedPackages.slice(offset, offset + itemsPerPage)

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div className='pb-4 shadow-2xl shadow-[#9b9b9b] rounded-xl'>
				<div className='overflow-x-auto overflow-y-auto rounded-xl 2xl:max-h-full xl:max-h-96'>
					<table className='2xl:w-[1200px] xl:w-[800px]  bg-white'>
						<thead>
							<tr>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-center sticky top-0 z-10'>
									Module
								</th>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
									ID
								</th>

								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
									Entity
								</th>

								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
									Date
								</th>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
									Estatus
								</th>
								<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{currentPackages.map((item) => (
								<tr key={item._id}>
									<td className={'py-2 px-4 border-b border-gray-300 text-center'}>
										<span
											className={
												item.tag === 'CM'
													? 'bg-gray-400 py-2 px-4 border-b rounded-sm border-gray-300 text-center bg-center   w-28 '
													: item.tag === 'AR'
													? 'bg-gray-200 py-2 px-4 border-b rounded-sm border-gray-300 text-center'
													: 'bg-[#292D32] text-white py-2 px-4 border-b rounded-sm border-gray-300 text-center'
											}
										>
											{item.tag}
										</span>
									</td>
									<td className='py-2 px-4 border-b border-gray-300 '>{item.name}</td>

									<td className='py-2 px-4 border-b border-gray-300'>{item.entity}</td>

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
											<button className='bg-gray-500 mr-2 hover:bg-gray-400 text-white px-4 py-2 rounded'>
												<svg viewBox='0 0 1024 1024' fill='currentColor' height='1em' width='1em'>
													<path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z' />
												</svg>
											</button>
										</Link>

										<button
											onClick={() => deletePackage(item._id)}
											className='bg-gray-500 hover:bg-red-500 text-white px-4 py-2 rounded'
										>
											<svg fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em'>
												<path d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z' />
												<path
													fillRule='evenodd'
													d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
												/>
											</svg>
										</button>
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
					pageLinkClassName={'px-2 py-1 border rounded'}
					previousLinkClassName={'px-2 py-1 border rounded'}
					nextLinkClassName={'px-2 py-1 border rounded'}
					activeLinkClassName={'bg-blue-500 text-white'}
				/>
			</div>
		</div>
	)
}

export { PackageList }
