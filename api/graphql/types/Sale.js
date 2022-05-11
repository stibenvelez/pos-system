import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLScalarType,
} from "graphql";
import { saleDetailByIdSale } from "../../components/salesDetails/salesDetailsServices.js";
import { SaleDetailType } from "./SaleDetail.js";
export const SaleType = new GraphQLObjectType({
    name: "Sale",
    fields: () => ({
        id: { type: GraphQLInt },
        idClient: { type: GraphQLInt },
        idStateSale: { type: GraphQLInt },
        document: { type: GraphQLInt },
        totalPrice: { type: GraphQLInt },
        observations: { type: GraphQLString },
    }),
});
