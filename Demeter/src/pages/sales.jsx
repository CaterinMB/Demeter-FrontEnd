import React, { useEffect, useState } from 'react';
import { useProductCategories } from '../context/ProductCategoriesContext';
import defaultHam from '../img/defaultHam.png'
function Sales() {
    const { ProductCategories, fetchProductCategories } = useProductCategories();
    const [selectedCategory, setSelectedCategory] = useState("");
   
    useEffect(() => {
        fetchProductCategories();
        console.log('ProductCategories:', ProductCategories);
    }, []); 

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    

    return (
        <div className="mx-auto mt-4 contenedor flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Ventas 1.0</h1>
            <div className='flex flex-grid'>
            <div className="w-[120vh] min-h-[87vh] p-4 border border-gray-300 rounded-lg mr-4 mb-4">
                <div className="float-right">
                        <label htmlFor="categorias" className=" text-lg font-medium text-gray-700 " >Seleccione categorías: </label>
                        <select
                            id="categorias"
                            name="categorias"                           
                            className=" w-[20vh] h-[1vh]p-2 mt-1 rounded-md border border-orange-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                         >
                        {ProductCategories.map(category => (
                            <option key={category.ID_ProductCategory} value={category.Name_ProductCategory}>
                            {category.Name_ProductCategory}
                            </option>
                        ))}
                    </select>
                    
                    </div>
                    <h1 className='mt-[10vh]'>{selectedCategory !== "" ? selectedCategory : "Selecciona Almenos una categoria"}</h1>
                    <div className="images flex flex-grid">
                        <div className="product flex flex-col">
                            <img src={defaultHam} alt="ham"  className='h-[15vh] w-[15vh]' />
                            <p>Hamburguesa Clasica</p>
                        </div>
                    </div>
                </div>
                <div className="contenedor derecho w-[50vh] bg-gray-200 border border-gray-400 rounded-lg h-[60vh] shadow-lg">
                    <h1 className='ml-5 mt-4 text-[4.5vh]'>Venta # 2</h1>
                </div>
            </div>
        </div>
    );
}

export default Sales;
