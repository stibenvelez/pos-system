import React, { useEffect, useState } from "react";
import ClientData from "./ClientData";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SaleDetail from "./SaleDetail";
import ProductData from "./ProductData";
import { useFormik, validateYupSchema } from "formik";
 import Card from "../../ui/Card/Card";
import { toast } from "react-toastify";
 
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToSaleDetailAction,
    readDataNewSaleAction,
    RegisterOneNewSaleAction,
} from "../../../actions/saleActions";
import NewSaleSchema from "./validate";


const initialStateNewProduct = {
    category: "",
    product: "",
    productName: "",
    quantity: 1,
    unitPrice: "",
    totalPrice: "",
};

const FormNewSale = () => {
    const dispatch = useDispatch();
    const [sale, setSale] = useState({
        date: "2022-04-24",
        documentType: 1,
        document: "",
    });
    const [newProduct, setNewProduct] = useState(initialStateNewProduct);
    const [fullSalePrice, setFulSalePrice] = useState(0);
    const [productsFiltered, setproductsFiltered] = useState([]);

    const addProductToSailDetail = (newProduct) => {
        dispatch(addProductToSaleDetailAction(newProduct));
        setNewProduct(initialStateNewProduct);
    };

    const readDataNewSale = (DataNewSale) =>
        dispatch(readDataNewSaleAction(DataNewSale));

    const RegisterOneNewSale = (sale) =>
        dispatch(RegisterOneNewSaleAction(sale));

    const newSale = useSelector(({ sales }) => sales.newSale);

    useEffect(() => {
        const total = newSale.detail.reduce(
            (acc, value) => acc + value.totalPrice,
            0
        );
        setFulSalePrice(total);
    }, [newSale.detail]);

    const handleSale = (e) => {
        readDataNewSale({
            ...sale,
            [e.target.name]: e.target.value,
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

    const addProductToDetail = () => {
        const id = uuid();
        newProduct.id = id;
        newProduct.totalPrice = newProduct.quantity * newProduct.unitPrice;
        newProduct.productName = findProductName(newProduct.product);

        if (
            newProduct.category === "" ||
            newProduct.product === "" ||
            newProduct.quantity <= 0 ||
            newProduct.unitPrice <= 0
        ) {
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
        } else {
            addProductToSailDetail(newProduct);
        }
    };

   
    const handleSubmit = (e) => {

        e.preventDefault();

        //RegisterOneNewSale(newSale);

    }

    return (
        <div className="" onSubmit={handleSubmit}>
            <form>
                <div className="p-4 bg-white rounded-md shadow">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor="date"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Fecha*
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                autoComplete="given-name"
                                className="block px-2 py-1 border border-gray-200 rounded-md "
                                onChange={handleSale}
                                value={sale.date}
                            />
                        </div>
                    </div>
                    <ClientData handleSale={handleSale} newSale={newSale} />
                    <ProductData
                        newProduct={newProduct}
                        setNewProduct={setNewProduct}
                        productsFiltered={productsFiltered}
                        setproductsFiltered={setproductsFiltered}
                    />
                </div>
                <div className="flex justify-center py-2 ">
                    <button
                        type="button"
                        className="block w-12 h-12 p-3 text-white rounded-full shadow-md cursor-pointer bg-emerald-500 hover:bg-emerald-300"
                        onClick={addProductToDetail}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                {newSale.detail.length !== 0 && (
                    <div>
                        <SaleDetail fullSalePrice={fullSalePrice} />
                        <Card className="mt-4">
                            <div className="">
                                <input
                                    className="inline-block px-4 py-2 text-white rounded-md cursor-pointer bg-slate-700 hover:bg-slate-600"
                                    type="submit"
                                    value="Registrar venta"
                                />
                            </div>
                        </Card>
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormNewSale;
