
import { GraphQLInt, GraphQLString } from "graphql";
import { ProductType } from "../typeDefs/Product.js";

export const CREATE_PRODUCT = {
    type: ProductType,
    arg: {
        idProduct: { type: GraphQLInt },
        product: { type: GraphQLString },
        idCategory: { type: GraphQLInt },
    },
};