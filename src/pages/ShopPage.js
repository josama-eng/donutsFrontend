import { getAllProducts } from "../services/products.service";
import { useEffect, useState, useRef } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slicer";
import { toast } from "react-toastify";
import { searchProducts } from "../services/products.service";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [queryParams, setQueryParams] = useSearchParams();

  const onSearch = () => {
    searchProducts(params.search.replaceAll("-", " "))
      .then((response) => {
        console.log(response);

        if (response.status === 209) {
          navigate("/");
          toast.warning("No results found");
        } else {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadAllProducts = () => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!params.search) {
      loadAllProducts();
    } else {
      onSearch();
    }
  }, [products]);

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
      <h2>Shop</h2>

      <div className="categoryWrapper">{renderProducts()}</div>
    </div>
  );
};

export default ShopPage;
