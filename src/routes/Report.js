import React, {useState} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Chart from '../components/Chart';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#18202C'
  },
  imgPickerTextContainer: {
    marginTop: 26,
    marginLeft: 26,
    marginBottom: 5,
  },
  headerOneText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  imgPickerContainer: {
    width: 'auto',
    height: 42,
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 30,
    
    color: "black",
    backgroundColor: 'rgba(247, 247, 247, 0.8)',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {

    marginLeft: 30,
    marginRight: 30,
    width: 'auto',
    height: 150,
  },
  imgStyle: {
    borderRadius: 20,
    width: Dimensions.get('window').width - 60,
    height: 150,
  },
  chartContainer: {
    display: 'flex'
  },
});


const HeaderTextBox = ({text, containerStyle}) => {
  return (
    <View style={[containerStyle]}>
      <Text style={styles.headerOneText}> {text}</Text>      
    </View>
  )
} 

const Report = () => {
  const [img, setImageSource] = useState(''); // 이미지를 img변수에 할당시킬겁니다!
  const [username, setUsername] = useState('예시) 홍길동')
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <HeaderTextBox 
            text={"엑스레이 사진 올려서 판독 받아보기" }
            containerStyle={styles.imgPickerTextContainer}
          />
          <TouchableOpacity
            onPress={() =>
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                (response) => {
                  setImageSource(response.uri);
                },
              )
            }
            style={styles.imgPickerContainer}>
            <View style={{}}>
              <Text>나의 치아 파노마라 사진 가져오기</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.imgPickerTextContainer} >
            <Text style={styles.headerOneText}>
              {`${username}의 이빨 파노라마 분석` }
            </Text>
          </View>
          {img ? ( // 이미지가 있으면 라이브러리에서 받아온 이미지로 출력, 없으면 디폴트 이미지 출력!
            <TouchableOpacity
              style={styles.imgContainer}
              onPress={() => console.log()}>
              <Image source={{uri: img}} style={styles.imgStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.imgContainer}
              onPress={() => console.log()}></TouchableOpacity>
          )}
        <View style={styles.chartContainer}>
          <Chart data={[1, -1, 0, 1]} />
          <Chart data={[1, 1, 1, 0]} />
          <Chart data={[-1, -1, 1, 1]} />
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Report;
