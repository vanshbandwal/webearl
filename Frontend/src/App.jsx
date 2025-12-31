import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Home1 from './pages/Home1/Home1'
import Home2 from './pages/Home2/Home2'
import Home3 from './pages/Home3/Home3'
import Home4 from './pages/Home4/Home4'
import Home5 from './pages/Home5/Home5'
import Project from './pages/Project/Project'
import Client from './pages/Client/Client'
import Footer from './pages/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <Home1/>
     <Home2/>
     <Home3/>
     <Home4/>
     <Home5/>
     <Project/>
     <Client/>
     <Footer/>
     </>
  )
}

export default App
