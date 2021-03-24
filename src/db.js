export const dataType = {
  "0" : "병원 예약",
  "1" : "반드시 오늘할일",
  "2" : "이번주에 할일들",
  "3" : "이번달에 할일들"
}

// id는 내부 일 들 인식용
// type은 위의 사향과 일치


export const initialTodos = [
    { 
      id:0,
      type: 0,
      text: "수술 1시간 전 약먹기",
      isChecked: true,
      isAlarmed: false
    },
    { 
      id:1,
      type: 0,
      text: "병원 예약 04.17 4시",
      isChecked: true,
      isAlarmed: false
    },
    { 
      id:2,
      type: 0,
      text: "수술 1시간 전 출발하기",
      isChecked: true,
      isAlarmed: false
    },
    { 
      id:3,
      type: 0,
      text: "수술 2시간 전 금주하기",
      isChecked: true,
      isAlarmed: false
    }
  ,
  { 
    id:5,
    type: 1,
    text: "아침 약먹기",
    isChecked: true,
    isAlarmed: false
  },
    { 
      id:6,
      type: 1,
      text: "점심 약먹기",
      isChecked: false,
      isAlarmed: false
    },
    { 
      id:7,
      type: 1,
      text: "병원에 전화하기",
      isChecked: false,
      isAlarmed: false
    }
]
