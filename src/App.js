import "./App.css";
import { Routes, Route } from "react-router-dom";

import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import AddNewBeer from "./pages/NewBeer";

import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";

function App() {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeerData(response.data);
    });
  }, []);

  const [RandomBeerData, setRandomBeerData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeerData(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/beers" element={<ListBeers beers={beerData} />} />

        <Route path="beers/:beerId" element={<SingleBeer beers={beerData} />} />

        <Route
          path="/random-beer"
          element={<RandomBeer beer={RandomBeerData} />}
        />

        <Route path="/new-beer" element={<AddNewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
