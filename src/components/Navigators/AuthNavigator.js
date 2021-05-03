import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, Text, View, Button, Alert, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// for main navigation
import ForgotPwdScreen from '../../routes/ForgotPwd';
import SignUpScreen from '../../routes/SignUp';
import SignInScreen from '../../routes/SignIn';


const Stack = createStackNavigator();

const SignInNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} 
          
        />
        <Stack.Screen name="ForgotPwd" component={ForgotPwdScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  )
}

export default SignInNavigator