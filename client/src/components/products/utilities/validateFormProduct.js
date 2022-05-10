import * as Yup from "yup";
const ProductSchema = Yup.object().shape({
    product: Yup.string().required("Ingrese el nombre de un producto"),
    brand: Yup.string().nullable(),
    idProductCategory: Yup.string().required("Seleccione una categoria"),
    commissionPercentage: Yup.string(),
    commissionValue: Yup.string(),
});

export default ProductSchema;
