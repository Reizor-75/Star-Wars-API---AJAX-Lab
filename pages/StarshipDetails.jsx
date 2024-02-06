// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getStarshipData } from '../services/sw-api'

const StarshipDetails = () => {  
  const [starshipDetails, setStarshipsDetails] = useState({})
  const {starshipId} = useParams()

  useEffect(() =>{
    const fetchStarshipsDetails = async() =>{
      const starshipData = await getStarshipData(starshipId)
      setStarshipsDetails(starshipData)
    }
    fetchStarshipsDetails()
  }, [starshipId])

  
  if(!starshipDetails.name) return <h1>Loading Details...</h1>

  return (  
    <main className='detail-main'>
      <div className='starship-detail-card'>
        <h2> Name: {starshipDetails.name} </h2>
        <h2> Model: {starshipDetails.model}</h2>
        <Link to={`/`} > RETURN </Link>
      </div>
    </main>
  );
}

export default StarshipDetails;