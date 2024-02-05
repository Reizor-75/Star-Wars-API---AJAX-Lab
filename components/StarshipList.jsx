import { Link } from "react-router-dom";

const StarshipList = (props) => {
  return (  
    <>
      <h1>Starships</h1>
      <ul> 
        {props.starships?.map((starship, idx) => 
          <p className="link-container" key={idx}>
            {starship.name}
          </p>
        )}
      </ul>
    </>
  );
}

export default StarshipList;