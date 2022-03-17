import{ ApolloClient ,ApolloLink, InMemoryCache, ApolloProvider, HttpLink, from, }from "@apollo/client";
import {onError} from "@apollo/client/link/error"
import React from 'react';
import AppRoutes from "./routes/AppRoutes";
import 'antd/dist/antd.css';
import { setContext } from '@apollo/client/link/context';




const errorLink =onError(({ graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({
      message,location,path}) =>{
alert(`graphql error ${message}`);})}})

const link= from([
  errorLink,
  new HttpLink({uri:"http://localhost:1337/graphql"}),
])
const client= new ApolloClient({
  cache: new InMemoryCache(),
  link:link,
}
)




{/*const params = {
	link: ApolloLink.from([
		setContext((_, { headers }) => {
			const token = localStorage.getItem("TOKEN");

			return {
				headers: {
					...headers,
					authorization: `Bearer ${token}`,
				},
			};
		}),
		new HttpLink({
			uri: 'http://localhost:1337/graphql',

		}),
	]),
  cache: new InMemoryCache(),
};*/}

//const client = new ApolloClient(params);


function App() {
  return (
    <ApolloProvider client={client}>
    <>
      <AppRoutes />
     
    </>
    </ApolloProvider>
  );
}

export default App;
