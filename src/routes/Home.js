import React, { useState } from 'react'
import { 
  SafeAreaView,
  View, 
  Dimensions, 
  TouchableOpacity, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableHighlight, 
  Animated } from 'react-native'
import { toDoData } from './db'
import LinearGradient from 'react-native-linear-gradient'
import InsetShadow from 'react-native-inset-shadow'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    headContainer: {
      flex: 1,
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
      shadowOpacity: 1
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
      flex: 2,
      width: 'auto',
      justifyContent: 'center',
      
      backgroundColor: "#DDDDDD",
    },
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


const checkbox = ({ currentState }) => {
  if( currentState ) {
    return (
      <View style={{ justifyContent: "center", textAlign : "center"} }>
        
      </View>
    )}
  else {
    return (
      <View >
        <MaterialCommunityIcons name="checkbox-blank-outline-marked" color={"black"} size={20} />
      </View>
    )
  }
}


const ListCard = ({ title, onCheck, onAlarm, isChecked, isAlarmed }) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardText}  >
          <Text> { (title !== undefined && ("   " + title)) }</Text>
        </View>
        <View style={{ justifyContent: "center", alignContent: "center"} }>
            <TouchableOpacity
              style={styles.checkBox} 
              onPress={onCheck}
            >
              <Text style={{ justifyContent: "center", alignContent: "center"}}> { 
                (isChecked)
                  ?
                   <MaterialCommunityIcons name="checkbox-marked" color={"#FFF"} size={20} />
                  :<MaterialCommunityIcons name="checkbox-blank" color={"#FFF"} size={20} /> 
              } 
              </Text>
            </TouchableOpacity>
        </View>
        <View>   
          <TouchableOpacity
            style={styles.alarmBox}
            onPress={onAlarm}
          >
            <Text> { isAlarmed
                ?<Text>
                <MaterialCommunityIcons name="alarm" color={"#FFF"} size={20}/></Text>
                :<Text>
                <MaterialCommunityIcons name="alarm-off" color={"#FFF"} size={20}/></Text>
              }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const List = ({ data, dataChanger }) => {
  console.log(data)

  return (
   <>
     <View style={styles.headWarningCard}>

     </View>
   </>
  )
}

const HeadCirCle = ({ style }) => {
  
  return (
    <InsetShadow >
    <LinearGradient
      start={{x: 0.9, y: 0.1}} end={{x: 0.3, y: 0.7}}
      colors={['rgba(159, 146, 236, 0.8647)','rgba(216, 149, 179, 0.9)']}
      style={[styles.headCirCle, style]}
    >

      

    </LinearGradient>
    </InsetShadow>
  )
}
const HeadCard = ({ style, data }) => {
  return (
    <View style={ [style] }>
     
    </View>
  )
}



const Home = () => {
  const data = toDoData
  const [cardData, setCardData] = useState(data);
  const [areChecked, setChecked] = useState(false);
  const [areAlarmed, setAlarmed] = useState(false);
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
        <View style={[styles.bodyContainer]} >
          {/* <List data={cardData} dataChanger={ ()=> setCardData } ></List> */}
          <ListCard
            title="test"
            onCheck={ () => setChecked(!areChecked) }
            onAlarm={ () => setAlarmed(!areAlarmed) }
            isChecked={areChecked}
            isAlarmed={areAlarmed}
          />
          <ListCard
            title="test"
            onCheck={ () => setChecked(!areChecked) }
            onAlarm={ () => setAlarmed(!areAlarmed) }
            isChecked={areChecked}
            isAlarmed={areAlarmed}
          />
          <ListCard
            title="test"
            onCheck={ () => setChecked(!areChecked) }
            onAlarm={ () => setAlarmed(!areAlarmed) }
            isChecked={areChecked}
            isAlarmed={areAlarmed}
          />
          <ListCard
            title="test"
            onCheck={ () => setChecked(!areChecked) }
            onAlarm={ () => setAlarmed(!areAlarmed) }
            isChecked={areChecked}
            isAlarmed={areAlarmed}
          />
          <ListCard
            title="test"
            onCheck={ () => setChecked(!areChecked) }
            onAlarm={ () => setAlarmed(!areAlarmed) }
            isChecked={areChecked}
            isAlarmed={areAlarmed}
          />
          <ListCard
            title="test"
            onCheck={ () => setChecked(!areChecked) }
            onAlarm={ () => setAlarmed(!areAlarmed) }
            isChecked={areChecked}
            isAlarmed={areAlarmed}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home;
