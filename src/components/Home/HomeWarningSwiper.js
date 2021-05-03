
import React, { useState, useReducer, useCallback } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')
const loading = require('../../statics/loading.gif')

const styles = StyleSheet.create({
  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
})




const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={() => {
          props.loadHandle(props.i)
        }}
        style={styles.image}
        source={{ uri: props.uri }}
      />
      {/*!props.loaded && (
        <View style={styles.loadingView}>
          <Image style={styles.loadingImage} source={loading} />
        </View>
      )*/}
    </View>
  )
}

const Page = () => {
  const [state, setState] = useState({ imgList: [
      'http://www.sadh.co.kr/sub-1/images/img_1_1.jpg',
      'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
      'https://wallpapercave.com/wp/wp8367723.jpg',
      'https://wallpapercave.com/wp/wp2807409.jpg',
      'https://preppywallpapers.com/wp-content/uploads/2018/08/Gorgeous-iPhone-Wallpaper-Collection-11.jpg'
    ],
    loadQueue: [0, 0, 0, 0, 0]
  })
  const actions = {
    loaded: index => {
      return state => {
        state.loadQueue[index] = 1
      }
    }
  }

  const loadHandle = useCallback((i) => {
    actions.loaded(i)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <Swiper
        loadMinimal
        loadMinimalSize={1}
        // index={0}
        style={styles.wrapper}
        loop={true}
      >
        
        {state.imgList.map((item, i) => (
          <Slide
            loadHandle={loadHandle}
            uri={item}
            i={i}
            key={i}
            loaded={state.loadQueue[i]}
          />
        ))}
       
      </Swiper>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Page