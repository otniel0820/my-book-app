import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamLoginList ={
    LoginScreen: undefined;
    Register: undefined;
    HomeScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamLoginList>();
const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' >
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
      title: "Iniciar sesion",
      headerStyle:{
        backgroundColor:"#F1ECCE"
      }
    }}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
      title: "Iniciar sesion",
      headerStyle:{
        backgroundColor:"#F1ECCE"
      }
    }}/>
    <Stack.Screen name="Register" component={RegisterScreen} options={{
      title:"Registro",
      headerStyle:{
        backgroundColor:"#F1ECCE"
      }
    }}/>
    
  </Stack.Navigator>
  )
}

export default LoginStack