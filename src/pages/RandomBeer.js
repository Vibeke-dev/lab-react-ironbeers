import Navbar from "../components/Navbar";

function RandomBeer(props) {
  const { beer } = props;

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

export default RandomBeer;
