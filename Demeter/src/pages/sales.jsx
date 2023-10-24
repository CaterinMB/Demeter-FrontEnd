import React, { useEffect, useState } from 'react';
import { useProductCategories } from '../context/ProductCategoriesContext';
import { useProduct } from '../context/ProductContext';
import Bill from './Bill_Sale';

function Sales() {
    const { ProductCategories, fetchProductCategories } = useProductCategories();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado adicional para el valor seleccionado del select
    const { fetchProduct } = useProduct();
    const [selectedCategoryName, setSelectedCategoryName] = useState({});
    const [categoryImages, setCategoryImages] = useState({});
    const [productNames, setProductNames] = useState({});

    useEffect(() => {
        fetchProductCategories();
    }, []);

    const handleCategoryChange = (event) => {
        const newCategoryID = event.target.value;

        if (selectedCategories.includes(newCategoryID)) {
            const updatedCategories = selectedCategories.filter(
                (category) => category !== newCategoryID
            );
            setSelectedCategories(updatedCategories);
            setSelectedCategory(''); // Restablecer el valor seleccionado
            const updatedCategoryImages = { ...categoryImages };
            const updatedProductNames = { ...productNames };
            delete updatedCategoryImages[newCategoryID];
            delete updatedProductNames[newCategoryID];
            setCategoryImages(updatedCategoryImages);
            setProductNames(updatedProductNames);
        } else {
            setSelectedCategories([...selectedCategories, newCategoryID]);
            setSelectedCategory(newCategoryID); // Establecer el valor seleccionado
            setSelectedCategoryName({ ...selectedCategoryName, [newCategoryID]: event.target.options[event.target.selectedIndex].text });
            fetchProductsForCategory(newCategoryID);
        }
    };

    // Restablecer el valor del select en función de selectedCategory
    useEffect(() => {
        if (selectedCategory) {
            const selectElement = document.getElementById('categorias');
            selectElement.value = selectedCategory;
        }
    }, [selectedCategory]);

    const fetchProductsForCategory = (categoryID) => {
        fetchProduct(categoryID)
            .then(data => {
                const images = data.map(product => product.Image);
                const names = data.map(product => product.Name_Products);
                setCategoryImages({ ...categoryImages, [categoryID]: images });
                setProductNames({ ...productNames, [categoryID]: names });
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            });
    };

    return (
        <div className="mx-auto mt-4 contenedor flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Ventas 1.0</h1>
            <div className='flex flex-grid'>
                <div className="w-[120vh] min-h-[87vh] p-4 border border-gray-300 rounded-lg mr-4 mb-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="float-right">
                        <label htmlFor="categorias" className="text-lg font-medium text-gray-700">Seleccione categorías:</label>
                        <select
                            id="categorias"
                            name="categorias"
                            className="w-[20vh] h-[1vh]p-2 mt-1 rounded-md border border-orange-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            value={selectedCategory} // Usar selectedCategory en lugar de selectedCategories
                            onChange={handleCategoryChange}
                        >
                            {ProductCategories.map(category => (
                                <option key={category.ID_ProductCategory} value={category.ID_ProductCategory}>
                                    {category.Name_ProductCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedCategories.map((categoryID, index) => (
                        <div key={index}>
                            <h1 className="text-3xl font-bold mb-4 mt-[10vh]">
                                {selectedCategoryName[categoryID]}
                            </h1>
                            <div className="images flex flex-grid">
                                {categoryImages[categoryID] && categoryImages[categoryID].map((image, imageIndex) => (
                                    <div key={imageIndex} className='pl-[3vh] transform transition-transform hover:scale-105'>
                                        <img
                                            src={image}
                                            alt=""
                                            className='h-[15vh] cursor-pointer'
                                        />
                                        <p className="text-lg font-semibold text-orange-600">{productNames[categoryID][imageIndex]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="contenedor derecho w-[50vh] bg-gray-200 border border-gray-400 rounded-lg h-[60vh] shadow-lg relative">
                    <div className="h-full w-full overflow-hidden">
                        <Bill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sales;
