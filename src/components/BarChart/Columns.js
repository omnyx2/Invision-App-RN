import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Surface,
  Group,
 
} from '@react-native-community/art'
import { scaleLinear, scaleBand } from 'd3-scale';
import ConstructShape from './ConstructShape'
import ConstructText from './ConstructText'
// import { loadPartialConfigAsync } from '@babel/core';


export default function Columns({ data, width, height, color }) {
  return (
    
  <Surface width={width} height={height}>
  {data.map((item, index) => {
    let config = {
      index: index,
      width: width,
      height: height,
      data: data,
      color: color,
      lineWidth: 18,
    }
    console.log('---config---')
    console.log(config)
    return (
      <Group key={index} x={60} y={-20}>
        <ConstructShape config={{...config, ...{ color: "#353535", type: 'main' }}} />
        <ConstructShape config={{...config, ...{ color: color, type: 'top', lineHeight: 5 }}}/>
        <ConstructText  config={{...config, ...{ color: color, type: 'top', lineHeight: 5 }}}/>
      </Group>
    );
  })}
  </Surface>
  );
}
