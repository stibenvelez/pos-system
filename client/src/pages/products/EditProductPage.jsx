import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByIdAction } from "../../actions/productsActions";
import FormNewProduct from "../../components/products/FormNewProduct";
import Template from "../../components/ui/Template";

const EditProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => dispatch(getProductByIdAction(id));
        id && getProduct();
    }, []);

    return (
        <Template
            title={"Editar Producto"}
            description={"Edite los datos del producto"}
            className="container mx-auto"
        >
            <div>
                <FormNewProduct />
            </div>
        </Template>
    );
};

export default EditProductPage;
