import React from "react";

const PlantsList = ({ plant }) => {
  const { name, description, price } = plant;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default PlantsList;
