/**
 * @format
 */
import React from 'react';
import { AppRegistry }  from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './src/components/App';
import client from './src/apollo';
import {name as appName} from './app.json';

const InvisionApp = () => (
  <>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>
);

AppRegistry.registerComponent(appName, () => InvisionApp);
