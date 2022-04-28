import { GraphQLList } from 'graphql'
import { ProductType } from "../typeDefs/Product.js";

export const GET_ALL_USERS = {
    type: new GraphQLList(ProductType),
    resolver(parent, args ) {
        const { idProduct, product, idCategory } = args;
        return args;
    }
};

