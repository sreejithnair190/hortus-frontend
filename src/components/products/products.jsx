import axios from "axios";
import { useState, useEffect } from "react";

const Products = ({ product }) => {
  const [products, setProducts] = useState([]);

  if (product == undefined) {
    product = "plants";
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${product}`
      );
      setProducts(response.data.data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      fetchProducts();
    };
  }, []);

  if (products.length > 0) {
    products[0].map((product) => {
      console.log(product);
    });
  }

  return (
    <div className="plants">
      <h3>Plants</h3>
      <div className="plants-container">
        {products.map((product) => (
          JSON.stringify(product)
        ))}
      </div>
    </div>
  );
};

export default Products;
