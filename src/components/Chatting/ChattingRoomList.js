
import React, { useState } from 'react';
import { Platform, Text, View, Button, Alert, StyleSheet  } from 'react-native';
import styled from 'styled-components';

import ChattingRoomCard from './ChattingRoomCard';


const styles = StyleSheet.create({
  room: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    fontSize: 12
  }
})
  
const ChattingRoomList = ({ data, userId, userName }) => {
  
  return (
    <>
    <View style={styles.room}>
      { data?.map( m =>(
          <ChattingRoomCard
            avatar={ m.avatar }
            title={ m.title}
            isAlarmed={ m.isAlarmed }
            unreadMessageNum={ m.unreadMessageNum }
            lastMessage={ m.lastMessage }
            roomId={ m.roomId }
            userId={ userId }
            userName= { userName}
            lastSentTime={ m.lastSentTime } />)    
      )}
    </View>  
  </>
  )
}

export default ChattingRoomList;
;
