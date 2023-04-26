import { Link } from "react-router-dom";
import About from "./components/About";
import TopProducts from "./components/TopProducts";
import IceCreamComponent from "./components/IceCreamComponent";
import SliderComponent from "./components/Slider.Component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const HomePageComponent = () => {
  const [ref, inView] = useInView();
  const titleRef = useRef(null);

  const variants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <>
      <div className="homePageComponent">
        <div className="contentWrapper">
          <motion.h1
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            ref={ref}
          >
            Sweet Delights: Donuts and Ice Cream Treats
          </motion.h1>
          <p>
            Indulge in our delicious and decadent treats at our online shop! We
            offer a variety of mouthwatering donuts and creamy ice-creams to
            satisfy your sweet tooth. Our freshly made desserts are perfect for
            any occasion or simply for a sweet pick-me-up. Order now and treat
            yourself to a delightful experience!
          </p>
          <Link to="/shop" className="linkReset homeBtn">
            Get Started
          </Link>
        </div>
      </div>
      <About />
      <TopProducts />
      <IceCreamComponent />
      <SliderComponent />
    </>
  );
};

export default HomePageComponent;
