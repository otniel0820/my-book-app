import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri:'https://i.ibb.co/M1ZdDtR/Creame-un-logo-de-una-aplicacion-de-libros-digit.jpg'}} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Acerca de nosotros</Text>
      <Text style={styles.text}>
        Bienvenido a nuestra aplicación de libros. Somos apasionados por la lectura y nos esforzamos por proporcionar una experiencia excepcional a todos nuestros usuarios.
      </Text>
      <Text style={styles.text}>
        Explora nuestra amplia selección de libros y descubre nuevas historias cautivadoras.
      </Text>
      <Text style={styles.contact}>Contáctanos:</Text>
      <Text style={styles.contact}>Correo electrónico: info@miappdelibros.com</Text>
      <Text style={styles.contact}>Teléfono: +123 456 7890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor:'#d4dccd'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
    borderRadius:10,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default AboutScreen;
