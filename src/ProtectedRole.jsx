import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const AdminRoute = ({ children }) => {
	const { user } = useAuth()

	if (user) {
		return user.role === 'admin' ? <Outlet /> : <Navigate to='/' />
	}
}

export default AdminRoute
