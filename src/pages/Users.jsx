import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Users = () => {
	const [users, setUsers] = useState([])

	const getUsers = async () => {
		try {
			const response = await fetch('http://localhost:3000/users/')
			const data = await response.json()
			return data
		} catch (error) {
			console.log('Error fetching users: ', error)
			return []
		}
	}

	const deleteUser = (userId) => {
		Swal.fire({
			title: '¿Seguro que desea eliminar este usuario',
			text: 'No podrás revertir esta acción',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'No, cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/users/${userId}`, {
					method: 'DELETE',
				})
					.then(async (response) => {
						if (!response.ok) {
							throw new Error('Error trying to delete record')
						}

						const data = await response.json()
						Swal.fire('Deleted', data.message, 'success')

						const updatedUsers = await getUsers()
						setUsers(updatedUsers)
					})
					.catch((error) => {
						Swal.fire('Error', 'Hubo un problema al eliminar el registro', error)
					})
			}
		})
	}

	useEffect(() => {
		const fetchUsers = async () => {
			const data = await getUsers()
			setUsers(data)
		}

		fetchUsers()
	}, [])

	return (
		<div className='flex flex-col items-center justify-center h-screen 2xl:w-[95%] xl:w-[95%]  md:w-[100%] 2xl:pt-0 md:pt-24'>
			<div className='w-full flex justify-end mb-4'>
				<button className='bg-blue-500 hover:bg-blue-700  text-white p-2 rounded-md'>
					<Link to='/users/register'>Create New User</Link>
				</button>
			</div>
			<div className='overflow-x-auto overflow-y-auto rounded-xl 2xl:max-h-full xl:max-h-96'>
				<table className='2xl:w-[1200px] xl:w-[800px]  bg-white'>
					<thead>
						<tr>
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 sticky top-0 z-10'>
								Username
							</th>
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
								Email
							</th>
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
								Role
							</th>
							<th className='py-2 px-4 bg-[#292D32] text-white border-b-2 border-gray-300 text-left sticky top-0 z-10'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => {
							return (
								<tr key={user._id}>
									<td className='py-2 px-4 border-b border-gray-300 '>{user.username}</td>

									<td className='py-2 px-4 border-b border-gray-300'>{user.email}</td>

									<td className='py-2 px-4 border-b border-gray-300'>{user.role}</td>

									<td className='py-2 px-4 border-b border-gray-300 '>
										<Link to={`/users/${user._id}`}>
											<button className='bg-gray-500 mr-2 hover:bg-gray-400 text-white px-4 py-2 rounded'>
												<svg viewBox='0 0 1024 1024' fill='currentColor' height='1em' width='1em'>
													<path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z' />
												</svg>
											</button>
										</Link>

										<button
											onClick={() => deleteUser(user._id)}
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
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export { Users }
