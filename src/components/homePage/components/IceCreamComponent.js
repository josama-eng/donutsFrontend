import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const IceCreamComponent = () => {
  const [ref, inView] = useInView();
  const titleRef = useRef(null);

  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <div className="iceCreamContainer" style={{ overflow: "hidden" }}>
      <div className="left"></div>
      <motion.div
        className="right"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
        ref={ref}
      >
        <h2>Did you know?</h2>
        <p>
          Ice cream delivery in specialized freezers is convinient way to enjoy
          your favorite frozen treats without having to leave comfort of your
          home. These specialized freezers are design to keep your ice cream at
          the perfect temperature,ensuring that it stays fresh and delicious.
        </p>
      </motion.div>
    </div>
  );
};

export default IceCreamComponent;
