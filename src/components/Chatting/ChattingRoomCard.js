
import React, { useState } from 'react';
import { Platform, Text, View, Button, Alert, StyleSheet, Image  } from 'react-native';

// 아래는 스타일

const styles = StyleSheet.create({
  RoomTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  RoomAlarm: {
  }, 
  RoomCard: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
    backgroundColor: '#FFF',
  }, 
  RoomTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  RoomLastMessage: {
    marginRight:'auto',
    fontSize: 12,
  }, 
  RoomUnreadMessageNum: {
    margin:5,
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'red',
    color: '#fff',
  },
  RoomLastSentTime: { 
  },
  RoomAvatar: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  RoomAvatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray'
  },
  RoomCenter: {
    display: 'flex',
    flex: 1 ,
    flexDirection: 'column'
  },
  RoomLast: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
})

// 채팅방 하나를 다룬다
const ChattingRoomCard = ({ 
  avatar, 
  title, 
  isAlarmed, 
  unreadMessageNum, 
  lastMessage, 
  roomId,
  userId,
  userName,
  lastSentTime }) => {
  console.log(avatar)

  return (
    // 아래줄 없애주기 위해서 ㄲ
    
      <View style={styles.roomCard}>
        <View style={styles.roomAvatar}>
          <Image style={styles.roomAvatarImg}  source={{
          uri: avatar}} />
        </View>
        <View style={styles.roomCenter}>
          <View style={styles.roomTitle}>
            <Text style={styles.roomTitleText}> { title } </Text>
            <Text style={styles.roomAlarm}> { isAlarmed ? "true" : "false" } </Text>
          </View>  
          <Text style={styles.roomLastMessage}> { lastMessage } </Text>
        </View>   
        <View style={styles.roomLast}>          
          <Text style={styles.roomUnreadMessageNum}> { unreadMessageNum } </Text>
          <Text style={styles.roomLastSentTime}> { lastSentTime } </Text>
        </View>
      </View>  

  )
}



export default ChattingRoomCard