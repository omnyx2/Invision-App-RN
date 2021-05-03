import React, { useState, useContext } from 'react'
import ListCard from './ToDoCard'
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

import { useTodoDispatch, useTodoState } from '../../reducers/TodoReducer';
import { dataType } from '../../db'
import { empty } from '@apollo/client';

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
    emptyContainer: {
      margin: 20,

    },
    titleContainer: {
      marginLeft: 50,
      marginTop: 10,
      marginBottom: 15
      
    },
    typeTitle: {
     fontWeight: 'bold',
     fontSize: 18,
     color: '#FFF'
    },

})

const TypeList = ({ type }) => {
  const data = useTodoState();
  const title = dataType[type]
  if((data.filter((data => data.type === type))) == [] ){
    return <></> 
  }

  return (
    <>
      
      <View style={ styles.titleContainer }>
        <Text style={ styles.typeTitle }>
        { title }
        </Text>
      </View>
        {
          data
            .filter((data => data.type === type))
            .map( (data) => (
            <ListCard
              id={data.id}
              key={data.id}
              title={data.text}
              isChecked={data.isChecked}
              isAlarmed={data.isAlarmed}
            />
          ))
        }
    </>
  )
}


const ToDoList = () => {
  
  return (
   
    <ScrollView 
      contentContainerStyle={[styles.bodyContainer]} >
      <View style={ styles.emptyContainer}></View>
      <TypeList type={0} />
      <TypeList type={1} />
      <TypeList type={2} />   

    </ScrollView>
  )
}

export default ToDoList