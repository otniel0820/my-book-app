import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabsNavigator from "./Tab";
import { View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
export default Index;
