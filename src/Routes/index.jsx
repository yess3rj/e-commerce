import { Routes, Route } from 'react-router-dom'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hola, soy el home</h1>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default MainRoutes