import React, { useEffect } from 'react';
import { Platform, Text, View, Button, Alert,  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../routes/Home'
import MapScreen from '../../routes/Map';
import BulletinBoardScreen from '../../routes/BulletinBoard';
import SearchScreen from '../../routes/Search';
import ReportNavigator  from './ReportNavigator';


const Tab = createBottomTabNavigator();

const HomeNavigator = ({route}) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          
          } else if (route.name === 'Report') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';

          } else if (route.name === 'Search') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          else if (route.name === 'Map') {
            iconName = focused
              ? 'map'
              : 'map-outline';
          
          } else if (route.name === 'BulletinBoard') {
            iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          }
          size=24
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      

      tabBarOptions={{
        activeTintColor: '#1478FF',
        inactiveTintColor: 'gray',
      }}>

        <Tab.Screen
          name="Home" component={HomeScreen} 
          options={{
            title:""
          }}
        />
        <Tab.Screen name="Report" component={ReportNavigator} 
        options={{
          title:""
        }}/>
        <Tab.Screen name="Search" component={SearchScreen}options={{
            title:""
          }} />
        <Tab.Screen name="Map" component={MapScreen} options={{
            title:""
          }}/>
        <Tab.Screen name="BulletinBoard" component={BulletinBoardScreen} options={{
            title:""
          }}/>
    </Tab.Navigator>
  )
}

const screenIconOption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})


export default HomeNavigator;
