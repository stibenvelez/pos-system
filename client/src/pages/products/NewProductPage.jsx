
import { useSelector } from "react-redux";
import FormNewProduct from "../../components/products/FormNewProduct";
import Template from "../../components/ui/Template";


const NewProductPage = () => {

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
