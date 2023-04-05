import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { BASE_URL } from "../utils/constant"

const link = new HttpLink({
  uri: BASE_URL,
  // headers: {
  //   access_token: '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>',
  // },
});

const client = new ApolloClient({
  link: from([link]),
  cache: new InMemoryCache(),
});

export { client };