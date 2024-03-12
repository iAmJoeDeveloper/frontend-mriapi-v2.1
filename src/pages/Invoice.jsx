// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { datas } from '../datebase';

function Invoice() {
	return (
		<Container>
			<h3 style={{ textAlign: 'left' }} className="my-5">
				Invoice
			</h3>
			<hr />
			<Row>
				{/* Grid 1 */}
				<div className="w-25">
					<Col style={{ textAlign: 'left' }}>
						<Form.Control
							type="text"
							id="invoice"
							aria-describedby="passwordHelpBlock"
							placeholder="Escribe aquí el N° de la factura"
						/>
						{/* botones */}
						<div className="table-buttons">
							<Button variant="primary">Consultar</Button>
						</div>
					</Col>
				</div>

				{/* Grid 2 */}
				<div className="w-75 h-25">
					<Col>
						<div className="table-container">
							<Table bordered hover>
								<thead>
									<tr className="sticky-top">
										<th scope="col">Ref</th>
										<th scope="col">Date</th>
										<th scope="col">Currency</th>
										<th scope="col">TaxIncluded</th>
										<th scope="col">NCF</th>
										<th scope="col">NCFExpirationDate</th>
										<th scope="col">ExchangeRate</th>
										<th scope="col">TipoIngreso</th>
										<th scope="col">TipoPago</th>
										<th scope="col">LinesPerPrintedPage</th>
										<th scope="col">SupplierID</th>
										<th scope="col">CIF</th>
									</tr>
								</thead>
								<tbody>
									{datas.map((data, index) => (
										<tr key={index}>
											<th scope="row">{data.ref}</th>
											<td>{data.date}</td>
											<td>{data.curren}</td>
											<td>{data.TaxI}</td>
											<td>{data.ncf}</td>
											<td>{data.expir}</td>
											<td>{data.rate}</td>
											<td>{data.ingres}</td>
											<td>{data.pay}</td>
											<td>{data.lines}</td>
											<td>{data.supplier}</td>
											<td>{data.cif}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
					</Col>
				</div>
			</Row>
			<hr />
			<Row>
				<Col className="table-buttons">
					<Button variant="success">Generar Facturas</Button>
					<Button variant="info">Enviar Facturas</Button>
				</Col>
			</Row>
		</Container>
	);
}

export { Invoice };
