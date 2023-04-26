import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productDetails } from "../services/products.service";
import { addToCart } from "../redux/cart.slicer";
import { useDispatch } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const [ref, inView] = useInView();
  const titleRef = useRef(null);

  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  useEffect(() => {
    productDetails(id)
      .then((response) => {
        setSingleProduct(response.data);
        console.log(singleProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleCount(shevron) {
    if (count + shevron > 0) {
      setCount(count + shevron);
    }
  }

  const handleAddToCart = (product) => {
    singleProduct.count = count;
    dispatch(addToCart(singleProduct));
  };

  const renderProduct = () => {
    return (
      <div className="singleProductContainer" style={{ overflow: "hidden" }}>
        <div className="img">
          <img
            src={`https://donuts.herokuapp.com/${singleProduct?.image}`}
            alt=""
          />
        </div>
        <motion.div
          className="content"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <h3>{singleProduct?.name}</h3>
          <p>{singleProduct?.description}</p>
          <p className="price">Price: {singleProduct?.price}e</p>
          <div className="counter">
            <div
              className="shevronDown-wrapper"
              onClick={() => handleCount(-1)}
            >
              <FaChevronDown />
            </div>

            <p className="quantity">{count}</p>

            <div className="shevronUp-wrapper" onClick={() => handleCount(1)}>
              <FaChevronUp />
            </div>
          </div>
          <button onClick={() => handleAddToCart(singleProduct)}>
            <span></span>
            <span></span>
            <span></span>
            Add To Cart
          </button>
        </motion.div>
      </div>
    );
  };

  return <div>{renderProduct()}</div>;
};

export default ProductDetailsPage;
