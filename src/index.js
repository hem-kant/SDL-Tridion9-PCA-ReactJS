import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
 import { withClientState } from 'apollo-link-state';

const httpLink = {
  uri: 'http://localhost:8081/cd/api' 
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(<ApolloProvider client={client}><Main/></ApolloProvider>, document.getElementById('root'));