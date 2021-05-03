/**
 * @format
 */
import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import messaging from '@react-native-firebase/messaging';

import App from './src/components/App';
import client from './src/apollo';
import {name as appName} from './app.json';

const NavigatedApp = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
// GraphQL 통신을 위한 ApolloProvier 제공
const InvisionApp = () => (
  <>
    <ApolloProvider client={client}>
      <NavigatedApp />
    </ApolloProvider>
  </>
);

// 푸쉬알림을 위한 설정
const RegistBackgroundHandler = () => {
  if (Platform.OS !== 'ios') {
    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }
  if (Platform.OS === 'ios') {
    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }
};
RegistBackgroundHandler();

AppRegistry.registerComponent(appName, () => InvisionApp);
