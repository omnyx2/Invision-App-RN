import React, { useState, useEffect } from 'react'
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
import LinearGradient from 'react-native-linear-gradient'
import { TodoProvider } from '../reducers/TodoReducer'
import { toDoData, todoStyle } from '../db' 
import Todos from '../components/Home/ToDoList1'
import HomeWarningSwriper from '../components/Home/HomeWarningSwiper'
import { style } from 'd3-selection'
import Ionicons from 'react-native-vector-icons/Ionicons';


const {width,height} = Dimensions.get('window')

const colorPalatte = {
  HomeTodoText: '#FFF',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      
    },
    headContainer: {
      flex: 3,
      width: 'auto',
      backgroundColor: '#D4CDDB',
      elevation: 4,
    },
    headContainer2: {
     flex: 1 
    },
    programText: {
      fontSize: 16,
      fontWeight: "bold",
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

    },
    headInnerCard: {
      marginTop: 10,
      marginLeft: 10,
    },
    headOuterCirCle: {
      
      marginLeft: 30,
      marginTop: 25,
      
    },
    headWarningCard: {
      flex: 1,
      height: 150,
      borderRadius: 12,
      marginTop: 25,
      marginLeft: 30,
      marginRight:30,
      backgroundColor: '#FFFFFF',
    },
    bodyContainer: {
      flex: 6,
      width: 'auto',
      backgroundColor: "#FCFCFC",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    chatIconBox: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',

      bottom: 10,
      right: 10,
      width:  50,
      height: 50,
      backgroundColor: "blue",
      borderRadius: 30,
    }

})

const HomeIn = ({navigation}) => {
  const data = toDoData
  const [selectedDate, setSelectedDate] = useState(Date()) 

  const moveToChatting = () => navigation.navigate('Chatting')

  return (
    <>
      <SafeAreaView style={styles.container} >
        <View style={[styles.headContainer]}>
       
          
          <View style={styles.headContainer2}>
            {/* <HeadCirCle style={ styles.headOuterCirCle } /> */}
            <HomeWarningSwriper/>
          </View>
        </View>
        <View style={ styles.bodyContainer } >
          <ScrollView>
            <View style={{ }}>
              <Text style={[styles.programText]}>현재 진행중인 프로그램: 사랑니 발치</Text>
            </View>
            <Todos todoStyle={todoStyle}>
              
            </Todos>
            </ScrollView>
            {/* Go To Chatting navigation */}
            <LinearGradient 
              colors={['#89B2E9', '#4987DA']}
              style={styles.chatIconBox}>
                <TouchableOpacity onPress={ () => moveToChatting() }>
                  <Ionicons name='chatbubbles' size={24} color={'white'}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        
      </SafeAreaView>
    </>
  )
}

const Home = ({navigation}) => {
  return (
    <TodoProvider>
      <HomeIn navigation={navigation}/>
    </TodoProvider>
  )
}

export default Home;
