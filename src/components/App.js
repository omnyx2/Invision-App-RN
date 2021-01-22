import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../routes/Home';
import LoginScreen from '../routes/Login';
import MapScreen from '../routes/Map';
import ChattingScreen from '../routes/Chatting';
import ScheduleScreen from '../routes/Schedule';

const Stack = createStackNavigator();

const Root = ({navigation})=> {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
        <Button
          title="Go to Map"
          onPress={() => navigation.navigate('Map')}
        />
      </View>   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chatting Screen</Text>
        <Button
          title="Go to Chatting"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Schedule Screen</Text>
        <Button
          title="Go to Schedule"
          onPress={() => navigation.navigate('Schedule')}
        />
      </View>   
    </> 
  )
}


const App = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Chatting" component={ChattingScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator>
  );
};

export default App;
