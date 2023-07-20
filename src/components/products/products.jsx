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
          {/* <div className="photo-album">
            <ul>
              <li><img src="img/test.png" alt={name} /></li>
              <li><img src="img/test.png" alt={name} /></li>
              <li><img src="img/test.png" alt={name} /></li>
              <li><img src="img/test.png" alt={name} /></li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="product__info">
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="price">
          $ <span>{price}</span>
        </div>
        {/* <div className="description">
          <h3>Description</h3>
          <p>{description}</p>
        </div> */}
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
      <div className="product">
        {products.length > 0 ?<ProductList productItem={products[0]} /> : console.log("No product found")}
        {/* {products.length > 0
          ? products.map((product) => (
              <ProductList key={product._id} productItem={product} />
            ))
          : console.log("No Products Found")} */}
      </div>
    </div>
  );
};

export default Products;
