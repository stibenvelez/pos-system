import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../../config/axios";
import { useFormik } from "formik";
import ProductSchema from "./utilities/validateFormProduct";
import { useNavigate, useParams } from "react-router-dom";
import { addNewProductAction, editProductByIdAction } from "../../actions/productsActions";
import Spinner from "../ui/Spinners/Spinner";
import Card from "../ui/Card/Card";

const FormNewProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        const getProductCategories = async () => {
            const res = await clienteAxios("/product-categories");
            setProductCategories(res.data);
        };
        getProductCategories();
    }, []);


    const product = useSelector(({ products }) => products.product);
    const loading = useSelector(({ products }) => products.loading);

    const initialValues = {
        product: "",
        brand: "",
        idProductCategory: "",
        commissionPercentage: 0,
        commissionValue: 0,
        unitCost: 0,
        unitPrice: 0,
        observations:""
    };

    const formik = useFormik({
        initialValues: product && id ? product : initialValues,
        validationSchema: ProductSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            actionSubmit(values);
        },
    });

    const actionSubmit = (values) => {
        
        if (product) {
           
            dispatch(editProductByIdAction(values));
            return;
        }
        dispatch(addNewProductAction(values))
    };

    if (loading) return (
        <Card className="flex justify-center h-72 items-center">
            <Spinner />
        </Card>
    );


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                                        autoComplete="product"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.product}
                                    />

                                    {formik.errors.product && (
                                        <div>
                                            <p className="p-1 text-sm text-red-600">
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
                                        id="idProductCategory"
                                        name="idProductCategory"
                                        autoComplete="idProductCategory"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.idProductCategory}
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
                                    {formik.errors.idProductCategory && (
                                        <div>
                                            <p className="p-1 text-sm text-red-600">
                                                {
                                                    formik.errors
                                                        .idProductCategory
                                                }
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
                                        autoComplete="brand"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.brand}
                                    />

                                    {formik.errors.brand &&
                                        formik.values.brand == "" && (
                                            <div>
                                                <p className="p-1 text-sm text-red-600">
                                                    {formik.errors.brand}
                                                </p>
                                            </div>
                                        )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                                <div className="">
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
                                        autoComplete="unitPrice"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.unitPrice}
                                    />

                                    {formik.errors.unitPrice && (
                                        <div>
                                            <p className="p-1 text-sm text-red-600">
                                                {formik.errors.unitPrice}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="unitCost"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Costo unitario
                                    </label>
                                    <input
                                        id="unitCost"
                                        name="unitCost"
                                        type="text"
                                        placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                        autoComplete="quantity"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.unitCost}
                                    />
                                    {formik.errors.unitCost && (
                                        <div>
                                            <p className="p-1 text-sm text-red-600">
                                                {formik.values.unitCost}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        % comisión
                                    </label>
                                    <input
                                        id="commissionPercentage"
                                        name="commissionPercentage"
                                        type="text"
                                        placeholder="% 000"
                                        autoComplete="commissionPercentage"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={
                                            formik.values.commissionPercentage
                                        }
                                    />

                                    {/* {errorsNewProduct.quantity &&
                              newProduct.quantity == "" && (
                                  <div>
                                      <p className="p-1 text-sm text-red-600">
                                          {errorsNewProduct.quantity}
                                      </p>
                                  </div>
                              )} */}
                                </div>
                                <div className="">
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
                                        autoComplete="commissionValue"
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.commissionValue}
                                    />

                                    {/* {errorsNewProduct.quantity &&
                              newProduct.quantity == "" && (
                                  <div>
                                      <p className="p-1 text-sm text-red-600">
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
                                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={formik.handleChange}
                                        value={formik.values.observations}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="px-4 py-2 text-white rounded-md cursor-pointer bg-slate-800 hover:bg-slate-700"
                                type="submit"
                            >
                                Agregar
                            </button>
                            <input
                                type="button"
                                onClick={() => navigate(-1)}
                                className="px-4 py-2 block text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-300"
                                value="Cancelar"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormNewProduct;
