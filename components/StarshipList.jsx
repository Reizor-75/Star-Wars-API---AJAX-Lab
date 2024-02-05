import { Link } from "react-router-dom";

const StarshipList = (props) => {
  return (  
    <>
      <h1>Starships</h1>
      <div className="link-container"> 
        {props.starships?.map((starship, idx) => 
          <div className="card"  key={idx}>
            <Link to={`/starship/${idx}`} >{starship.name}</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default StarshipList;