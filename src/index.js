import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import userSlicer from "./redux/user.slicer";
import cartSlicer from "./redux/cart.slicer";

//pages and components
import RegisterPageComponent from "./pages/RegisterPageComponent";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import CategoryShop from "./pages/CategoryShop";
import ActivationPage from "./pages/ActivationPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import Order from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPageComponent />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:search",
        element: <ShopPage />,
      },
      {
        path: "/category/:id",
        element: <CategoryShop />,
      },
      {
        path: "/user/activateAccount/:id",
        element: <ActivationPage />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} basename="/my-app" />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
