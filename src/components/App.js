import React, { useEffect } from 'react';
import { Platform, Text, View, Button, Alert,  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';

import HomeScreen from '../routes/Home';
import LoginScreen from '../routes/Login';
import MapScreen from '../routes/Map';
import ChattingScreen from '../routes/Chatting';
import ScheduleScreen from '../routes/Schedule';
import SearchScreen from '../routes/Search';
const Stack = createStackNavigator();

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
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

const MenuList = ({ navigation, name }) => {
  console.log(this.props)
  return  (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{name} Screen</Text>
        <Button
          title= { "Go to " + name }
          onPress={() => navigation.navigate(`${ name }`)}
        />
      </View>   
  )
}

const Root = ({navigation})=> {
  return (
    <>
      <MenuList name="Home" navigation={ navigation }/>
      <MenuList name="Login" navigation={ navigation }/>
      <MenuList name="Search" navigation={ navigation }/>
      <MenuList name="Map" navigation={ navigation }/>
      <MenuList name="Chatting" navigation={ navigation }/>
      <MenuList name="Schedule" navigation={ navigation }/>
    </> 
  )
}


const App = () => {
  PushingMessage()
  return (

      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Chatting" component={ChattingScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator>
  );
};

export default App;
