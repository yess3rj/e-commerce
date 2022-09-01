import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import './App.css'
import { AuthProvider } from '@/context/Auth.jsx';

function App () {

  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Routes />      
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
