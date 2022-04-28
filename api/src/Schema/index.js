import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./queries/Product.js";
import { CREATE_PRODUCT } from "./mutations/Product.js";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    },
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createProduct: CREATE_PRODUCT,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    Mutation: Mutation,
});
