"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_graphql_1 = __importDefault(require("./schema.graphql"));
const schema_1 = require("@graphql-tools/schema");
const rndProds = [
    { name: 'some fucking product 1', price: 49 },
    { name: 'some fucking product 2', price: 59 },
    { name: 'some fucking product 3', price: 69 }
];
const resolvers = {
    Query: {
        products: () => {
            return rndProds;
        }
    }
};
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: schema_graphql_1.default,
    resolvers
});
