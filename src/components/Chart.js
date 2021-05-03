
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, StatusBar,  processColor, SafeAreaView } from 'react-native';
import BarChart from './BarChart';


export default function App({ data, highlightColumnIndex }) {
  console.log('chart')
  console.log(highlightColumnIndex)
  return (
    <>
    <SafeAreaView style={styles.container}>
 
      <View style={styles.spaceBetween}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.header_title}>치아 지수</Text>
          <Text style={styles.header_sub}>저런 우측 상부의 치아에 정밀검사가 필요해 보여요</Text> 
        </View>
        <BarChart 
          data={ [...data]}
          highlightColumnIndex={highlightColumnIndex}
        />

        <View style={styles.header}>
          <Text style={styles.header_title}>잇몸 지수</Text>
          <Text style={styles.header_sub}>저런 우측 상부의 잇몸에 정밀검사가 필요해 보여요</Text> 
        </View>
        <BarChart 
          data={ [...data]}
          highlightColumnIndex={highlightColumnIndex}
        />

        <View style={styles.header}>
          <Text style={styles.header_title}>골다공증 지수</Text>
          <Text style={styles.header_sub}>우측 상부치아의 밀도가 낮아 골다공증이 의심되요</Text> 
        </View>
        <BarChart 
          data={ [...data]}
          highlightColumnIndex={highlightColumnIndex}
        />
        <View style={styles.header}>
          <Text style={styles.header_title}>석회화 지수</Text>
          <Text style={styles.header_sub}>저런 우측 상부의 잇몸에 정밀검사가 필요해 보여요</Text> 
        </View>
        <BarChart 
          data={ [...data]}
          highlightColumnIndex={highlightColumnIndex}
        />

        </ScrollView>
          {
          /*
            * 
            * The Column Chart will live here
            * 
          */ }

      </View>
      
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFF',

  },
  topbar: {
    backgroundColor: 'rgba(18,18,18,0.75)',
    bottom: 2,
    height: 68
  },
  topbar_inner: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  chart: {
    flex:1  
  },
  topbar_hamburger: {
    padding: 10,
    color: '#fff'
  },
  topbar_avatar: {
    borderRadius: 100,
    width: 25,
    height: 25,
    borderColor: '#fff',
    borderWidth: 1
  },
  footer: {
    height: 70,
    backgroundColor: '#232323',
  },
  header: {
    paddingTop: 20,
    paddingLeft: 25,
  },
  header_title: {
    color: '#fff',
    fontSize: 34,
    textTransform: 'capitalize',
  },
  header_sub: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic'
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
