import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide4 from "../../../assets/images/slide5.jpg";
import slide5 from "../../../assets/images/slide5.jpg";
import slide6 from "../../../assets/images/slide6.jpg";
import slide7 from "../../../assets/images/slide7.jpg";
import slide8 from "../../../assets/images/slide8.jpg";
import slide9 from "../../../assets/images/slide9.jpg";
import slide10 from "../../../assets/images/slide10.jpg";
import slide11 from "../../../assets/images/slide11.jpg";

const SliderComponent = () => {
  const options = {
    type: "loop",
    perPage: 3,
    perMove: 3,
    gap: "0",
    rewind: true,
    pagination: false,
    arrows: false,
    autoWidth: true,
    autoHeight: true,
    autoplay: true,
    type: "loop",
    interval: 2000,
  };
  return (
    <div className="sliderContainer">
      <h2>
        Satisfy Your Sweet Cravings: A Delicious Journey Through Our Ice Cream
        and Donut Collection
      </h2>
      <Splide options={options} hasTrack={false}>
        <SplideTrack>
          <SplideSlide>
            <img src={slide1} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide2} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide3} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide4} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide5} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide6} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide7} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide8} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide9} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide10} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={slide11} alt="" />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default SliderComponent;
