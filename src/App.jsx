import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import './App.css'
import { AuthProvider } from '@/context/Auth.jsx';
import Navbar from './components/Navbar';

function App () {

  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes />      
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
