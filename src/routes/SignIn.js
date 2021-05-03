import React, { useEffect, useState, useContext , createContext, Children, useReducer } from 'react';
import { Platform, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthDispatch } from '../reducers/AuthReducer'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTop: {
    flex: 1,
    alignItems: 'center'

  },
  containerMiddle: {
    flex: 1,
    
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 20
  },
  logoBox: {
    width: '20%'
  },
  logo: {
    width: '20%',
    resizeMode:'contain'
    
  },
  smallTextBox0: {
  
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  smallTextBox1: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  smallTextOutterBox: {
    flex: 1,
    flexDirection: "row"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor:  '#6047CB',
    borderWidth: 1,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor:  '#6047CB',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  submitButtonText: {
    color: "white"
  }
});

const SignInScreen = ({navigation}) => {
  const [phoneNum, setPhoneNum] = useState()

  const dispatch = useAuthDispatch();
  const onSignIn = (id) => dispatch({ type: 'SIGNIN', id })
  
  const logoUri = '../statics/invisionlogo1.png'

  return(
    <>
      <View  style={styles.container}>
      <View style={styles.containerTop} >
        <Image source={require(logoUri)} style={styles.logo} />
        
      </View>

      <View style={styles.containerMiddle} >
        <TouchableOpacity>
          <TextInput 
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="핸드폰 번호 입력"
            placeholderTextColor= '#6047CB'
            autoCapitalize="none"
            onChangeText={ input => setPhoneNum(input) }
          />
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity onPress = { () => onSignIn(phoneNum) }>
          <View style={ styles.submitButton}>
            <Text style={ styles.submitButtonText}>
              로그인
            </Text>
          </View>
        </TouchableOpacity>

        {/* Sign Up & Fwd */}
        <View style={styles.smallTextOutterBox}>
          <TouchableOpacity
            onPress = { () => navigation.push('SignUp')}
            style={ styles.smallTextBox0}>
            <Text style={ styles.snText}>
              회원가입
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallTextBox1}
            onPress={ () => navigation.navigate('ForgotPwd')}>
            <Text> 비밀번호가 기억나지 않으신가요? </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* bottom part of container */}
      <View style={styles.containerBottom}>
        <View > 
          <Text style={styles.bottomText1}> We Are</Text>
        </View>
        <View> 
          <Text style={styles.bottomText2}> INVISION </Text>
        </View>
      </View>
    </View>
    </>

  )

}


export default SignInScreen