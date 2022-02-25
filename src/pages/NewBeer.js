// src/pages/AddApartmentPage.js

import { useState } from "react";          // <== IMPORT
import axios from 'axios';            // <==  IMPORT axios
import { useNavigate } from "react-router-dom"; // <== IMPORT

function AddNewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  //const navigate = useNavigate();
 
  
  return (
    <div className="AddMovie">    
      <h3>Add New Apartment</h3>
      
      {/* onSubmit={handleSubmit} */}
      <form> 
        <label>Name</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
 
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        />
        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}
 
export default AddNewBeer;