import { useEffect, useRef, useState } from "react";
import clienteAxios from "../../../config/axios";

// Redux
import { useDispatch, useSelector } from "react-redux";

const ProductData = ({
    newProduct,
    setNewProduct,
    productsFiltered,
    setproductsFiltered,
}) => {
    const [productCategories, setProductCategories] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [productSeleted, setProductSeleted] = useState(null);

    const products = useSelector(({ products }) => products.products);
    const errorsNewProduct = useSelector(({ sales }) => sales.errorsNewProduct);

    const productRef = useRef(null);
    const quantityRef = useRef(0);

    const productId = productRef.current?.value;

    useEffect(() => {
        if (productId) {
            const getProductById = async () => {
                const res = await clienteAxios(`/products/${productId}`);
                setProductSeleted(res.data[0]);
            };
            getProductById();
        }
    }, [productId]);

    useEffect(() => {
        const getProductCategories = async () => {
            const res = await clienteAxios("/employees");
            setEmployees(res.data);
        };
        getProductCategories();
    }, []);

    useEffect(() => {
        const getAllEmployees = async () => {
            const res = await clienteAxios("/product-categories");
            setProductCategories(res.data);
        };
        getAllEmployees();
    }, []);

    useEffect(() => {
        const filterPrductByCategorySelected = async () => {
            const idCategorySelected = parseInt(newProduct.category);
            const filterByCategory = (product) => {
                return product.idProductCategory === idCategorySelected;
            };
            const result = await products.filter(filterByCategory);
            setproductsFiltered(result);
        };
        filterPrductByCategorySelected();
    }, [newProduct]);

    const handleProduct = (e) => {
        let commissionPercentage = productSeleted?.commissionPercentage | 0;
        
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
            commissionValue:
                ((newProduct.unitPrice * commissionPercentage) / 100) *
                parseInt(newProduct.quantity),
            commissionPercentage: productSeleted?.commissionPercentage
        });
    };

    

    return (
        <div className="">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
                Datos del producto:
            </h3>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Categoria<span className="text-red-600">*</span>
                    </label>
                    <select
                        id="category"
                        name="category"
                        autoComplete="category"
                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        onBlur={handleProduct}
                        value={newProduct.category}
                    >
                        <option hidden value="">
                            --selecionar --
                        </option>
                        {productCategories.map((category) => (
                            <option
                                key={category.idProductCategory}
                                value={category.idProductCategory}
                            >
                                {category.category}
                            </option>
                        ))}
                    </select>
                    {errorsNewProduct.category && newProduct.category == "" && (
                        <div>
                            <p className="p-1 text-sm text-red-600">
                                {errorsNewProduct.category}
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Producto<span className="text-red-600">*</span>
                    </label>
                    <select
                        id="product"
                        name="product"
                        autoComplete="product"
                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
                        onChange={handleProduct}
                        onBlur={handleProduct}
                        disabled={newProduct.category === ""}
                        value={newProduct.product}
                        ref={productRef}
                    >
                        <option hidden value="">
                            --selecionar --
                        </option>
                        {productsFiltered.length !== 0 &&
                            productsFiltered.map((product) => (
                                <option
                                    key={product.idProduct}
                                    value={product.idProduct}
                                >
                                    {product.product}
                                </option>
                            ))}
                    </select>
                    {errorsNewProduct.product && newProduct.product == "" && (
                        <div>
                            <p className="p-1 text-sm text-red-600">
                                {errorsNewProduct.product}
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Cantidad<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        autoComplete="quantity"
                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        onBlur={handleProduct}
                        value={newProduct.quantity}
                        ref={quantityRef}
                    />
                    {errorsNewProduct.quantity && newProduct.quantity == "" && (
                        <div>
                            <p className="p-1 text-sm text-red-600">
                                {errorsNewProduct.quantity}
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="unitPrice"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Precio por unidad<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="unitPrice"
                        name="unitPrice"
                        type="number"
                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        onBlur={handleProduct}
                        value={newProduct.unitPrice}
                    />
                    {errorsNewProduct.unitPrice && newProduct.unitPrice == "" && (
                        <div>
                            <p className="p-1 text-sm text-red-600">
                                {errorsNewProduct.unitPrice}
                            </p>
                        </div>
                    )}
                </div>

                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="employe"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Trabajador
                    </label>
                    <select
                        id="employe"
                        name="employe"
                        autoComplete="product"
                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
                        onChange={handleProduct}
                        value={newProduct.employe}
                    >
                        <option value="">ninguno</option>
                        {employees.map((employe) => (
                            <option
                                key={employe.idEmploye}
                                value={employe.idEmploye}
                                data-commission={20}
                            >
                                {employe.name}
                            </option>
                        ))}
                    </select>
                    {errorsNewProduct.employe && newProduct.employe === "" && (
                        <div>
                            <p className="p-1 text-sm text-red-600">
                                {errorsNewProduct.employe}
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="commissionValue"
                        className="block text-sm font-medium text-gray-700"
                    >
                        comision
                    </label>
                    <input
                        id="commissionValue"
                        name="commissionValue"
                        type="text"
                        placeholder="ABC000"
                        autoComplete="licensePlate"
                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.commissionValue}
                    />
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="discount"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Descuento por unidad
                    </label>
                    <input
                        id="UnitDiscount"
                        name="UnitDiscount"
                        type="number"
                        placeholder="ABC000"
                        autoComplete="UnitDiscount"
                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.UnitDiscount}
                    />
                </div>

                <div className="col-span-6 sm:col-span-6">
                    <label
                        htmlFor="observations"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Notas
                    </label>
                    <textarea
                        id="observations"
                        name="observations"
                        autoComplete="observations"
                        className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.observations}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductData;
