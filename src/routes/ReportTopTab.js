import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, Text, View, Button, useWindowDimensions, SafeAreaView} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

// for main navigation
import ReportHistoryView from './ReportHistory';
import ToothManagementView from './ToothManagement';
import colorPalette from '../colorPalette';


const ReportTopTab = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '나의 치아 관리' },
    { key: 'second', title: '치아 관리 이력' },
  ]);
  
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <ToothManagementView navigation={navigation} />;
      case 'second':
        return <ReportHistoryView navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TabView
        navigation={navigation}
        navigationState={{ index, routes, navigation }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
      
  );
}


export default ReportTopTab;
