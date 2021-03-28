import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Surface,
  Group,
  Shape,
  Path,
  Text
} from '@react-native-community/art'
import { scaleLinear } from 'd3-scale';




export default function yAxis({ width, height, isNap }) {
  let yValues = ['14', '12', '10', '8', '6', '4', '2', '0'];
  let gridPoints = this.generateGridPoints(yValues.length);

  return (
    <Surface style={styles.yAxis} width={width} height={height}>
      {gridPoints.map((point, index) => (
        <Group key={index} x={0} y={-20}>
          <Shape
            d={this.getScaleTicks(index, gridPoints, width, height)}
            fill="rgba(255,255,255,0.7)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth={1}
          />

          <Group x={10}>
            <Text
              fill="#FFF"
              x={40}
              y={this.getScalePosition(index, gridPoints, height)}
              font={`14px Arial`}
              alignment='right'
              >
              {yValues[index]}
            </Text>
          </Group>
        </Group>
      ))}
    </Surface>
  );
}

generateGridPoints = amount => {
  let points = [];
  Array(amount).fill().forEach((i, index) => {
    let pos = (100 / amount) * index ;
    points.push(pos);
  });
  points.shift();
  points.push(100);

  return points;
}

getScaleTicks = (index, gridPoints, width, height) => {
  let y = scaleLinear().domain([0, 100]).range([0, height - 10]);
  let position = y(gridPoints[index]);
  return new Path().moveTo(0, position).line(width, 0)
}

getScalePosition = (index, gridPoints, height) => {
  let y = scaleLinear().domain([0, 100]).range([-10, height - 20]);
  return y(gridPoints[index]);
}

const styles = StyleSheet.create({
  yAxis: {
    position: 'absolute'
  }
});