import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";
import AboutScreen from "../screens/AboutScreen";
import HomeStack from "./HomeStack";
import CreateBookScreen from "../screens/CreateBookScreen";
import LoginStack from "./LoginStack";

export type StackParamList = {
  Home: undefined;
  Contact: undefined;
  CreateBook: undefined;
  Login: undefined;
};
const Tab = createBottomTabNavigator<StackParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ebddde",
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 11,
        },

        headerTitleStyle: {
          color: "#111010",
          fontWeight: "600",
          
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown:false,
          headerTitleStyle:{
            color:"#000",
          },
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarStyle: {
            backgroundColor: "#6FC3C0",
            paddingTop:7
            
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={26} color="black" />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={AboutScreen}
        options={{
          headerStyle: {
            backgroundColor: "#B6CCA1",
          },
          headerTitleStyle:{
            color:"#000",
          },
          title: "Sobre Nosotros",
          tabBarLabel: "Sobre Nosotros",
          tabBarStyle: {
            backgroundColor: "#B6CCA1",
            paddingTop:7
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="information-circle-sharp" size={27} color="black" />
            ) : (
              <Ionicons name="information-circle-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="CreateBook"
        component={CreateBookScreen}
        options={{
          headerStyle: {
            backgroundColor: "#9FC2CC",
          },
          headerTitleStyle:{
            color:"#000",
          },
          title: "Agregar Libro",
          tabBarLabel: "Agregar Libro",
          tabBarStyle: {
            backgroundColor: "#9FC2CC",
            paddingTop:7
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="add-circle" size={26} color="black" />
            ) : (
              <Ionicons name="add-circle-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginStack}
        options={{
         headerShown: false,
          tabBarLabel: "Iniciar Sesion",
          tabBarStyle: {
            backgroundColor: "#F1ECCE",
            paddingTop:7
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-circle-sharp" size={26} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
