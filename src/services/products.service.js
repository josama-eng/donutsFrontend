import axios from "axios";

export const getTopProducts = () => axios.get("/api/products/top");

export const productDetails = (id) => axios.get(`/api/productDetails/${id}`);

export const getAllProducts = () => axios.get("/api/products/all");

export const initPayment = (payload) => axios.post("/api/payment", payload);

export const searchProducts = (search) =>
  axios.post("/api/products/search", { search: search });
