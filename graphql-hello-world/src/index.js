const {ApolloServer,gql} = require('apollo-server')

const typeDefs = gql`
type Query {
  hello:String!
  # the '!' means that hello cannot be null
  # since string can be typecasted; even if we wrote an integer it would convert the int to string
  # but not all data-types can be type-casted
}
`;

const resolvers = {
  Query:{
    hello: ()=>'Hello World'
  }
}

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url}) => console.log(`server started at ${url}`));


