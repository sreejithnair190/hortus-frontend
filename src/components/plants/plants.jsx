import React, { useEffect, useState } from "react";
import PlantsList from "./plantsList";
import axios from "axios";
import "../../assets/css/products/plants.css";

const Plants = () => {
  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/plants");
      setPlants(response.data.data.plants);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div className="plants">
      <h3>Plants</h3>
      <div className="plants-container">
        {plants.map((plant) => (
          <PlantsList key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
