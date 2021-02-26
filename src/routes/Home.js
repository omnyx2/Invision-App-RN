import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, FlatList, StyleSheet, TouchableHighlight, Animated } from 'react-native';

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      width: 314,
      height: 54,
      left: 36,
      top: 275,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: width * (0.8),
        height: 54,
        marginBottom: 20,
        borderRadius: 10,
    },
    cardText: {
      height: '100%',
      alignContent: 'center',
      width: width * (0.8)* 0.6,
      justifyContent: 'center'
    },
    checkBox: {
        height: 54,
        width: 54,
      color: '#FFFFFF',
      backgroundColor: '#DF9EB6',
      justifyContent: 'center'
    },
    alarmBox: {
      width: 54,
      height: 54,
      color: '#000000',
      backgroundColor: '#A994E3',
      justifyContent: 'center'
    }
})


const titleList = [
    "수술 1시간 전 약먹기",
    "병원 예약 04.17 4시",
    "수술 1시간 전 출발하기",
    "약 한시간전에 먹기",
]
let checkList = [
  1,0,0,0,0
]

const alarmList = [
  1,0,1,0,0
]


const CardCell = ({...props})  => {
  
  return ( 
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  )
}
const ListCard = ({ title, onCheck, onAlarm, isChecked, isAlarmed }) => {
  return (
    <>
      <View style={styles.cardContainer}>
          <View style={styles.cardText}  >
            <Text> { (title !== undefined && ("   " + title)) }</Text>
          </View>
          <View >
            <TouchableOpacity
              style={styles.checkBox} 
              onPress={onCheck}
            >
              <Text> { isChecked ? 'checked' : 'un checked'  } </Text>
            </TouchableOpacity>
        </View>
        <View >   
            <TouchableOpacity
              style={styles.alarmBox}
              onPress={onAlarm}
            >
              <Text> { isAlarmed ? '알람예약' : '알람취소' } </Text>
            </TouchableOpacity>
          </View>
      </View>
    </>
  )
}


const Home = () => {
  const [areChecked, setChecked] = useState(false);
  const [areAlarmed, setAlarmed] = useState(false);
  return (
    <>
      <View>
        <Text>home</Text>
      </View>
      <ListCard
        title="test"
        onCheck={ () => setChecked(!areChecked) }
        onAlarm={ () => setAlarmed(!areAlarmed) }
        isChecked={areChecked}
        isAlarmed={areAlarmed}
      />
    </>
  )
}

export default Home;
