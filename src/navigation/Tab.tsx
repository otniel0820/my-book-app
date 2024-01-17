import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import HomeStack from "./HomeStack";
import CreateBookScreen from "../screens/CreateBookScreen";
import LoginStack from "./LoginStack";
import { StyleSheet } from "react-native";

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
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabel,
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={26} color="black" />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
          tabBarStyle: styles.tabBar,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={AboutScreen}
        options={{
          title: "Sobre Nosotros",
          tabBarLabel: "Sobre Nosotros",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="information-circle-sharp" size={27} color="black" />
            ) : (
              <Ionicons name="information-circle-outline" size={24} color="black" />
            ),
          tabBarStyle: styles.tabBar,
        }}
      />
      <Tab.Screen
        name="CreateBook"
        component={CreateBookScreen}
        options={{
          title: "Agregar Libro",
          tabBarLabel: "Agregar Libro",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="add-circle" size={26} color="black" />
            ) : (
              <Ionicons name="add-circle-outline" size={24} color="black" />
            ),
          tabBarStyle: styles.tabBar,
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginStack}
        options={{
          tabBarLabel: "Iniciar Sesión",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-circle-sharp" size={26} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
          tabBarStyle: styles.tabBar,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#6FC3C0",
    paddingTop: 7,
  },
  tabBarLabel: {
    fontWeight: "700",
    fontSize: 11,
  },
  headerTitle: {
    color: "#111010",
    fontWeight: "600",
  },
});

export default TabsNavigator;
