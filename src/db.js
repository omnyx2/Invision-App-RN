export const dataType = {
  "0" : "병원 예약",
  "1" : "반드시 오늘할일",
  "2" : "이번주까지 할일들",
  "3" : "이번달에 할일들"
}

// id는 내부 일 들 인식용
// type은 위의 사향과 일치

export const chatDb = [{
  avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  title: "test1",
  isAlarmed: true,
  unreadMessageNum: 3,
  lastMessage: "gogoYou", 
  roomId: "0",
  lastSentTime: "오후 7:47"
},
{
  avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  title: "test1",
  isAlarmed: false,
  unreadMessageNum: 2,
  lastMessage: "gogoYou", 
  roomId: "2",
  lastSentTime: "오후 6:47"
},
{
  avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  title: "test1",
  isAlarmed: true,
  unreadMessageNum: 4,
  lastMessage: "gogoYou", 
  roomId: "3",
  lastSentTime: "오후 8:00"
},
{
  avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  title: "test1",
  isAlarmed: true,
  unreadMessageNum: 6,
  lastMessage: "gogoYou", 
  roomId: "4",
  lastSentTime: "오후 8:47"
},
{
  avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
  title: "test1",
  isAlarmed: true,
  unreadMessageNum: 7,
  lastMessage: "gogoYou", 
  roomId: "5",
  lastSentTime: "오전 12:47"
}
]

export const userDb = {
  "0001": {
    userName: "JACK",
    userId: "0001",
    userInfo: []
  },
  "0002": {
    userName: "MICKLE",
    userId: "0002",
    userInfo: []
   
  },
  "0003": {
    userName: "ELLSA",
    userId: "0003",
    userInfo: []
   
  },
  "0004": {
    userName: "YEAH",
    userId: "0004",
    userInfo: []
   
  }
}

export const todoStyle = 1
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
    id:4,
    type: 1,
    text: "아침 약먹기",
    isChecked: true,
    isAlarmed: false
  },
    { 
      id:5,
      type: 1,
      text: "점심 약먹기",
      isChecked: false,
      isAlarmed: false
    },
    { 
      id:6,
      type: 1,
      text: "병원에 전화하기",
      isChecked: false,
      isAlarmed: false
    },
    { 
      id:7,
      type: 1,
      text: "아침 약먹기",
      isChecked: true,
      isAlarmed: false
    },
      { 
        id:8,
        type: 1,
        text: "점심 약먹기",
        isChecked: false,
        isAlarmed: false
      },
      { 
        id:9,
        type: 1,
        text: "병원에 전화하기",
        isChecked: false,
        isAlarmed: false
      },
        { 
          id:10,
          type: 2,
          text: "병원에 전화하기",
          isChecked: false,
          isAlarmed: false
        },
        { 
          id:11,
          type: 2,
          text: "아침 약먹기",
          isChecked: true,
          isAlarmed: false
        },
          { 
            id:12,
            type: 2,
            text: "점심 약먹기",
            isChecked: false,
            isAlarmed: false
          },
          { 
            id:13,
            type: 2,
            text: "병원에 전화하기",
            isChecked: false,
            isAlarmed: false
          }
]

export const seoulArea = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
]

export const doctorMajorType = [

]

export const cureMajorType = [

]