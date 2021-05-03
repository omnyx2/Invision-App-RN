import { interpolateRgbBasis } from 'd3-interpolate';
import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Platform, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import HomeWarningSwriper from '../components/Home/HomeWarningSwiper'
import SSCD from '../SampleDB/SpecializedSubjectCardsData';

import colorPalette from '../colorPalette';


const styles = StyleSheet.create({

  textContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba( 0, 0, 0, 0.1)'
  },
  boxText: {
    fontSize: 18,
    marginBottom: 10,
  }, 
  title: {
    flex: 1
  },
  date: {
    flex: 1,
    fontSize: 16,
  },
  boxHighlightText: {
    
  },
  imgUploadContainer: {
    flex: 1
  }, 
  imgUploadBox:{
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ieContainer: {
    flex: 1,
    flexDirection: "column"
  },
  ieImgContainer: {
    flex: 1,
    flexDirection: 'column',
    
  },
  ieContainerRow: {
    flex: 1,
    flexDirection: 'row'
  },
  ieImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'contain'
  },
  button: {
    flex: 1
  },
  score: {
    flex: 1,
    fontSize: 18,
    color: 'blue'
  }
});

const ReportImage = ({navigation}) => {
  
  const sampleImgUri = '../statics/initImg.jpeg'
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.textContainerOutter}>

        <Text style={styles.boxText}>
          AI검진을 위해서는 
          <Text style={styles.boxHighlightText}>파노라마 사진</Text>
          이 필요합니다.
        </Text>
        <Text style={styles.boxText }>
          방 문하신 치과에 의뢰하면 파노라마 사진을 쉽게 구할 수 있습니다.
        </Text>
        <Text style={styles.boxText}>
          방문하신 치과에 의뢰하면 파노라마 사진을 쉽게 구할 수 있습니다.
        </Text>
      </View>
      <View style={styles.imgUploadContainer}>
        <TouchableOpacity style={styles.imgUploadBox}>
          <Text>
            사진 업로드
          </Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.ieContainer}>
        <View style={{ flex: 0 }}>
          <Text>
            아래 샘플 이미지를 선택하여 치야검진을 경험해 보세요
          </Text>
        </View>
        <View style={styles.ieImgContainer}>
          <View style={styles.ieContainerRow}>
            <Image style={styles.ieImg} source={require(sampleImgUri)}/>
            <Image style={styles.ieImg}  source={require(sampleImgUri)}/>
          </View >
          <View style={styles.ieContainerRow}>
            <Image style={styles.ieImg} source={require(sampleImgUri)} />
            <Image style={styles.ieImg} source={require(sampleImgUri)} />
          </View>
        </View>
        <View style = {styles.nextButtonBox} >
          <TouchableOpacity style>
            
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default ReportImage;
