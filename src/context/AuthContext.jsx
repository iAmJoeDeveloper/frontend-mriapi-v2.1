import { createContext, useContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest, logoutRequest, verifyTokenRequest } from '..//api/auth.js'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return context
}

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [errors, setErrors] = useState([])
	const [loading, setLoading] = useState(true)

	const signUp = async (user) => {
		try {
			const res = await registerRequest(user)
			// console.log(res.data)
			setUser(res.data)
			setIsAuthenticated(true)
		} catch (error) {
			setErrors(error.response.data)
		}
	}

	const signIn = async (user) => {
		try {
			const res = await loginRequest(user)
			// console.log(res.data)
			setUser(res.data)
			setIsAuthenticated(true)
		} catch (error) {
			setErrors(error.response.data)
		}
	}

	const logout = async (user) => {
		try {
			const res = await logoutRequest(user)
			// console.log(res.data)
			setUser(res.data)
			setIsAuthenticated(false)
		} catch (error) {
			setErrors(error.response.data)
		}
	}

	useEffect(() => {
		if (errors.length > 0) {
			const timer = setTimeout(() => {
				setErrors([])
			}, 5000)
			return () => clearTimeout(timer)
		}
	}, [errors])

	useEffect(() => {
		async function checkLogin() {
			const cookies = Cookies.get()

			if (!cookies.token) {
				setIsAuthenticated(false)
				setLoading(false)
				return setUser(null)
			}

			try {
				const res = await verifyTokenRequest(cookies.token)
				// console.log(res)
				if (!res.data) {
					setIsAuthenticated(false)
					setLoading(false)
					return
				}

				setIsAuthenticated(true)
				setUser(res.data)
				setLoading(false)
			} catch (error) {
				setIsAuthenticated(false)
				setUser(null)
				setLoading(false)
			}
		}

		checkLogin()
	}, [])

	return (
		<AuthContext.Provider
			value={{ signUp, signIn, logout, loading, user, isAuthenticated, errors }}
		>
			{children}
		</AuthContext.Provider>
	)
}
