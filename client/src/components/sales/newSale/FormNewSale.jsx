import React, { useEffect, useState } from "react";
import DataSale from "./DataSale";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SaleDetail from "./SaleDetail";
import ProductData from "./ProductData";
import Card from "../../ui/Card/Card";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import validateNewSale from "./utils/validateNewSale";
import { formatDate } from "../../../helpers/FormatDate";
import {
    addProductToSaleDetailAction,
    RegisterOneNewSaleAction,
    validateErrorsNewProductAction,
} from "../../../actions/saleActions";
import { useNavigate } from "react-router-dom";
import addProductToDetail from "./utils/addProductToDetail";
import validateAddProduct from "./utils/validateAddProduct";

const initialStateNewProduct = {
    category: "",
    product: "",
    quantity: 1,
    unitPrice: 0,
    unitDiscount: 0,
    employe: "",
};

const INITIAL_SATATE_SALE = {
    dataSale: {
        date: formatDate(Date()),
        documentType: 1,
        document: "",
        payMethod: "",
    },
    detail: [],
};

const FormNewSale = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState(initialStateNewProduct);
    const [fullSalePrice, setFulSalePrice] = useState(0);
    const [productsFiltered, setproductsFiltered] = useState([]);
    const [errors, setErrors] = useState({});
    const [sale, setSale] = useState(INITIAL_SATATE_SALE);
    const [productSeleted, setProductSeleted] = useState(null);

    const addProductToSailDetail = (newProduct) => {
        dispatch(addProductToSaleDetailAction(newProduct));
        setNewProduct(initialStateNewProduct);
    };
    
    const RegisterOneNewSale = (sale) =>
        dispatch(RegisterOneNewSaleAction(sale));

    const detail = useSelector(({ sales }) => sales.detail);
    const errorSubmit = useSelector(({ sales }) => sales.error);
    const user = useSelector(({ auth }) => auth.user);
    const products = useSelector(({ products }) => products.products);

    useEffect(() => {
        const total = detail.reduce((acc, value) => acc + value.totalPrice, 0);
        setFulSalePrice(total);
    }, [detail]);

    const handleChange = (e) => {
        setSale({
            ...sale,
            dataSale: {
                ...sale.dataSale,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleAddProductToDetail = async (dataProduct) => {
        const { result, errors } = await addProductToDetail(dataProduct);
        dispatch(validateErrorsNewProductAction(errors));
        if (!errors) {addProductToSailDetail(result)};
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSale = {
            dataSale: sale.dataSale,
            detail: detail,
        };

        const errors = validateNewSale(newSale);

        if (Object.keys(errors).length) {
            setErrors(errors);
            toast.error("Complete los campos obligatorios", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        newSale.dataSale.registeredBy = user.idUser;
        RegisterOneNewSale(newSale);
        /*
        const error = await errorSubmit
        if (error) {
            toast.error("Error de conexion", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return; 
        }
        setSale(INITIAL_SATATE_SALE);
        */
    };

    return (
        <div className="" onSubmit={handleSubmit}>
            <form>
                <div className="flex flex-col gap-6">
                    <div className="p-4 bg-white rounded-md shadow">
                        <DataSale
                            handleChange={handleChange}
                            sale={sale}
                            errors={errors}
                        />
                    </div>
                    <div className="p-4 bg-white rounded-md shadow">
                        <ProductData
                            newProduct={newProduct}
                            setNewProduct={setNewProduct}
                            productSeleted={productSeleted}
                            setProductSeleted={setProductSeleted}
                        />
                    </div>
                    <div className="flex flex-col items-center ">
                        <button
                            type="button"
                            className="block w-12 h-12 p-3 text-white rounded-full shadow-md cursor-pointer bg-emerald-500 hover:bg-emerald-300"
                            onClick={() => handleAddProductToDetail(newProduct)}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <input
                            className="inline-block px-4 py-2 font-medium text-gray-500 transition duration-200 ease-in-out rounded-md cursor-pointer hover:text-blue-700"
                            type="button"
                            value="Cancelar"
                            onClick={() => navigate(-1)}
                        />
                    </div>
                    {detail.length !== 0 && (
                        <div>
                            <SaleDetail fullSalePrice={fullSalePrice} />
                            <Card className="mt-4">
                                <div className="flex gap-2">
                                    <input
                                        className="inline-block px-4 py-2 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-slate-600"
                                        type="submit"
                                        value="Registrar venta"
                                    />

                                    <input
                                        className="inline-block px-4 py-2 text-white bg-gray-400 rounded-md cursor-pointer hover:bg-gray-500"
                                        type="button"
                                        value="Cancelar"
                                        onClick={() => navigate(-1)}
                                    />
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default FormNewSale;
