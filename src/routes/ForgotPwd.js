import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, SafeAreaView, Text, View, Button, Alert, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const ForgetPasswordScreen = () => {
  return(
    <>
      <SafeAreaView>
	      <Text>
          아이디가 기억나시지 않나요? 아이디는 본인의 연락처 입니다. 
        </Text>
      </SafeAreaView>
    </>
  )
}

export default ForgetPasswordScreen