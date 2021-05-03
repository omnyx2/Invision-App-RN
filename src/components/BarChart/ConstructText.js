import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Surface,
  Group,
  Shape,
  Path,
  Text
} from '@react-native-community/art'
import { scaleLinear, scaleBand } from 'd3-scale';
import { line } from 'd3-shape';

export default function ConstructShape({ config: { index, width, data, height, color, lineWidth, lineHeight, type } }) {
  // set X
  let x = this._createX(width);
  x.domain(data.map(d => {
    return d.column;
  }));
  let xPos = x(data[index].column);

  // set Y
  let y = this._createY(height);
  let barHeight = y(data[index].duration);

  // set starting position from x position
  let moveToY = type == 'top' ? height - barHeight : height;
  
  if (!lineHeight) {
    lineHeight = -barHeight;
  }

  // Draw path
  let d = new Path()
    .moveTo(xPos, moveToY)
    .line(lineWidth, 0)
    .line(0, lineHeight)
    .line(-lineWidth, 0);

  return (
    <>
      <Text
        fill="#FFF"
        x={ xPos + 21 }
        y={ moveToY - 20}
        font={`14px Arial`}
        alignment='right'
      >
        { 
          moveToY > 150 ? ( moveToY < 250 ? "보통" : "나쁨" ) : "좋음"
        }
      </Text>
    </>
  );
}

_createX = width => {
  return scaleBand().rangeRound([20, width - 75]);
}

//  여기 도메인이 막대의 높이를 결정
_createY = height => {
  return scaleLinear()
    .domain([0, 12])
    .range([0, height]);
}
