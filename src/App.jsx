// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

//css
import './App.css'

// npm module
import { useState, useEffect } from "react"

//services
import * as sw from "../services/sw-api"

//components
import Title from '../components/Title'

function App() {
  const [starships, setStarships] = useState ([])

  useEffect(()=>{
    const fetchStarships = async() =>{
      const starshipData = await sw.getAllStarships()
      setStarships(starshipData)
    }
    fetchStarships()
  }, [])

  return (
    <main>
      <Title />
    </main>
  )
}

export default App
