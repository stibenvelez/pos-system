import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../ui/Spinners/Spinner";
import ItemProduct from "./ItemProduct";

const ProductsList = () => {
    const products = useSelector(({ products }) => products.products);
    const loading = useSelector(({ products }) => products.loading);
{
}
    if (loading) {
        return (
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"></table>
                <div className="w-full flex justify-center my-8">
                    <Spinner />
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="py-3 p-5 bg-amber-100 shadow-md border border-yellow-200 text-sm text-yellow-800">
                <p>No se encontraron resultados</p>
            </div>
        );
    }
    return (
        <div>
            <div className="relative overflow-auto  shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-50 uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoría
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Costo unitario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio de venta
                            </th>
                            <th scope="col" className="px-6 py-3">
                                % de comision
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {products.map((productData) => (
                            <ItemProduct
                                productData={productData}
                                key={productData.idProduct}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsList;
