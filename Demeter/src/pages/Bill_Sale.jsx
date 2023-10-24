import React, { useState } from 'react';

function Bill() {
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className="relative text-center h-full w-full flex flex-col justify-center items-center">
            {isFormVisible ? (
                <button
                    className="bg-red-500 text-white py-2 px-2 rounded-full absolute top-2 right-2"
                    onClick={toggleFormVisibility}
                >
                    X
                </button>
            ) : (
                <button
                    className="bg-orange-500 text-white py-2 px-4 rounded"
                    onClick={toggleFormVisibility}
                >
                    Iniciar Venta
                </button>
            )}

            {isFormVisible && (
                <form className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Orden</h2>
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
                    <div className="mb-4">
                        <label htmlFor="subtotal" className="block text-gray-600">Subtotal:</label>
                        <input
                            type="number"
                            id="subtotal"
                            name="subtotal"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="total" className="block text-gray-600">Total:</label>
                        <input
                            type="number"
                            id="total"
                            name="total"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </form>
            )}
        </div>
    );
}

export default Bill;
