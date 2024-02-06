import { Link } from "react-router-dom";

const StarshipList = (props) => {
  return (  
    <>
      <h1>Starships</h1>
      <div className="link-container"> 
        {props.starships?.map((starship) => 
          <Link to={`/starship/${starship.url.substring(32, starship.url.length-1)}`} key= {starship.url.substring(32, starship.url.length-1)} >
            <div className="card"  >
            {starship.name} 
          </div>
          </Link>
        )}
      </div>
    </>
  );
}

export default StarshipList;