/* eslint-disable */
import React, {
  createContext, useContext, useState, useReducer
} from 'react';
// import SignInPage from '../components/pages/SignInPage';
// import 
export const userContext = createContext();

export const useUser = () => useContext(userContext);

const ACTIONS = {
  SIGN_IN:'sign-in',
  SIGN_OUT:'sign-out'
}
const reducer = (state,action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN: {
      return {...state,user:{...action.payload.userData}}
    }
    case ACTIONS.SIGN_OUT: {
      return undefined
    }
    default: {
      return state
    }
  }
}
function UserProvider(props) {
  const { children } = props;
  //usecontext
  // const [user, setUser] = useState();
  // const signIn = (userData) => setUser(userData);
  // const signOut = () => setUser(undefined);
  
  //usereducer
  const userInitialState = undefined
  const [user,dispatch] = useReducer(reducer,userInitialState)
  const signIn = (userData) => dispatch({type:ACTIONS.SIGN_IN, payload:{userData}})
  const signOut = ()=> dispatch({type:ACTIONS.SIGN_OUT})



  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
