import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import MyTable from '../components/MyTable';
import ButtonInfo from '../components/ButtonInfo';

const ARInvoice = () => {
	const [invoiceNum, setInvoiceNum] = useState({
		invoice1: '',
		invoice2: '',
	});

	const [datas, setDatas] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInvoiceNum({ ...invoiceNum, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		//Ver por consola web en rango de facturas que se están recibiendo
		// console.log(invoiceNum)

		callGetBatchOfInvoices();
	};

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
			.then((data) => setDatas(data));
	};

	const callCreateInvoice = async (e) => {
		e.preventDefault();
		const create = true;

		await fetch(
			`http://localhost:3000/factura/batch/${invoiceNum.invoice1}/${invoiceNum.invoice2}/${create}`,
			{
				'content-type': 'application/json',
				method: 'GET',
				//mode: 'no-cors',
			}
		)
			.then((response) => response.json())
			.then((data) => setDatas(data));

		console.log('enviado el array de datas');
		toast.success('Facturas creadas con éxito');
	};

	return (
		<div>
			<h2 className="font-semibold text-3xl mt-14 mb-14">FACTURA FISCAL AR</h2>
			<div className="grid grid-cols-3">
				{/* Grid 1 */}
				<div className="bg-white mr-12 p-6 h-[280px] rounded-lg">
					<form onSubmit={handleSubmit} autoComplete="off">
						<div className="mb-6 ">
							<div className="w-full ">
								<p className="text-black mb-2">Número de factura</p>
								<div className="grid grid-flow-col justify-stretch w-96 gap-4">
									<input
										required
										autoFocus
										type="text"
										className="w-full  py-2 px-4 rounded-lg outline-none bg-[#b2bec3] text-white placeholder-white"
										placeholder="N Factura 1"
										onChange={handleChange}
										value={invoiceNum.invoice1}
										name="invoice1"
									/>
									<input
										required
										type="text"
										className="w-full py-2 px-4 rounded-lg outline-none bg-[#b2bec3] text-white placeholder-white"
										placeholder="N Factura 2"
										onChange={handleChange}
										value={invoiceNum.invoice2}
										name="invoice2"
									/>
								</div>
							</div>
						</div>
						{/* botones */}
						<div className="mt-4 mb-4">
							<ButtonInfo name="Consultar" />
						</div>
					</form>
					<hr />
					<div className="grid grid-flow-col justify-stretch mt-4 w-96 gap-4">
						<ButtonInfo name="Generar Facturas" onClick={callCreateInvoice} />
						<ButtonInfo name="Enviar Facturas" />
					</div>
				</div>

				{/* Grid 2 */}
				<div className="col-span-2">
					<MyTable datas={datas} />
				</div>
			</div>
			<hr />
			<Toaster position="bottom-right" reverseOrder={true} />
		</div>
	);
};

export { ARInvoice };
