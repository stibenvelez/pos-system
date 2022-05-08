import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import clienteAxios from "../../config/axios";
import { useFormik } from "formik";
import ProductSchema from "./utilities/validateFormProduct";
import { useNavigate } from "react-router-dom";

const FormNewProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [productCategories, setProductCategories] = useState([]);
    useEffect(() => {
        const getProductCategories = async () => {
            const res = await clienteAxios("/product-categories");
            setProductCategories(res.data);
        };
        getProductCategories();
    }, []);

    const formik = useFormik({
        initialValues: {
            product: "",
            brand: "",
            category: "",
            commissionPercentage: "",
            commissionValue: "",
            unitCost: "",
            unitPrice: "",
        },
        validationSchema: ProductSchema,
        onSubmit: (values) => {

            console.log("registrando productos");
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1  gap-4 ">
                    <div className="p-4 bg-white rounded-md shadow flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Producto
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="product"
                                        name="product"
                                        type="text"
                                        placeholder="Ejemplo: Pasacinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.product}
                                    />

                                    {formik.errors.product && (
                                        <div>
                                            <p className="text-red-600 text-sm p-1">
                                                {formik.errors.product}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Categoria
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        autoComplete="category"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.category}
                                    >
                                        <option hidden value="">
                                            --selecionar --
                                        </option>
                                        {productCategories.map((category) => (
                                            <option
                                                key={category.idProductCategory}
                                                value={
                                                    category.idProductCategory
                                                }
                                            >
                                                {category.category}
                                            </option>
                                        ))}
                                    </select>
                                    {formik.errors.category && (
                                        <div>
                                            <p className="text-red-600 text-sm p-1">
                                                {formik.errors.category}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Marca
                                    </label>
                                    <input
                                        id="brand"
                                        name="brand"
                                        type="text"
                                        placeholder="Pionneer, Bose, Focal, Kenwood"
                                        autoComplete="quantity"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.brand}
                                    />

                                    {/* {errorsNewProduct.quantity &&
                              newProduct.quantity == "" && (
                                  <div>
                                      <p className="text-red-600 text-sm p-1">
                                          {errorsNewProduct.quantity}
                                      </p>
                                  </div>
                              )} */}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                <div className=" ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Precio de venta
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="unitPrice"
                                        name="unitPrice"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.unitPrice}
                                    />

                                    {formik.errors.unitPrice && (
                                        <div>
                                            <p className="text-red-600 text-sm p-1">
                                                {formik.errors.unitPrice}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className=" ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Costo unitario
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="unitCost"
                                        name="unitCost"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.unitCost}
                                    />

                                    {/* {errorsNewProduct.quantity &&
                              newProduct.quantity == "" && (
                                  <div>
                                      <p className="text-red-600 text-sm p-1">
                                          {errorsNewProduct.quantity}
                                      </p>
                                  </div>
                              )} */}
                                </div>
                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        % comisión
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="commissionPercentage"
                                        name="commissionPercentage"
                                        type="text"
                                        placeholder="% 000"
                                        autoComplete="quantity"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={
                                            formik.values.commissionPercentage
                                        }
                                    />

                                    {/* {errorsNewProduct.quantity &&
                              newProduct.quantity == "" && (
                                  <div>
                                      <p className="text-red-600 text-sm p-1">
                                          {errorsNewProduct.quantity}
                                      </p>
                                  </div>
                              )} */}
                                </div>
                                <div className=" ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Valor de comision
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id="commissionValue"
                                        name="commissionValue"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.commissionValue}
                                    />

                                    {/* {errorsNewProduct.quantity &&
                              newProduct.quantity == "" && (
                                  <div>
                                      <p className="text-red-600 text-sm p-1">
                                          {errorsNewProduct.quantity}
                                      </p>
                                  </div>
                              )} */}
                                </div>
                            </div>
                            <div>
                                <div className="">
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
                                        onChange={formik.handleChange}
                                        value={formik.values.observations}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input
                                className="bg-slate-800 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-slate-700"
                                type="submit"
                                value="Agregar"
                            />
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-gray-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-300"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormNewProduct;
