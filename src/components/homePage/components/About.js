import { useState, useEffect, useRef } from "react";
import { getCategories } from "../../../services/categories.service";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [categories, setCategories] = useState([]);
  const [ref, inView] = useInView();
  const imageRef = useRef(null);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCategories]);

  const variants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <div className="category" key={index}>
          <motion.img
            src={category.image}
            animate={{ rotate: inView ? 360 : 0 }}
            transition={{ duration: 1 }}
            ref={ref}
            alt=""
          />

          <h3>
            <Link
              to={`/category/${category._id}`}
              className="linkReset ctaLink"
            >
              {category.categoryName}
            </Link>
          </h3>
          <p>{category.description}</p>
        </div>
      );
    });
  };
  return (
    <div className="about">
      <motion.div
        className="content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1.7 }}
        ref={ref}
        variants={variants}
      >
        <h2>What We Do</h2>
        <p>
          Welcome to our online shop, where you can discover the perfect balance
          of sweet and creamy goodness! Our selection of handcrafted donuts and
          velvety ice-creams are made with only the finest ingredients to ensure
          a delectable experience with every bite. From classic flavors to
          unique combinations, we've got something for everyone. So go ahead and
          satisfy your cravings by ordering now - you won't regret it!
        </p>
      </motion.div>
      <div className="categories">{renderCategories()}</div>
    </div>
  );
};

export default About;
