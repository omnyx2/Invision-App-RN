import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { BarChart, Grid, YAxis,XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:"row",
    height: "auto"
  },
  titleContainer: {
    
  },
  yAxisContainer: {
    height: 200,
    marginLeft: 30,
    marginRight: 30,
    color: "#FFF",

  },
  chartContainer:{
    flex: 1,
    marginLeft: 16, 
    height: 200,
    marginRight: 60 
  },
  xLabelContainaer:{
    marginLeft: 16, 
    height: 10,
    flex:1
  }
})



const Chart = ({ title, data, style }) =>  {
  const yAxisController = 1
  const CUT_OFF = 1
  return (
    <> 
      <View style={styles.titleContainer}>
          <Text>{title}</Text>
      </View> 
      <View style={styles.container}>   
        <YAxis
          style={styles.yAxisContainer}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: '#FFF',
            fontSize: 16,
            fontWeight: 'bold'
          }}
          numberOfTicks={2}
          formatLabel={(value) => { return (value !== 0 ? (value !== 1 ? "나쁨" : "좋음" ) : "평균") }}
        />
        <BarChart
          style={ styles.chartContainer }
          data={data}
          contentInset={{ top: 30, left:10, right:10, bottom: 30 }}
          curve={shape.curveNatural}
          spacingInner={0.9}
          spacingOuter={0.6}
          svg={{ fill: 'rgba(256, 256, 256, 0.8)' }}
        >
          <Grid
            
            svg={{
              fill: '#F0F0F0'
            }}
          />
        </BarChart>
      </View>
      <View style={styles.xLabelContainaer}>
        <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => index }
                    labelStyle={ { color: 'black' } }
                /> 
      </View>
    </>)
  }

export default Chart