import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';


export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLID },
        idProduct: { type: GraphQLInt },
        product: { type: GraphQLString },
        idCategory: { type: GraphQLInt },
    })

})