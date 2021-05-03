import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, Text, View, Button, Alert, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthState } from '../../reducers/AuthReducer'

import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'
import ChattingScreen from '../../routes/Chatting';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const context = useAuthState();    
  const isSignIn = context.isSignIn
    
	return (
    <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
      >
      {isSignIn ? (
        <>
          <Stack.Screen 
            name="Home" 
            component={HomeNavigator}
          />
          <Stack.Screen
            name="Chatting"
            component={ChattingScreen}
            option={{title: "chattin"}}
          />
        </>
      ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}