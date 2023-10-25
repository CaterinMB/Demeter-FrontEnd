import React, { useState, useEffect } from 'react';
import { useSaleContext } from '../context/SaleContext';
import { useProduct } from '../context/ProductContext';
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineMinus } from 'react-icons/ai';

function Bill() {
    const [isFormVisible, setFormVisible] = useState(false);
    const { Create, Sale, getDetailsSale, details, Count , fetchGain, total } = useSaleContext();
    const { getwholeProducts, AllProducts } = useProduct();

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
       
    };

    const CreateSale = () => {
        Create();
    }

    useEffect(() => {
        getwholeProducts();
    }, []);

    useEffect(() => {
        getDetailsSale(Sale.ID_Sale);
    }, [Sale]);

    useEffect(() => {
        const subtotal = details.reduce((acc, item) => {
            const product = AllProducts.find(product => product.ID_Product === item.Product_ID);
            return acc + (product.Price_Product * item.Lot);
            
        }, 0);
        fetchGain(subtotal)

         
    }, [details, AllProducts]);

    const clic = () => {
        console.log(details);
    }

    return (
        <div className="relative text-center h-full w-full flex flex-col justify-center items-center">
            {isFormVisible ? (
                <button
                    className="bg-orange-500 text-white py-2 px-2 rounded-full absolute top-2 right-2"
                    onClick={toggleFormVisibility}
                >
                    X
                </button>
            ) : (
                <button
                    className="bg-orange-500 text-white py-2 px-4 rounded"
                    onClick={() => {
                        toggleFormVisibility();
                        CreateSale();
                    }}
                >
                    Iniciar Venta
                </button>
            )}

            {isFormVisible && (
                <form className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Orden {Sale.ID_Sale}</h2>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-600">Fecha:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full p-2 border rounded"
                            defaultValue={new Date().toISOString().substr(0, 10)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="waiter" className="block text-gray-600">Mesero:</label>
                        <select
                            id="waiter"
                            name="waiter"
                            className="w-full p-2 border rounded"
                        >
                            <option value="mesero1">Mesero 1</option>
                            <option value="mesero2">Mesero 2</option>
                            <option value="mesero3">Mesero 3</option>
                        </select>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="">Producto</th>
                                    <th className=" p-1">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details.map((item, index) => (
                                    <tr key={index}>
                                        <td className=" p-1">
                                            {AllProducts.find(product => product.ID_Product === item.Product_ID).Name_Products}
                                        </td>
                                        <td className=" flex flex-row items-center p-1 ml-[1vh]">
                                            <div style={{ marginRight: '0.5rem' }}>
                                                <AiOutlineMinus />
                                            </div>
                                            <div>
                                                {item.Lot}
                                            </div>
                                            <div style={{ marginLeft: '0.5rem' }}>
                                                <IoIosAdd />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-4">
                        <p>SubTotal: {total} Total: {total}</p>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-2 rounded-full mb-[2vh] right-2" onClick={() => {
                        toggleFormVisibility();
                    }}>Generar Nueva Orden</button>
                </form>
            )}
            
        </div>
    );
}

export default Bill;
