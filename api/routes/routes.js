import express from "express";
import { graphqlHTTP } from "express-graphql";
const routes = express.Router();


import productsRoutes from '../components/products/routes.js'
import productCategory from '../components/productCategory/routes.js'
import { schema } from "../src/Schema/index.js";

routes .use("/products", productsRoutes);
routes.use("/product-categories", productCategory);

routes.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

export default routes 