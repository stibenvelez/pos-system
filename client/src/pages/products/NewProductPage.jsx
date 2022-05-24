import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import FormNewProduct from "../../components/products/FormNewProduct";
import Template from "../../components/ui/Template";

let socket;

const NewProductPage = () => {

    useEffect(() => {
        socket = io(import.meta.env.VITE_BACKEND_URL);
    }), [];

    const product = useSelector(({ products }) => products.product);
    

    return (
        <Template
            title={"Nuevo Producto"}
            description={"Agregue aquí un nuevo producto"}
        >
            <div>
                <FormNewProduct />
            </div>
        </Template>
    );
};
 
export default NewProductPage;
