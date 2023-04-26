import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch } from "react-redux";
import { saveUser } from "./redux/user.slicer";
import NavComponent from "./components/nav/Nav.Component";
import FooterComponent from "./components/footer/Footer.Component";

axios.defaults.baseURL = "https://donuts.herokuapp.com/";
axios.interceptors.request.use((config) => {
  if (localStorage.hasOwnProperty("donuts_token")) {
    config.headers.Authorization = localStorage.getItem("donuts_token");
  }
  return config;
});

function App() {
  const dispatch = useDispatch();
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    let userLocalStorage = localStorage.getItem("donutsUser");

    if (userLocalStorage) {
      dispatch(saveUser(JSON.parse(userLocalStorage)));
    }
    setIsFinish(true);
  }, []);

  return (
    isFinish && (
      <div>
        <ToastContainer />
        <NavComponent />
        <Outlet />
        <FooterComponent />
      </div>
    )
  );
}

export default App;
