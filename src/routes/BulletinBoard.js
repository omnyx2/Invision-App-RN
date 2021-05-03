import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryAnimation } from 'victory-native';
import Svg from 'react-native-svg'

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25, data: this.getData(0)
    };
  }

  componentDidMount() {
    let percent = 25;
    this.setStateInterval = window.setInterval(() => {
      percent += (Math.random() * 25);
      percent = (percent > 100) ? 0 : percent;
      this.setState({
        percent, data: this.getData(percent)
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              }
              }
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </Svg>
      </View>
    );
  }
}





const roomData = {
    userId: "00000001",
}
const ChattingRoom = () => {

}
const ChattingRoomList = () => {

}
const TopNavigator = () => {
  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column'
  },
  twoItemsContainer: {
    flex: 1,
    flexDirection: 'row'

  },
  warningTextContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    
  },
  chartContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  container1: {
    flex: 4,
  },
  container2 : {
    flex: 3,
    marginTop: 10,
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  container3: {
    flex: 0.5,
    flexDirection: 'row'
  },
  item1 : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 30,
    backgroundColor: "#183FCE"
  },
  resultButton: {
    borderWidth: 1,
    borderColor: "#184FCF",
    borderRadius: 2,
    justifyContent: 'center',
    marginRight:30
  }
})

const BulletinBoard = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.twoItemsContainer}>
          <TouchableOpacity style={styles.item1}>
            <Text>내 치아 관리2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item1}>
            <Text>내 검진 목록</Text>
          </TouchableOpacity>
        </View>
          
        
        <View style={styles.chartContainer}>

          <Chart />
          <Chart />
        </View>

 
          <View style={styles.container1}>
            <View style={styles.container3}>
              <View style={{flex: 1}}>
                <Text>파노라마 촬영일 2021.01.05</Text>
              </View>
              
              <TouchableOpacity style={styles.resultButton}>
                <Text>
                  결과 더보기
                </Text>
              </TouchableOpacity>
            </View>
          

            <View style={styles.container2}>
              <Text style={{ fontSize:20, marginBottom:10, fontWeight:'bold' }} >치과치료가 하루 빨리 필요합니다!</Text>
              <Text>치아 우식증과 치은염이 심화되는 주의 단계 입니다</Text>
              <Text>하루 빨리 치과 치료를 받으시길 권합니다</Text>
              <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{width:100, height: 40,justifyContent: 'center', alignItems:'center', backgroundColor: "blue", }}>
                  <Text>치아 검진하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.container1}>
            <TouchableOpacity>
              <Text>검진 통계</Text>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    </>
  )
}

export default BulletinBoard ;
