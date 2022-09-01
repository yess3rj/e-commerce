import { useState } from 'react'
import Products from '@/components/Products'
import Navbar from '@/components/Navbar'

function Home() {
const [search, setSearch] = useState('')
  return (
    <>
    <Navbar value={search} setValue={setSearch} />
    <Products value={search} />
    </>

  )
}

export default Home