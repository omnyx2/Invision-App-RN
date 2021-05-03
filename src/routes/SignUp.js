import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, Text, View, Button, Alert, TouchableOpacity, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const SignUpNavigator = () => {
  return(
    <SafeAreaView>
      <View>
	  <Text>아직 제휴 병원에서 등록하지 않으셨네요? 먼저 병원에 가서 제휴 병원에 가서 등록하시는게 좋을꺼 같아요</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpNavigator


