import { interpolateRgbBasis } from 'd3-interpolate';
import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import HomeWarningSwriper from '../components/Home/HomeWarningSwiper'
import SSCD from '../SampleDB/SpecializedSubjectCardsData';
import Ionicons from 'react-native-vector-icons/Ionicons'


import colorPalette from '../colorPalette';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba( 0, 0, 0, 0.1)'
  },
  title: {
    flex: 1
  },
  date: {
    flex: 1,
    fontSize: 16,
  },
  button: {
  
    width: 30,
    height: 30,
    borderRadius: 15, 
    backgroundColor: colorPalette.lightBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    flex: 1,
    fontSize: 16,
    color: colorPalette.lightBlue
  }
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    date: '2021.02.01',
    toothScore: 95,
    gumScore: 70,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    date: '2021.02.02',
    toothScore: 90,
    gumScore: 70,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e21d72',
    date: '2021.02.03',
    toothScore: 85,
    gumScore: 70,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29ds2',
    date: '2021.02.04',
    toothScore: 80,
    gumScore: 70,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145471e29d72',
    date: '2021.02.05',
    toothScore: 80,
    gumScore: 75,
  },
];

const Item = ({ id, date, toothScore, gumScore, navigation }) => {
  const moveToReport = () => navigation.navigate('Report')

  return(
    <View style={styles.item}>
    <Text style={styles.title}>{date}</Text>
    <Text style={styles.score}>치아 {toothScore} 점</Text>
    <Text style={styles.score}>잇몸 {gumScore} 점</Text>
    <TouchableOpacity style={styles.button} onPress={ () => moveToReport()}>
      <Ionicons name='paper' size={24} color={colorPalette.white}/>
    </TouchableOpacity>
    
  </View>
  )};


const Search = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item 
    id={item.id} 
    date={item.date} 
    toothScore={item.toothScore} 
    gumScore={item.gumScore} 
    navigation={navigation}
    />
  );


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Search;
