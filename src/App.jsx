import Products from './components/Products'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import './App.css'
import { AuthProvider } from '@/context/Auth.jsx';
import CheckoutPage from './components/CheckoutPage'

function App () {
  return (
    <BrowserRouter>
     <div className='App'>
     <AuthProvider>
        <Navbar />
        <CheckoutPage />
        <Routes />      
     </AuthProvider>
    </div>
    </BrowserRouter>
  )
}

export default App
