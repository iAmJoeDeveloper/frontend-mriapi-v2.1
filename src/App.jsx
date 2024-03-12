import { useEffect } from 'react'
import { Invoice } from './pages/Invoice'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// navbar
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {
	useEffect(() => {
		fetch('http://localhost:3000/products/xmlTest', {
			mode: 'no-cors',
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
	}, [])

	return (
		<div className='dark'>
			<Navbar bg='dark' data-bs-theme='dark' className='bg-body-tertiary'>
				<Container>
					<Navbar.Brand href='#'>MRI API</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Nav>
							<Nav.Link href='#'>Factura</Nav.Link>
							<Nav.Link href='#'>Nota de crédito</Nav.Link>
							<Nav.Link href='#'>Products</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Invoice />
		</div>
	)
}

export default App
