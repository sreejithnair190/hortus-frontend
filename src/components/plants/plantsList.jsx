import React from "react";

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

export default PlantsList;
