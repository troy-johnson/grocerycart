import ApolloClient, { HttpLink } from 'apollo-client-preset'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cj9bk4r6t46zb0132eivhazp5'
  }),
});

export {
  client,
}