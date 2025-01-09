import { useState } from 'react'
import Navbar from './pages/Navbar'
import Main from './pages/Main'
import Footer from './pages/Footer'
function App() {
return (
  <div className='flex flex-col h-[100vh]'>
    <Navbar />
    <Main />
    <Footer />
  </div>
)
}

export default App
