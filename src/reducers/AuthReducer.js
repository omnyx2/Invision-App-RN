import React, { useReducer, createContext, useContext, useRef } from 'react';
import { Alert } from 'react-native';
import SignInNavigator from '../components/Navigators/AuthNavigator';

const initialsAuth = {
    userId: "FAE28SB1",
    tempAuthID: "01025902746",
    isSignIn: true,
    secretLV: 0
};

// check authorized user
function SignInValidate( state, id) {

  if( state.tempAuthID === id ) {
    return { ...state, isSignIn: true }
  } else {
    return { ...state } 
  }
}

function AuthReducer(state, action) {
  switch (action.type) {
    case 'SIGNIN':
      return SignInValidate(state, action.id)
    case 'SIGNOUT':
      return { ...state, isSignIn: false }  
    case 'SINGUP': 
      console.log("we need to sign up")
      return state
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialsAuth);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
      { children }
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('Cannot find AuthProvider');
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (!context) {
    throw new Error('Cannot find AuthProvider');
  }
  return context;
}

