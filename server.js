const { gql, ApolloServer } = require('apollo-server');
const typeDefs = gql`
    type Query {
        greeting:String
    }
`;

const resolvers = {
    Query: {
        greeting () {
            return 'Hello Gql world';
        }
    }
}
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
}).catch(err => {
    console.log(err)
});
