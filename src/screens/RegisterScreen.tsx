import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RootStackParamLoginList } from "../navigation/LoginStack";

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamLoginList,
  "Register"
>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const handleRegister = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>¿Ya tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginButton}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: "#27ae60",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  loginText: {
    fontSize: 16,
  },
  loginButton: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#27ae60",
  },
});

export default RegisterScreen;
