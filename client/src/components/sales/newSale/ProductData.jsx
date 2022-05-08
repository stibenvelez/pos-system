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
    const dispatch = useDispatch();
    const [productCategories, setProductCategories] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [productSeleted, setProductSeleted] = useState(null);

    const products = useSelector(({ products }) => products.products);
    const errorsNewProduct = useSelector(({ sales }) => sales.errorsNewProduct);

    const productRef = useRef(null);

    const productId = productRef.current?.value;
    console.log(productId);
    useEffect(() => {
        if (productId) {
            const getProductById = async () => {
                const res = await clienteAxios(`/products/${productId}`);
                setProductSeleted(res.data[0]);
            };
            getProductById();
        }
    }, [productId]);
    console.log(productSeleted);

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
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
            commissionValue:
                ((newProduct.unitPrice * productSeleted?.commissionPercentage) /
                    100) *
                newProduct.quantity,
            commissionPercentage: productSeleted?.commissionPercentage
        });
    };

    return (
        <div className="mt-3">
            <h3 className="text-gray-700 my-2  font-semibold">
                Datos del producto
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            <p className="text-red-600 text-sm p-1">
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
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
                                    {product.product} {product.idProduct}
                                </option>
                            ))}
                    </select>
                    {errorsNewProduct.product && newProduct.product == "" && (
                        <div>
                            <p className="text-red-600 text-sm p-1">
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        onBlur={handleProduct}
                        value={newProduct.quantity}
                    />
                    {errorsNewProduct.quantity && newProduct.quantity == "" && (
                        <div>
                            <p className="text-red-600 text-sm p-1">
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        onBlur={handleProduct}
                        value={newProduct.unitPrice}
                    />
                    {errorsNewProduct.unitPrice && newProduct.unitPrice == "" && (
                        <div>
                            <p className="text-red-600 text-sm p-1">
                                {errorsNewProduct.unitPrice}
                            </p>
                        </div>
                    )}
                </div>

                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Trabajador
                    </label>
                    <select
                        id="employe"
                        name="employe"
                        autoComplete="product"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-200"
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
                            <p className="text-red-600 text-sm p-1">
                                {errorsNewProduct.employe}
                            </p>
                        </div>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="licensePlate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Placa
                    </label>
                    <input
                        id="licensePlate"
                        name="licensePlate"
                        type="text"
                        placeholder="ABC000"
                        autoComplete="licensePlate"
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.licensePlate}
                    />
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="licensePlate"
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.commissionValue}
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-200bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleProduct}
                        value={newProduct.observations}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductData;
