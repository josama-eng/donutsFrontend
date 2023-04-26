import axios from "axios";

export const placeOrder = (payload) => axios.post("/api/order", payload);
