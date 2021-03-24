import React, { useState } from 'react'
import { 
  SafeAreaView,
  ScrollView,
  View, 
  Dimensions, 
  TouchableOpacity, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableHighlight, 
  Animated } from 'react-native'
import { toDoData } from '../db'
import LinearGradient from 'react-native-linear-gradient'
import InsetShadow from 'react-native-inset-shadow'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Todos from '../components/Home/ToDoList'
const {width,height} = Dimensions.get('window')

import { TodoProvider } from '../Reducer'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#D4CDDB'
    },
    headContainer: {
      flex: 3,
      width: 'auto',
      backgroundColor: '#D4CDDB'
    },
    headContainer2: {
      flexDirection: 'row'
    },
    headText: {
      marginLeft: 30,
      marginTop: 25,
    },
    headCirCle: {
      width:100,
      height:100,
      borderRadius: 50,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 3,
      shadowOpacity: 1,
    },
    headCard: {
      borderRadius: 12,
      fontSize: 18,
      backgroundColor: '#000',
    },
    headOuterCirCle: {
      
      marginLeft: 30,
      marginTop: 25,
      
    },
    headWarningCard: {
      width: 230,
      height: 150,
      borderRadius: 12,
      marginTop: 25,
      marginLeft: 'auto',
      marginRight:30,
      backgroundColor: '#FFFFFF',
    },
    bodyContainer: {
      flex: 6,
      width: 'auto',
      backgroundColor: "#37333C",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },

})

const HeadCirCle = ({ style }) => {
  
  return (

      <LinearGradient
        start={{x: 0.9, y: 0.1}} end={{x: 0.3, y: 0.7}}
        colors={['rgba(159, 146, 236, 0.8647)','rgba(216, 149, 179, 0.9)']}
        style={[styles.headCirCle, style]}
      >

        

      </LinearGradient>

  )
}
const HeadCard = ({ style, data }) => {
  return (
    <View style={ [style] }>
     
    </View>
  )
}



const HomeIn = () => {
  const data = toDoData
  
  return (
    <>
      <SafeAreaView style={styles.container} >
        <View style={[styles.headContainer]}>
          <View style={{ }}>
            <Text style={[styles.headText]}>현재 진행중인 프로그램: 없음</Text>
          </View>
          <View style={styles.headContainer2}>
            <HeadCirCle style={ styles.headOuterCirCle } />
            <HeadCard style={ styles.headWarningCard }/>
          </View>
        </View>
        <View style={ styles.bodyContainer } >
          <Todos />
        </View>
      </SafeAreaView>
    </>
  )
}

const Home = () => {
  return (
    <TodoProvider>
      <HomeIn />
    </TodoProvider>
  )
}

export default Home;
