import express from "express";
import { graphqlHTTP } from "express-graphql";
const routes = express.Router();


import salesRoutes from '../components/sales/routes.js'
import salesDetailsRoutes from "../components/salesDetails/routes.js";
import productsRoutes from '../components/products/routes.js'
import productCategory from '../components/productCategory/routes.js'
import employeesRoutes from '../components/employes/routes.js'
import { schema } from "../graphql/index.js";

routes .use("/sales", salesRoutes);
routes .use("/sales-details", salesDetailsRoutes);
routes .use("/products", productsRoutes);
routes.use("/product-categories", productCategory);
routes.use("/employees", employeesRoutes);

routes.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

export default routes 