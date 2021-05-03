import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { call } from 'react-native-reanimated';
import Chart from '../components/Chart';

const styles = StyleSheet.create({
  container: {
    color: '#FFF',
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
  imgInnerBox: {
    backgroundColor: 'rgba(111,111,111,0.3)',
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  imgInnerContainer:{
    flex:1,
    flexDirection: 'column'
  },
  imgOuterContainer: {
    flex:1,
    flexDirection: "row"
  },
  imgInnerBoxText: {
    color: '#000',
  }
});


const HeaderTextBox = ({text, containerStyle}) => {
  return (
    <View style={[containerStyle]}>
      <Text style={styles.headerOneText}> {text}</Text>      
    </View>
  )
} 


const ImageContainerBox = ({imgUri, callbackOnPress}) => {

  const sampleImgUri = '../statics/initImg.jpeg'

  return (
    <>
    <View>
      { imgUri !== undefined  ? ( // 이미지가 있으면 라이브러리에서 받아온 이미지로 출력, 없으면 디폴트 이미지 출력!
        <View
          style={styles.imgContainer}>
          <ImageBackground source={{uri: imgUri}} style={styles.imgStyle} >
          <View style={styles.imgOuterContainer}>
                <View style={styles.imgInnerContainer}>
                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(0) }
                  >
                    <Text style={styles.imgInnerBoxText}> 좌측 상부 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(1) }
                  >
                    <Text style={styles.imgInnerBoxText}> 좌측 상부 </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imgInnerContainer}>
                <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(2) }
                  >
                      <Text style={styles.imgInnerBoxText}> 중앙 상부 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(3) }
                  >
                    <Text style={styles.imgInnerBoxText}> 중앙 하부 </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.imgInnerContainer}>
                <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(4) }
                  >
                    <Text style={styles.imgInnerBoxText}> 우측 상부 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () =>  callbackOnPress(5) }
                  >
                    <Text style={styles.imgInnerBoxText}> 우측 하부 </Text>
                  </TouchableOpacity>
                </View>
              </View>
          
          </ImageBackground>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => console.log("2")}>
            <ImageBackground source={require(sampleImgUri)} style={styles.imgStyle} >

             <View style={styles.imgOuterContainer}>
                <View style={styles.imgInnerContainer}>
                <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(0) }
                  >
                    <Text style={styles.imgInnerBoxText}> 좌측 상부 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(1) }
                  >
                    <Text style={styles.imgInnerBoxText}> 좌측 상부 </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imgInnerContainer}>
                <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(2) }
                  >
              
                      <Text style={styles.imgInnerBoxText}> 중앙 상부 </Text>
      
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={  () => callbackOnPress(3) }
                  >
                    <Text style={styles.imgInnerBoxText}> 중앙 하부 </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.imgInnerContainer}>
                <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () =>  callbackOnPress(4) }
                  >
                    <Text style={styles.imgInnerBoxText}> 우측 상부 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.imgInnerBox}
                    onPress={ () => callbackOnPress(5) }
                  >
                    <Text style={styles.imgInnerBoxText}> 우측 하부 </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </ImageBackground>
        </TouchableOpacity>
      )}
      </View>
    </>
  )

}


const Report = () => {
  const [img, setImageSource] = useState(); // 이미지를 img변수에 할당시킬겁니다!
  const [highlightColumnIndex, setHighlightColumnIndex] = useState(0)
  const [username, setUsername] = useState('예시) 홍길동')
  const handleOnPress = (id) => {
    setHighlightColumnIndex(id)
  }
  
  return (
    <>
      <SafeAreaView style={styles.container} >
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
          <View>
            <View style={styles.imgPickerTextContainer} >
              <Text style={styles.headerOneText}>
                {`${username}의 이빨 파노라마 분석` }
              </Text>
            </View>
            <View>
              <ImageContainerBox imgUri={img} callbackOnPress={ (id) => handleOnPress(id) }/>
            </View>
          </View>
          
        <View style={styles.chartContainer}>

          <Chart 
            highlightColumnIndex={ highlightColumnIndex }
            data={[
              {"duration": 10, column: 1},
              {"duration": 5, column: 2},
              {"duration": 7, column: 3},
              {"duration": 1, column: 4},
              {"duration": 4, column: 5},
              {"duration": 9, column: 6},
            ]} 
            title='' 
          />

          
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Report;
