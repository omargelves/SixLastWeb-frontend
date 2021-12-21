import React from 'react';
import ReactDOM from 'react-dom';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import Proyectos from './components/Proyectos';
import CrearProyecto from './components/CrearProyecto';
import ActivarUsuario from './components/ListaUsuarios';
import ListaUsuarios from './components/Usuarios';
import CrearUsuario from './components/CrearUsuario';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuPrincipal from './components/Menu';
import Login from './components/Autenticar';
import EditarProyecto from './components/EditarProyecto';

//const httpLink = new HttpLink({ uri: 'http://localhost:9092/graphql' });
const httpLink = new HttpLink({ uri: 'https://obscure-ocean-12386.herokuapp.com' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



const inicio = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={MenuPrincipal} />
        <Route exact path="/usuario" component={ActivarUsuario} />
        <Route exact path="/usuarios" component={ListaUsuarios} />
        <Route exact path="/proyecto" component={CrearProyecto} />
        <Route exact path="/usuario/crear" component={CrearUsuario} />
        <Route exact path="/proyecto/listar" component={Proyectos} />
        <Route exact path="/proyecto/:idProyecto" component={EditarProyecto} />
      </Switch>  
      
    </BrowserRouter > 
  </ApolloProvider>, inicio)
    