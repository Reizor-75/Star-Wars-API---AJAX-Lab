import { useParams } from 'react-router-dom'

const StarshipDetails = (props) => {  
  const {starshipId} = useParams()

  return (  
    <>
      <h1>hello</h1>
    </>
  );
}

export default StarshipDetails;