import React, { useEffect, useState } from "react";
import DataSale from "./DataSale";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SaleDetail from "./SaleDetail";
import ProductData from "./ProductData";

import Card from "../../ui/Card/Card";
import { toast } from "react-toastify";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToSaleDetailAction,
    RegisterOneNewSaleAction,
    validateErrorsNewProductAction,
} from "../../../actions/saleActions";
import validateAddProduct from "./utils/validateAddProduct";
import validateNewSale from "./utils/validateNewSale";
import { formatDate } from "../../../helpers/FormatDate";

const initialStateNewProduct = {
    category: "",
    product: "",
    productName: "",
    quantity: 1,
    unitPrice: "",
    totalPrice: "",
    employe: "",
    commissionValue: 0,
    commissionPercentage: 0,
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
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState(initialStateNewProduct);
    const [fullSalePrice, setFulSalePrice] = useState(0);
    const [productsFiltered, setproductsFiltered] = useState([]);
    const [errors, setErrors] = useState({});
    const [sale, setSale] = useState(INITIAL_SATATE_SALE);

    const addProductToSailDetail = (newProduct) => {
        dispatch(addProductToSaleDetailAction(newProduct));
        setNewProduct(initialStateNewProduct);
    };

    const validateErrorsNewProduct = (errors) => {
        dispatch(validateErrorsNewProductAction(errors));
    };

    const RegisterOneNewSale = (sale) =>
        dispatch(RegisterOneNewSaleAction(sale));

    const detail = useSelector(({ sales }) => sales.detail);
    const errorSubmit = useSelector(({ sales }) => sales.error);

    useEffect(() => {
        const total = detail.reduce(
            (acc, value) => acc + value.totalPrice,
            0
        );
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

    const findProductName = (idProduct) => {
        if (idProduct) {
            const result = productsFiltered.filter(
                (product) => product.idProduct === parseInt(idProduct)
            );
            return result[0].product;
        }
        return "";
    };

    const addProductToDetail = async () => {
        const id = uuid();
        newProduct.id = id;
        newProduct.totalPrice = newProduct.quantity * newProduct.unitPrice;
        newProduct.productName = findProductName(newProduct.product);

        const errors = validateAddProduct(newProduct);

        if (Object.keys(errors).length) {
            toast.error("Complete los campos obligatorios", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            validateErrorsNewProduct(errors);
            return;
        }
        addProductToSailDetail(newProduct);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSale = {
            dataSale: sale.dataSale,
            detail: detail
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

        // add totalSale
        newSale.dataSale.totalSale = newSale.detail.reduce(
            (acc, num) => acc + num.totalPrice,
            0
        );
        console.log(errors);

        RegisterOneNewSale(newSale);
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
                            productsFiltered={productsFiltered}
                            setproductsFiltered={setproductsFiltered}
                        />
                    </div>
                    <div className="flex justify-center ">
                        <button
                            type="button"
                            className="block w-12 h-12 p-3 text-white rounded-full shadow-md cursor-pointer bg-emerald-500 hover:bg-emerald-300"
                            onClick={addProductToDetail}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
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
