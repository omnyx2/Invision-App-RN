import React from 'react';
import { scaleBand } from 'd3-scale';
import {Surface, Shape, Group,
  Text
} from '@react-native-community/art';


const generateCustomValue = () => {
  let tooth = [ "좌측상부", "좌측중부", "좌측하부", "우측상부", "우측중부", "우측하부",  ]
  let nums = [ "1", "2", "3", "4", "5", "6" ]
  return { tooth , nums  }
}

const getValuePosition = (index, values, width) => {
  let x = scaleBand().rangeRound([20, width - 75])
  x.domain(values.map(d => {
    return d;
  }));
  return x(values[index]);
}

export default function xAxis({ width, height }) {
  let axisValues = generateCustomValue();

  return (
    <Surface width={width} height={height}>
      <Group x={70}>
        {axisValues.tooth.map((item, index) => (
          <Text
            key={index}
            fill="#fff"
            /*x= THE NEXT STEP */
            x={getValuePosition(index, axisValues.tooth, width)}
            y={0}
            font={`12px Arial`}
            alignment='center'
            opacity={index === 6 ? 1: 0.6}
            >
              {item}
          </Text>
        ))}

        {axisValues.nums.map((item, index) => (
          <Text
            key={index}
            fill="#fff"
            /*x= THE NEXT STEP */
            x={getValuePosition(index, axisValues.nums, width)}
            y={15}
            font={`12px Arial`}
            alignment='center'
            opacity={index === 6 ? 1: 0.6}
            >
              {item}
          </Text>
        ))}
      </Group>
    </Surface>
  );
}