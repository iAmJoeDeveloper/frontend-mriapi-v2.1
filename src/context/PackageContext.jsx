import { createContext, useState, useEffect } from 'react'

export const PackageContext = createContext()

const PackageProvider = ({ children }) => {
	const [packages, setPackages] = useState([])

	useEffect(() => {
		// Fetch packages from the API
		fetch('http://localhost:3000/packages')
			.then((response) => response.json())
			.then((data) => setPackages(data.pack))
			// .then((data) => console.log(data.pack))
			.catch((error) => console.log('Error fetching packages: ', error))
	}, [])

	return <PackageContext.Provider value={{ packages }}>{children}</PackageContext.Provider>
}

export { PackageProvider }
