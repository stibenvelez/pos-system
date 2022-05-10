import * as Yup from "yup";
const ProductSchema = Yup.object().shape({
    product: Yup.string().required("Ingrese el nombre de un producto"),
    brand: Yup.string(),
    idProductCategory: Yup.string().required("Seleccione una categoria"),
    commissionPercentage: Yup.string(),
    commissionValue: Yup.string(),
    unitCost: Yup.string(),
    unitPrice: Yup.string(),
});

export default ProductSchema;
