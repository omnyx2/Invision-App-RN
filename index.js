/**
 * @format
 */
import React from 'react';
import { AppRegistry }  from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './src/components/App';
import client from './src/apollo';
import {name as appName} from './app.json';

const NavigatedApp = () => {
  return (
      <NavigationContainer>
        <App />
      </NavigationContainer>
  )
}

const InvisionApp = () => (
  <>
    <ApolloProvider client={client}>
      <NavigatedApp />
    </ApolloProvider>
  </>
);

AppRegistry.registerComponent(appName, () => InvisionApp);
