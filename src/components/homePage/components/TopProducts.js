import { getTopProducts } from "../../../services/products.service";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/cart.slicer";
import { useDispatch } from "react-redux";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getTopProducts()
      .then((response) => {
        setTopProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setTopProducts]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderTopProducts = () => {
    return topProducts.map((product, index) => {
      return (
        <div className="productContainer" key={index}>
          <Link
            to={`/productDetails/${product._id}`}
            className="linkReset productDetailsLink"
          >
            <img src={`https://donuts.herokuapp.com/${product.image}`} alt="" />
            <h3>{product.name}</h3>
            <p>{product.price}e</p>
          </Link>
          <button onClick={() => handleAddToCart(product)}>
            <span></span>
            <span></span>
            <span></span>
            Add to cart
          </button>
        </div>
      );
    });
  };
  return (
    <div className="categoryContainer">
      <h2>Our bestselling products</h2>
      <div className="categoryWrapper">{renderTopProducts()}</div>
    </div>
  );
};

export default TopProducts;
// Glazed Donut
// Boston Cream Donut
// Jelly Donut
// Apple Fritter
// Chocolate Donut
// Old Fashioned Donut
// Blueberry Donut
// Cinnamon Roll Donut
// Maple Bar Donut
// Long John Donut
