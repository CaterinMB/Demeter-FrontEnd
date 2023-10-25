import axios from './axios.js'



export const Createsale = () => axios.post(`/Csale`);
export const CreatesaleDetail = (data) => axios.post(`/Csaledetail`, data);
export const GetDetails = (id) => axios.get(`/details/${id}`);
export const UpdSale = (data) => axios.put(`/UpdateSale`, data);

