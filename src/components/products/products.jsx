import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./products.scss"

const ProductList = ({ productItem }) => {
  const { name, description, price } = productItem;
  return (
    <Fragment>
      <div className="product__photo">
        <div className="photo-container">
          <div className="photo-main">
            <img src="img/test.png" alt={name} />
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="title">
          <h4>{name}</h4>
        </div>
        <div className="price">
          <span>${price}</span>
        </div>
        <button className="buy--btn show--details">Show More Details</button>
      </div>
    </Fragment>
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
    <div className="products-container">
        {products.length > 0
          ? products.map((product) => (
              <div className="product">
                <ProductList key={product._id} productItem={product} />
              </div>
            ))
          : console.log("No Products Found")}
    </div>
  );
};

export default Products;
