// import { useEffect, useState } from 'react'

function MyTable({ datas }) {
	// const [datas, setDatas] = useState([])

	// useEffect(() => {
	// 	fetch('http://localhost:3000/batch', {
	// 		'content-type': 'application/json',
	// 		method: 'GET',
	// 		//mode: 'no-cors',
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => setDatas(data))
	// }, [])

	let countInvoices = 0;
	return (
		<div className="xl:pl-1 pl-auto">
			<div className="max-w-3xl overflow-auto h-[600px] shadow-xl shadow-zinc-600 rounded-xl scrollbar-thin scrollbar-webkit">
				<table className="min-w-full text-center text-sm font-light border-collapse border-2 bg-white pl-2">
					<thead className="border-b bg-[#3F3F40] text-white font-medium sticky top-0">
						<tr className="divide-x divide-gray-200">
							<th className="px-2 xl:px-6 py-4">Num</th>
							<th className="px-2 xl:px-6 py-4">Ref</th>
							<th className="px-2 xl:px-10 py-4">Company</th>
							<th className="px-2 xl:px-10 py-4">Company 2</th>
							<th className="px-2 xl:px-6 py-4">Tipo de Ingreso</th>
							<th className="px-2 xl:px-20 py-4">-</th>
						</tr>
					</thead>
					<tbody>
						{datas.map((data, index) => (
							<tr key={index} className="border-b divide-x divide-gray-200">
								<td className="whitespace-nowrap px-2 xl:px-6 py-4 font-medium">
									{index + 1}
								</td>
								<td className="whitespace-nowrap px-2 xl:px-6 py-4 font-medium">
									{data.ref}
								</td>
								<td className="whitespace-nowrap px-2 xl:px-6 py-4">
									{data.company}
								</td>
								<td className="whitespace-nowrap px-2 xl:px-6 py-4 font-medium">
									{data.company2}
								</td>
								<td className="whitespace-nowrap px-2 xl:px-6 py-4">
									{data.tipoingreso}
								</td>
								<td className="whitespace-nowrap px-2 xl:px-6 py-4"></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default MyTable;
