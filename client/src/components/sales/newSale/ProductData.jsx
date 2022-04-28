import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clienteAxios from "../../../config/axios";

const ProductData = ({ handleProduct, newProduct }) => {
    const [productCategories, setProductCategories] = useState([])
    const [productsFiltered, setproductsFiltered] = useState([]);
    const products = useSelector(({ products }) => products.products);
    
    useEffect(() => {
        const getProductCategories = async () => {
            const res = await clienteAxios('/product-categories')
            setProductCategories(res.data)
        }
        getProductCategories()
    }, [])

    useEffect(() => {
        const filterPrductByCategorySelected = async () => {
            const idCategorySelected = parseInt(newProduct.category)
            const filterByCategory = (product) => {        
                    
                    return product.idProductCategory === idCategorySelected;

            }          
            const result = await products.filter(filterByCategory);
            setproductsFiltered(result);
        };
        filterPrductByCategorySelected();
    }, [handleProduct]);
    

    

    return (
        <div className="mt-3">
            <h3 className="text-gray-700 my-2  font-semibold">
                Datos del producto
            </h3>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Categoria*
                    </label>
                    <select
                        id="category"
                        name="category"
                        autoComplete="category"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.category}
                    >
                        <option hidden value="">
                            --selecionar --
                        </option>
                        {productCategories.map((category) => (
                            <option
                                key={category.idProductCategory}
                                value={category.idProductCategory}
                            >
                                {category.category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Producto*
                    </label>
                    <select
                        id="product"
                        name="product"
                        autoComplete="product"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
                        onChange={handleProduct}
                        value={newProduct.product}
                        disabled={newProduct.category === ""}
                    >
                        <option hidden value="">
                            --selecionar --
                        </option>
                        {productsFiltered.length !== 0 &&
                            productsFiltered.map((product) => (
                                <option
                                    key={product.idProduct}
                                    value={product.idProduct}
                                >
                                    {product.product}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Cantidad*
                    </label>
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        autoComplete="quantity"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.quantity}
                    />
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="unitPrice"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Precio*
                    </label>
                    <input
                        id="unitPrice"
                        name="unitPrice"
                        type="number"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.unitPrice}
                    />
                </div>

                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="licensePlate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Placa
                    </label>
                    <input
                        id="licensePlate"
                        name="licensePlate"
                        type="text"
                        placeholder="ABC000"
                        autoComplete="licensePlate"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.licensePlate}
                    />
                </div>
                <div className="col-span-6 sm:col-span-6">
                    <label
                        htmlFor="observations"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Notas
                    </label>
                    <textarea
                        id="observations"
                        name="observations"
                        autoComplete="observations"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.observations}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductData;