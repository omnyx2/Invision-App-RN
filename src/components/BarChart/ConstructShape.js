

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
    <Shape d={d} fill={color} />
  );
}

_createX = width => {
  return scaleBand().rangeRound([20, width - 75]);
}

_createY = height => {
  return scaleLinear()
    .domain([0, 16])
    .range([0, height]);
}
