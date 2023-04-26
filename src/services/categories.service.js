import axios from "axios";

export const getCategories = () => axios.get("/api/categories");

export const categoryProducts = (id) => axios.get(`/api/shop/${id}`);
