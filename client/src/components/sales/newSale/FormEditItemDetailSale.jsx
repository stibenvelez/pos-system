import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCategoriesAction } from "../../../actions/productCategory.action";

const FormEditItemDetailSale = ({ product, handleSubmit }) => {
    const INITIAL_STATE = product;
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState(INITIAL_STATE);

    useEffect(() => {
        (() => {
            dispatch(getAllProductsCategoriesAction());
        })();
    }, []);

    const products = useSelector(({ products }) => products.products);
    const productsCategories = useSelector(
        ({ productsCategories }) => productsCategories.productsCategories
    );
    const handleChange = ({ target }) => {
        setNewProduct({
            ...newProduct,
            [target.name]: target.value,
        });
    };


    return (
        <div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                >
                    Categoria<span className="text-red-600">*</span>
                </label>
                <select
                    id="category"
                    name="category"
                    autoComplete="category"
                    className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    //onBlur={handleProduct}
                    value={newProduct.category}
                    //ref={categoryRef}
                >
                    <option hidden value="">
                        --selecionar --
                    </option>
                    {productsCategories.map((category) => (
                        <option
                            key={category.idProductCategory}
                            value={category.idProductCategory}
                        >
                            {category.category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-span-6 md:col-span-2">
                <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Producto<span className="text-red-600">*</span>
                </label>
                <select
                    id="product"
                    name="product"
                    autoComplete="product"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
                    value={newProduct.product}
                    onChange={handleChange}
                >
                    <option value="">--selecionar --</option>
                    {products
                        .filter(
                            (product) =>
                                product.idProductCategory ===
                                parseInt(newProduct.category)
                        )
                        .map((product) => (
                            <option
                                key={product.idProduct}
                                value={product.idProduct}
                            >
                                {product.product}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
};

export default FormEditItemDetailSale;
