import React, { useEffect, useState } from "react";
import axios from "axios";
import "./plants.css";

const PlantsList = ({ plant }) => {
  const { name, description, price } = plant;
  return (
    <div className="plant-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

const Plants = () => {
  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    try {
      console.log(`${process.env.REACT_APP_API_URL}/plants`);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`);
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
