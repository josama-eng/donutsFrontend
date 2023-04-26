import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footerWrapper">
      <div className="info">
        <div className="left">
          <p>
            <a href="tel:+381648521768" className="linkReset footerLink">
              <AiOutlinePhone className="icon" /> +381648521768
            </a>
          </p>
          <p>
            <a
              href="mailto:donuts22srb@gmail.com"
              className="linkReset footerLink"
            >
              <AiOutlineMail className="icon" /> donuts22srb@gmail.com
            </a>
          </p>
        </div>
        <div className="right">
          <p>
            <a href="" className="linkReset footerLink">
              <AiOutlineHome className="icon" /> Bulevar Oslobodjenja 22, Novi
              Sad
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="linkReset footerLink"
            >
              <AiOutlineInstagram className="icon" />
              donutsIceCream
            </a>
          </p>
        </div>
      </div>
      <div className="copyRight">
        <small>Design by jSam. All rights reserved.</small>
      </div>
    </div>
  );
};

export default FooterComponent;
