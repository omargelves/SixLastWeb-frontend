import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Proyectos from './components/Proyectos';
import CrearProyecto from './components/CrearProyecto';

//import gestionUsuario from './ components/tabla';

const client = new ApolloClient({
  uri: 'http://localhost:9092/graphql',
  cache: new InMemoryCache()
});



const inicio = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <Proyectos />
    <CrearProyecto />
    </ApolloProvider>, inicio)