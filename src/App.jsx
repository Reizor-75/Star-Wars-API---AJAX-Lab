// npm module
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"

//services
import * as sw from "../services/sw-api"

//components
import Title from '../components/Title'
import StarshipList from '../components/StarshipList'

//css
import './App.css'
import StarshipDetails from "../pages/StarshipDetails"

function App() {
  const [starships, setStarships] = useState ([])

  useEffect(()=>{
    const fetchStarships = async() =>{
      const starshipData = await sw.getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <main>
      <Title />
      <Routes> 
        <Route path = "/" element={<StarshipList starships={starships} />} />
        <Route path = "/starship/:starshipId" element={<StarshipDetails />} />
      </Routes>
    </main>
  )
}

export default App
