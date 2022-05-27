import React from "react";
import { useSelector } from "react-redux";
import Card from "../ui/Card/Card";

const FormNewEgress = () => {
    const egressesCategories = useSelector(
        ({ egresses }) => egresses.egressesCategories
    );
    
    return (
        <Card>
            <div>
                <form>
                    <div className="flex flex-col gap-4">
                        <div className="form-group flex flex-col">
                            <label htmlFor="date">Fecha</label>
                            <input
                                type="date"
                                className="lg:w-1/4  px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="date"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="form-group w-full">
                                <label htmlFor="category">Proveedor</label>
                                <select
                                    className="block px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="category"
                                >
                                    <option value="1">Ninguno</option>
                                    <option value="1">Costos</option>
                                    <option value="2">Gastos</option>
                                    <option value="3">otros</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="form-group w-full">
                                <label htmlFor="category">Categoría</label>
                                <select
                                    className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="category"
                                >
                                    <option hidden value="">
                                        Seleccione una categoría
                                    </option>
                                    {egressesCategories &&
                                        egressesCategories.map((category) => (
                                            <option
                                                key={category.idEgressCategory}
                                                value={
                                                    category.idEgressCategory
                                                }
                                            >
                                                {category.egressCategory}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="subcategory">
                                    Subcategoría
                                </label>
                                <select
                                    className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="subcategory"
                                >
                                    <option hidden value="">
                                        Seleccione una subcategoría
                                    </option>
                                    <option value="1">Alimentación</option>
                                    <option value="2">Transporte</option>
                                    <option value="3">Compras</option>
                                    <option value="4">Otros</option>
                                </select>
                            </div>
                            <div className="form-group w-full">
                                <label htmlFor="value">Valor</label>
                                <input
                                    className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="value"
                                    type={"number"}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description">Descripción</label>
                            <input
                                type="text"
                                className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="description"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default FormNewEgress;
