import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { AnimationDoneContextProvider } from './components/context/AnimationDoneContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AnimationDoneContextProvider>
        <App />
      </AnimationDoneContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
