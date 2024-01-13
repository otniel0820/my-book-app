import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddBook from "../screens/AddBook";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { Ionicons } from "@expo/vector-icons";
import Contact from "../screens/Contact";

type StackParamList = {
  Home: undefined;
  Contact: undefined;
  AddBook: undefined;
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
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#E5C3D1",
          },
          headerTitleStyle:{
            color:"#000",
          },
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarStyle: {
            backgroundColor: "#E5C3D1",
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
        component={Contact}
        options={{
          headerStyle: {
            backgroundColor: "#B6CCA1",
          },
          headerTitleStyle:{
            color:"#000",
          },
          title: "Contacto",
          tabBarLabel: "Contacto",
          tabBarStyle: {
            backgroundColor: "#B6CCA1",
            paddingTop:7
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="at-circle" size={26} color="black" />
            ) : (
              <Ionicons name="at" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="AddBook"
        component={AddBook}
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
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: "#F1ECCE",
          },
          headerTitleStyle:{
            color:"#000",
          },
          title: "Iniciar Sesion",
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
