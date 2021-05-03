import React, { useEffect } from 'react';
import { Platform, Text, View, Button, Alert,  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import messaging from '@react-native-firebase/messaging';
import MainNavigator from './Navigators/MainNavigator'
import { AuthProvider } from '../reducers/AuthReducer';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const PushingMessage = () => {
  if( Platform.OS !== 'ios' ) {
    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });

      return unsubscribe;
    }, []);
  } else {
    requestUserPermission()
  }
}


const App = () => {
  PushingMessage()
  return (
  <>
    <AuthProvider >
      <MainNavigator />
    </AuthProvider>
  </>
  );
};

export default App;
