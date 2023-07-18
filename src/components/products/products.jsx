import axios from "axios";
import { useState, useEffect } from "react";


const ProductList = ({ productItem }) => {
  const { name, description, price } = productItem;
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

const Products = ({ productName }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${productName}`
      );
      setProducts(response.data.data.data);
      console.log(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      fetchProducts();
    };
  }, []);

  return (
    <div className="products">
      <h3>{productName.charAt(0).toUpperCase() + productName.slice(1)}</h3>
      <div className="products-container">
        {products.length > 0
          ? products.map((product) => (
              <ProductList key={product._id} productItem={product} />
            ))
          : console.log("No Products Found")}
      </div>
    </div>
  );
};

export default Products;
