import axios from './axios.js'



export const getProducts = (id) => axios.get(`/product/${id}`);

export const getProduct = (id) => axios.get(`/Singleproduct/${id}`);
export const getAllProduct = () => axios.get(`/AllProducts`);