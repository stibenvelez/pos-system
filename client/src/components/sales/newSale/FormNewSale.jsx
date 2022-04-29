import React, { useEffect, useState } from "react";
import ClientData from "./ClientData";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SaleDetail from "./SaleDetail";
import ProductData from "./ProductData";

// Redux
import { useDispatch } from "react-redux";
import { addProductToSailDetailAction } from "../../../actions/saleActions";

const initialStateNewProduct = {
    category: "",
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
    const [detailSale, setDetailSale] = useState([]);
    const [newProduct, setProduct] = useState(initialStateNewProduct);
    const [fullSalePrice, setFulSalePrice] = useState(0);

    const addProductToSailDetail = (newProduct) =>dispatch(addProductToSailDetailAction(newProduct))

    useEffect(() => {
        const total = detailSale.reduce(
            (acc, value) => acc + value.totalPrice,
            0
        );
        setFulSalePrice(total);
    }, [detailSale]);

    const handleSale = (e) => {
        setSale({
            ...sale,
            [e.target.name]: e.target.value,
        });
    };

    const handleProduct = (e) => {
        setProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const addProductToDetail = () => {
        const id = uuid();
        newProduct.id = id;
        newProduct.totalPrice = newProduct.quantity * newProduct.unitPrice;

        if (newProduct.category === "") {
            console.error("campos obligatorios vacios");
            return;
        }
        
        addProductToSailDetail(newProduct);

        setDetailSale([...detailSale, newProduct]);
        setProduct(initialStateNewProduct);
    };


    return (
        <div className="">
            <form>
                <div className="bg-white p-4 shadow rounded-md">
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
                                className="border border-gray-200 rounded-md px-2 py-1 block "
                                onChange={handleSale}
                                value={sale.date}
                            />
                        </div>
                    </div>
                    <ClientData handleSale={handleSale} sale={sale} />
                    <ProductData
                        handleProduct={handleProduct}
                        newProduct={newProduct}
                    />
                </div>
                <div className="py-2 flex justify-center ">
                    <button
                        type="button"
                        className="bg-emerald-500 text-white hover:bg-emerald-300 cursor-pointer rounded-full p-3 block w-12 h-12 shadow-md"
                        onClick={addProductToDetail}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                {detailSale.length !== 0 && (
                    <SaleDetail
                        detailSale={detailSale}
                        fullSalePrice={fullSalePrice}
                    />
                )}
            </form>
        </div>
    );
};

export default FormNewSale;
