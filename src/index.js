import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.css';

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/"
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
        <App />
    </Router>
  </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
