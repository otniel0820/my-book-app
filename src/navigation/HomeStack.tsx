import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsBookScreen from '../screens/DetailsBookScreen';
import EditBookScreen from '../screens/EditBookScreen';
import { BookDTO } from '../domain/entities';

export type RootStackParamList ={
    HomeScreen: undefined;
    Details: { book: BookDTO };
    Edit: { book: BookDTO } | undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' >
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
      title: "Inicio",
      headerStyle:{
        backgroundColor:"#6FC3C0"
      }
    }}/>
    <Stack.Screen name="Details" component={DetailsBookScreen} options={{
      title:"Detalles"
    }}/>
    <Stack.Screen name="Edit" component={EditBookScreen} options={{
      title:"Editar"
    
    }}/>
  </Stack.Navigator>
  )
}

export default HomeStack