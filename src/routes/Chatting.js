import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ChattingRoomList from '../components/Chatting/ChattingRoomList'
import { chatDb } from '../db';



const Chatting = () => {
  // 서버로 부터 유저 데이터를 받아와 chatting 컴포넌트에 전달
  // 여기서 가장 처음 유저가 포함된 채팅방의 리스트를 불러와서 채팅방 리스트를 만드는 역활을 해준다
  const userId = "0001"

  return (
    <ChattingRoomList data={chatDb} userId={userId} userName={"Jack"}/>
  )
}
export default Chatting ;
