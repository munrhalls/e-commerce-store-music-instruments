"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const fastify_1 = __importDefault(require("fastify"));
const graphql_helix_1 = require("graphql-helix");
const schema_1 = require("./schema");
const server = (0, fastify_1.default)();
server.route({
    method: ['POST', 'GET'],
    url: '/graphql',
    handler: async (req, reply) => {
        const request = {
            headers: req.headers,
            method: req.method,
            query: req.query,
            body: req.body
        };
        if ((0, graphql_helix_1.shouldRenderGraphiQL)(request)) {
            await reply.header('Content-Type', 'text/html');
            await reply.send((0, graphql_helix_1.renderGraphiQL)({
                endpoint: '/graphql'
            }));
            return;
        }
        const { operationName, query, variables } = (0, graphql_helix_1.getGraphQLParameters)(request);
        const result = await (0, graphql_helix_1.processRequest)({
            request,
            schema: schema_1.schema,
            operationName,
            query,
            variables
        });
        await (0, graphql_helix_1.sendResult)(result, reply.raw);
    }
});
server.listen({ port: 8080 }, (err, address) => {
    if (err !== null) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
