// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function Invoice() {
	return (
		<Container>
			<h3 style={{ textAlign: 'left' }} className='my-5'>
				Invoice
			</h3>
			<hr />
			<Row>
				{/* Grid 1 */}
				<div className='w-25'>
					<Col style={{ textAlign: 'left' }}>
						<Form.Label htmlFor='inputPassword5'>N Factura</Form.Label>
						<Form.Control type='text' id='invoice' aria-describedby='passwordHelpBlock' />
						{/* botones */}
						<div className='mt-2'>
							<Button variant='primary'>Consultar</Button>
						</div>
					</Col>
				</div>

				{/* Grid 2 */}
				<div className='w-75 h-25'>
					<Col>
						<Table responsive>
							<thead>
								<tr>
									<th scope='col'>Ref</th>
									<th scope='col'>Date</th>
									<th scope='col'>Currency</th>
									<th scope='col'>TaxIncluded</th>
									<th scope='col'>NCF</th>
									<th scope='col'>NCFExpirationDate</th>
									<th scope='col'>ExchangeRate</th>
									<th scope='col'>TipoIngreso</th>
									<th scope='col'>TipoPago</th>
									<th scope='col'>LinesPerPrintedPage</th>
									<th scope='col'>SupplierID</th>
									<th scope='col'>CIF</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row'>Mercury</th>
									<td>4,880</td>
									<td>0.39</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
								</tr>
								<tr>
									<th scope='row'>Mercury</th>
									<td>4,880</td>
									<td>0.39</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
								</tr>
								<tr>
									<th scope='row'>Mercury</th>
									<td>4,880</td>
									<td>0.39</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
								</tr>
								<tr>
									<th scope='row'>Mercury</th>
									<td>4,880</td>
									<td>0.39</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
									<td>88</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</div>
			</Row>
			<hr />
			<Row>
				<Col>
					<Button variant='success'>Generar Facturas</Button>
					<Button variant='info'>Enviar Facturas</Button>
				</Col>
			</Row>
		</Container>
	)
}

export { Invoice }
