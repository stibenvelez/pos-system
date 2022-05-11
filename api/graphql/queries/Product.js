import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql'
import { allProducts } from '../../components/products/productService.js';
import { ProductType } from "../types/Product.js";

export const GET_ALL_USERS = {
    type: new GraphQLList(ProductType),
    args:{idProduct:{type: GraphQLInt}},
    resolve: async (parent, args) => {
        const [rows] = await allProducts();
        return rows;
    }
};

