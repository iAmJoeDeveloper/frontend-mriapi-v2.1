import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import MyTable from '../components/MyTable'
import ButtonInfo from '../components/ButtonInfo'

const ARInvoice = () => {
	const [invoiceNum, setInvoiceNum] = useState({
		invoice1: '',
		invoice2: '',
	})

	const [datas, setDatas] = useState([])

	const handleChange = (e) => {
		const { name, value } = e.target
		setInvoiceNum({ ...invoiceNum, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		//Ver por consola web en rango de facturas que se están recibiendo
		// console.log(invoiceNum)

		callGetBatchOfInvoices()
	}

	const callGetBatchOfInvoices = async () => {
		await fetch(
			`http://localhost:3000/factura/batch/${invoiceNum.invoice1}/${invoiceNum.invoice2}`,
			{
				'content-type': 'application/json',
				method: 'GET',
				//mode: 'no-cors',
			}
		)
			.then((response) => response.json())
			.then((data) => setDatas(data))
	}

	const callCreateInvoice = async (e) => {
		e.preventDefault()
		const create = true

		await fetch(
			`http://localhost:3000/factura/batch/${invoiceNum.invoice1}/${invoiceNum.invoice2}/${create}`,
			{
				'content-type': 'application/json',
				method: 'GET',
				//mode: 'no-cors',
			}
		)
			.then((response) => response.json())
			.then((data) => setDatas(data))

		console.log('enviado el array de datas')
		toast.success('Facturas creadas con éxito')
	}

	return (
		<div className='container mx-auto px-4'>
			<h2 className='font-semibold text-3xl my-10 text-center xl:text-start'>FACTURA FISCAL AR</h2>
			<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3  gap-4 grid-cols-1-at-1280'>
				{/* Grid 1 */}
				<div className='bg-white h-auto xl:h-72 p-6 w-full rounded-lg xl:mr-12'>
					<form onSubmit={handleSubmit} autoComplete='off'>
						<div className='mb-6'>
							<div className='w-full'>
								<p className='text-black mb-2'>Número de factura</p>
								<div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
									<input
										required
										autoFocus
										type='text'
										className='w-full py-2 px-4 rounded-lg outline-none bg-[#b2bec3] text-white placeholder-white'
										placeholder='N Factura 1'
										onChange={handleChange}
										value={invoiceNum.invoice1}
										name='invoice1'
									/>
									<input
										required
										type='text'
										className='w-full py-2 px-4 rounded-lg outline-none bg-[#b2bec3] text-white placeholder-white'
										placeholder='N Factura 2'
										onChange={handleChange}
										value={invoiceNum.invoice2}
										name='invoice2'
									/>
								</div>
							</div>
						</div>
						{/* Botones */}
						<div className='mt-4 mb-4 flex justify-center xl:justify-start space-x-4'>
							<ButtonInfo name='Consultar' />
						</div>
					</form>
					<hr />
					<div className='mt-4 flex  w-full flex-col xl:flex-row lg:space-x-4 space-y-4 xl:space-y-0'>
						<ButtonInfo name='Generar Facturas' onClick={callCreateInvoice} />
						<ButtonInfo name='Enviar Facturas' />
					</div>
				</div>

				{/* Grid 2 */}
				<div className='col-span-1 xl:col-span-2 '>
					<div className='overflow-auto'>
						<div className='min-w-[600px] mb-4'>
							<MyTable datas={datas} />
						</div>
					</div>
					<p className='my-4 text-center lg:text-right xl:w-3/4'>
						Total de facturas: <b>{datas.length}</b>
					</p>
				</div>
			</div>
			<hr />
			<Toaster position='bottom-right' reverseOrder={true} />
		</div>
	)
}

export { ARInvoice }
