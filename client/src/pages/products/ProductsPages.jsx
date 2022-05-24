import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsActions } from "../../actions/productsActions";
import FilterOptions from "../../components/products/FilterOptions";
import ProductsList from "../../components/products/ProductsList";
import Template from "../../components/ui/Template";
import io from 'socket.io-client'

let socket;

const ProductsPages = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ products }) => products.filters);

    useEffect(() => {
        (() => dispatch(getAllProductsActions(filters)))(), [filters];
    });

    useEffect(() => {
        socket = io(import.meta.env.VITE_BACKEND_URL)
        socket.emit("products");
    }, [])
    
    
    useEffect(() => {
        socket.on("productDisabled", () => {
            console.log('generando nuevos productos');
        });
    })
    

    return (
        <Template
            title={"Productos"}
            description={"Administre aqui los productos de la empresa"}
        >
            <div className="flex flex-col gap-4">
                <div>
                    <FilterOptions />
                </div>

                <div className="grid grid-cols-1">
                    <ProductsList />
                </div>
            </div>
        </Template>
    );
};

export default ProductsPages;
