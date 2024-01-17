import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RootStackParamLoginList } from "../navigation/LoginStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamLoginList,
  "LoginScreen"
>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerButton}>Registrarse</Text>
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
  loginButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  registerText: {
    fontSize: 16,
  },
  registerButton: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#3498db",
  },
});

export default LoginScreen;
