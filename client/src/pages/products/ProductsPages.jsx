import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsActions } from "../../actions/productsActions";
import FilterOptions from "../../components/products/FilterOptions";
import ProductsList from "../../components/products/ProductsList";


const ProductsPages = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ sales }) => sales.filters);

    useEffect(() => {
        const getAllProducts = () => dispatch(getAllProductsActions());
        getAllProducts();
    }, []);
    return (
        <div>
            <div className="pb-3">
                <h1 className="text-3xl font-bold text-slate-800">Productos</h1>
                <p className="text-gray-800">
                    Administre aqui los productos de la empresa
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <FilterOptions />
                </div>
                <div>
                    <ProductsList />
                </div>
            </div>
        </div>
    );
};

export default ProductsPages;
