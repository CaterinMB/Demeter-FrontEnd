import React, { useEffect, useState } from 'react';
import { useProductCategories } from '../context/ProductCategoriesContext';
import { useProduct } from '../context/ProductContext';

function Sales() {
    const { ProductCategories, fetchProductCategories } = useProductCategories();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { Product, fetchProduct } = useProduct();
    const {prod, getProduct} = useProduct();
    const [selectedCategoryName, setSelectedCategoryName] = useState([]);

    useEffect(() => {
        fetchProductCategories();
    }, []);

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;

        if (selectedCategories.includes(newCategory)) {
            const updatedCategories = selectedCategories.filter(
                (category) => category !== newCategory
            );
            setSelectedCategories(updatedCategories);
            setSelectedCategoryName(selectedCategoryName.filter(name => name !== event.target.options[event.target.selectedIndex].text));
        } else {
            setSelectedCategories([...selectedCategories, newCategory]);
            setSelectedCategoryName([...selectedCategoryName, event.target.options[event.target.selectedIndex].text]);
        }

        fetchProduct(newCategory);
    
    };

    return (
        <div className="mx-auto mt-4 contenedor flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Ventas 1.0</h1>
            <div className='flex flex-grid'>
                <div className="w-[120vh] min-h-[87vh] p-4 border border-gray-300 rounded-lg mr-4 mb-4">
                    <div className="float-right">
                        <label htmlFor="categorias" className="text-lg font-medium text-gray-700">Seleccione categorías:</label>
                        <select
                            id="categorias"
                            name="categorias"
                            className="w-[20vh] h-[1vh] p-2 mt-1 rounded-md border border-orange-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            value={selectedCategories[selectedCategories.length - 1] || ""}
                            onChange={handleCategoryChange}
                        >
                            {ProductCategories.map(category => (
                                <option key={category.ID_ProductCategory} value={category.ID_ProductCategory}>
                                    {category.Name_ProductCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedCategoryName.map((categoryName, index) => (
                        <h1 className="text-3xl font-bold mb-4 mt-[10vh]" key={index}>
                            {categoryName}
                            
                        </h1>
                    ))}
                    <div className="images flex flex-grid">
                        {Product.map(product => (
                            <div key={product.ID_Product} className="product flex flex-col border-orange-300 shadow-sm ml-[3vh]">
                                <img src={product.Image} alt="ham" className='h-[15vh] w-[15vh] ml-[2vh]' />
                                <p className='pl-[2vh]'>{product.Name_Products}</p>
                            </div>
                        ))}
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
