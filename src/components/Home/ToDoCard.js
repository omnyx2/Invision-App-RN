import React, { useState } from 'react'
import { 

  View, 
  Dimensions, 
  TouchableOpacity, 
  Text,
  StyleSheet, 
 } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTodoDispatch } from '../../Reducer';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    cardContainer: {
        marginLeft:40,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: width * (0.8),
        height: 54,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: "#7A767E",
        borderWidth: 1
    },
    cardTextBox: {
      height: '100%',
      fontWeight: "bold",
      fontSize: 16,
      width: width * (0.8)* 0.6,
      justifyContent: 'center'
    },
    cardText: {
      
      fontWeight: "bold",
      fontSize: 16,
      justifyContent: 'center'
    },
    checkBox: {

      width: 54,
      color: '#FFFFFF',
      flex: 1,
      backgroundColor: '#DF9EB6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alarmBox: {
      width: 54,
      color: '#000000',
      flex:1,
      backgroundColor: '#A994E3',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    checkInnerBox: {

      justifyContent: 'center',
    },
    checkIcon: {
      borderColor: "#7A767E",
      borderWidth: 2,
    },
    alarmInnerBox: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    alarmText:{
      color:"#FFF", 
      fontSize: 10
    } 
})


const ListCard = ({ id, title, isChecked, isAlarmed }) => {
  const dispatch = useTodoDispatch();
  const onCheck = (id) => dispatch({ type: 'TOGGLE_CHECKED', id });
  const onAlarm = (id) => dispatch({ type: 'TOGGLE_ALARMED', id });

  return (
    <>
      <View style={styles.cardContainer}>

        <View style={styles.cardTextBox}  >
          <Text style={styles.cardText}> { (title !== undefined && ("   " + title)) }</Text>
        </View>

        <View >
            <TouchableOpacity
              style={styles.checkBox} 
              onPress={() => onCheck(id)}
            >
              
              <View > 
              { 
                (isChecked)
                  ?
                  <View style={styles.checkInnerBox}>
                    <MaterialCommunityIcons iconStyle={styles.checkIcon} name="checkbox-marked" color={"#FFF"} size={16}/>
                  </View>
                  :
                  <View style={styles.checkInnerBox}>
                      <MaterialCommunityIcons name="checkbox-blank" color={"#FFF"} size={16} />
                  </View>
              }
              </View>
              
            </TouchableOpacity>
        </View>

        <View>   
          <TouchableOpacity
            style={styles.alarmBox}
            onPress={() => onAlarm(id)}
          >
            <View>
            { 
              (isAlarmed)
                ?
                <View style={styles.alarmInnerBox}>
                  <Text style={styles.alarmText}>알림</Text>
                  <MaterialCommunityIcons name="alarm" color={"#FFF"} size={22}/>
                  <Text style={styles.alarmText}>설정됨</Text>
                </View>
                
                :
                <View style={styles.alarmInnerBox}>
                  <Text style={styles.alarmText}>알림</Text>
                    <MaterialCommunityIcons name="alarm-off" color={"#FFF"} size={22}/>
                  <Text style={styles.alarmText}>취소됨</Text>
                </View>
              }
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default ListCard