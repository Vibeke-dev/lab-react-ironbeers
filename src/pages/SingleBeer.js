import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";

function SingleBeer(props) {
  const { beers } = props;
  const { beerId } = useParams();
  
  //find specific beer
  const beer = beers.find((beerObj) => {
    //console.log(beerId);
    return beerObj._id === beerId;
  });

  return (
    <div>
    <Navbar />
        <img width="50" src={beer.image_url} alt="foto of beer" />
        <h1>{beer.name}</h1>
        <h5>{beer.tagline}</h5>
        <h5>{beer.first_brewed}</h5>
        <h5>{beer.attenuation_level}</h5>
        <h5>{beer.description}</h5>
        <h5>{beer.contributed_by}</h5>
    </div>
  );
}

export default SingleBeer;
