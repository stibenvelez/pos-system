
import FormNewProduct from "../../components/products/FormNewProduct";


const NewProductPage = () => {
        return (
        <div className="container mx-auto">
            <div className="pb-3">
                <h1 className="text-3xl font-bold text-slate-800">
                    Nuevo Producto
                </h1>
                <p className="text-gray-800">Agregue aquí un nuevo producto</p>
            </div>
            <div>
                <FormNewProduct />
            </div>
        </div>
    );
};

export default NewProductPage;
