import { useEffect, useState } from "react";
import FormNewSale from "../../components/sales/newSale/FormNewSale";

// Axios
import { useDispatch } from "react-redux";
import { getAllProductsActions } from "../../actions/productsActions";

const NewSalePage = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        const getProducts = () => dispatch(getAllProductsActions());
        getProducts();
    }, []);

    return (
      
            <div className="container mx-auto ">
                <div className="pb-3">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Nueva venta
                    </h1>
                    <p className="text-gray-800">Registre una nueva venta</p>
                </div>
                <div>
                    <FormNewSale />
                </div>
            </div>
        
    );
};

export default NewSalePage;
