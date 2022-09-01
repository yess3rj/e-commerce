import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import Dashboard from '@/pages/Dashboard';
import { AuthContext } from '@/context/Auth.jsx';
import Products from '@/components/Products';

function MainRoutes() {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/' replace />}
      />
    </Routes>
  )
}

export default MainRoutes