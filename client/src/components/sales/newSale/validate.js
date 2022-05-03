import * as Yup from "yup";

const NewSaleSchema = Yup.object({
    document: Yup.string().required("Required") 
});

export default NewSaleSchema;