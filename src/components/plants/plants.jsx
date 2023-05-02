import React, { useEffect, useState } from "react";
import PlantsList from "./plantsList";

const Plants = () => {
  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    try {
        console.log('fetch');
      const response = await fetch("http://localhost:8080/api/v1/plants");
      const data = await response.json();

      setPlants(data.data.plants);
      console.log(data.data.plants);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div>
      <h1>Plants</h1>
      {plants.map((plant) => (
        <PlantsList 
          key={plant.id} 
          plant={plant}
        />
      ))}
    </div>
  );
};

export default Plants;
