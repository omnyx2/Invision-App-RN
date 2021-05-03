import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,SafeAreaView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import Swiper from 'react-native-swiper';
import RNPickerSelect from 'react-native-picker-select';
import { style } from 'd3-selection';
import Carousel  from 'react-native-snap-carousel'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerContainer0: {
    height: 50,
    borderColor:  'black',
    borderRadius: 1
  },
  headerContainer1: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    // backgroundColor: '#f00'
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  hospitalCardContainer: {
    zIndex: 5,
    marginTop: 'auto',
    flexDirection: "column-reverse",
    height: 150,
    
  },


})

const Map = () => {

  const [location, setLocation] = useState(undefined);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        console.log(location)
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);


  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style= {styles.headerContainer0}>
          <View style={styles.headerContainer1}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Football', value: 'football' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Hockey', value: 'hockey' },
                ]}
            />
          </View>
        </View>
        <WebView
          source={{ uri: 'http://localhost:3000/' }}
          style={styles.container}
          onMessage={this.onWebviewMessage}
          javaScriptEnabled={true}
        >
          <View style={styles.hospitalCardContainer}>
            <Carousel layout={'default'} />
          </View>
        </WebView>
      </SafeAreaView>
    </>
  )
}

export default Map ;
