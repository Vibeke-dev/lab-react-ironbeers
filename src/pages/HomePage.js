import beerPicture from '../assets/beers.png';
import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div className="homePage">
        <img src={beerPicture} className="BeerPicture" alt="Beer" />

        <Link to={'/beers'}>
            <h1>All Beers</h1>    
        </Link>
        <Link to={'/random-beer'}>
            <h1>Random Beer</h1>    
        </Link>
        <Link to={'/new-beer'}>
            <h1>New Beer</h1>    
        </Link>
      </div>
    );
  }
  
  export default HomePage;