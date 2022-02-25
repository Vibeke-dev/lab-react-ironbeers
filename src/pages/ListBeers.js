import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ListBeers(props) {
  const { beers } = props;
  //console.log(beers);

  return (
    <div>
    <Navbar />
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img width="50" src={beer.image_url} alt="foto of beer" />
              <h3>{beer.name}</h3>
              <h5>{beer.tagline}</h5>
              <p>Created by: {beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
