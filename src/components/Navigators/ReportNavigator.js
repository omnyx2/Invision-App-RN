import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, Text, View, Button, Alert, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthState } from '../../reducers/AuthReducer'



import ReportTopTabScreen from '../../routes/ReportTopTab'
import ReportImageScreen from '../../routes/ReportImage'
import ReportScreen from '../../routes/Report'
const Stack = createStackNavigator();

export default function MainNavigator() {
  const context = useAuthState();    
  const isSignIn = context.isSignIn
    
	return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: true
      }}
      >
      <Stack.Screen 
        name="ReportTopTabScreen" 
        component={ReportTopTabScreen}
        options={{title:"나의 치아 관리 매니저"}}
      />
      <Stack.Screen 
        name="ReportScreen" 
        component={ReportScreen}
        options={{title:"나의 치아 보고서"}}
      />
      <Stack.Screen 
        name="ReportImageScreen" 
        component={ReportImageScreen}
        options={{title:"치아 검진하기"}}
      />

    </Stack.Navigator>
  );
}


// export const ReportNavigator = () => {
//   return (
//     <>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: true
//         }}
//       >
//         <Stack.Screen name="ToothManagement" component={ToothManagementScreen }/>
//         <Stack.Screen name="Report" component={ReportScreen} />
//         <Stack.Screen name="ReportHistory" component={ReportHistoryScreen} />
//       </Stack.Navigator>
//     </>
//   )
// }