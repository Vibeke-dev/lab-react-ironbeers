// import beerPicture from '.assets/beers.png';
// import logo from './logo.svg';
import { Link } from "react-router-dom";



function HomePage() {
    return (
      <div>
        <h1>Home</h1>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Link to={'/beers'}>
            <h1>All Beers</h1>    
        </Link>
        <Link to={'/random-beer'}>
            <h1>Random Beer</h1>    
        </Link>
      </div>
    );
  }
  
  export default HomePage;