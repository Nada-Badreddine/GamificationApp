import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from "./context/userContext";
import 'antd/dist/antd.css';

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => alert(`graphql error ${message}`));
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:1337/graphql' }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

// const params = {
//   link: ApolloLink.from([
//     setContext((_, { headers }) => {
//       const token = localStorage.getItem('TOKEN');

//       return {
//         headers: {
//           ...headers,
//           authorization: `Bearer ${token}`,
//         },
//       };
//     }),
//     new HttpLink({
//       uri: 'http://localhost:1337/graphql',

//     }),
//   ]),
//   cache: new InMemoryCache(),
// };

// const client = new ApolloClient(params);

function App() {
  return (
    <ApolloProvider client={client}>
          <UserProvider >

      <AppRoutes />
      </UserProvider>

    </ApolloProvider>
  );
}

export default App;
