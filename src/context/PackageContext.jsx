import { createContext, useState, useEffect } from 'react'

export const PackageContext = createContext()

const PackageProvider = ({ children }) => {
	const [packages, setPackages] = useState([])

	const removePackage = (packageId) => {
		setPackages((prevPackages) => prevPackages.filter((pkg) => pkg._id !== packageId))
	}

	useEffect(() => {
		// Fetch packages from the API
		fetch('http://localhost:3000/packages')
			.then((response) => response.json())
			.then((data) => setPackages(data.pack))
			// .then((data) => console.log(data.pack))
			.catch((error) => console.log('Error fetching packages: ', error))
	}, [])

	// Función para actualizar el estado de un paquete específico
	const updatePackageStatus = (id, updatedData) => {
		setPackages((prevPackages) =>
			prevPackages.map((pkg) => (pkg._id === id ? { ...pkg, ...updatedData } : pkg))
		)
	}

	return (
		<PackageContext.Provider value={{ packages, updatePackageStatus, removePackage }}>
			{children}
		</PackageContext.Provider>
	)
}

export { PackageProvider }
