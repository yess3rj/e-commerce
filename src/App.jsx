import Product from './components/Product'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import './App.css'

function App () {
  return (
    <BrowserRouter>
     <div className='App'>
      <Navbar />
      <Product />
      <Routes />
    </div>
    </BrowserRouter>
  )
}

export default App
