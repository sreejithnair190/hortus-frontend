import React, {useEffect, useState} from 'react'

const Plants = () => {

//   const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    const response = await fetch('http://localhost:8080/api/v1/plants');
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchPlants();         
  }, [])

  return (
    <div>
        <h1>Plants</h1>
    </div>
  )
}



export default Plants;