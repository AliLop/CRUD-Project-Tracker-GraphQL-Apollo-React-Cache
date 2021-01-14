import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider } from '@apollo/react-hooks'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import client from './client';
import './index.css';

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('app'))
if (module.hot) {
  module.hot.accept()
}

