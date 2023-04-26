import { Link, useParams } from "react-router-dom";
import { categoryProducts } from "../services/categories.service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slicer";

const CategoryShop = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    categoryProducts(id)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.products);
        setTitle(response.data.categoryName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderProducts = () => {
    return products.map((product, index) => {
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
      <h2>{title}</h2>
      <div className="categoryWrapper">{renderProducts()}</div>
    </div>
  );
};

export default CategoryShop;
