import { createContext, useState, useContext, useEffect } from 'react'
import { Createsale, CreatesaleDetail, GetDetails, UpdSale } from '../api/sale.request'; 

export const SaleContext = createContext();

export const useSaleContext = () => {
    const context = useContext(SaleContext);
    if (!context) {
        throw new Error("El useSale debe usarse dentro de SaleProvider")
    }
    return context;
}

export const SaleProvider = ({ children }) => {

    const [Sale, setSale] = useState([]);
    const [details, setDetails] = useState([]);
    const [total, setTotal] = useState([]);


    const Create = async () => {
        try {
            const res = await Createsale();
            setSale(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const CreateDetail = async (data) => {
        try {
            const res = await CreatesaleDetail(data);
            return (res)
        } catch (error) {
            console.log(error)
        }

    }
    const getDetailsSale = async (id) => {
        try {
            const res = await GetDetails(id);
            setDetails(res.data)
        } catch (error) {
            console.log("no funciona")
        }

    }

    const fetchGain = async (totalMoney) =>{
        setTotal(totalMoney)
    }

    const Count = async (data) => {
        try {
            
            const res = await UpdSale(data);
        } catch (error) {
            console.log("no funciona el actualizar")
        }

    }


    return (
        <SaleContext.Provider
            value={{
                Sale,
                details,
                total,
                fetchGain,
                Create, 
                CreateDetail,
                getDetailsSale,
                Count    
            }}
        >
            {children}
        </SaleContext.Provider>
    );
};