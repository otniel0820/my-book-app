import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/HomeStack";
import { url } from "../data/api";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailsBookScreen: React.FC<DetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { book: initialBook } = route.params;
  const [book, setBook] = useState(initialBook);

  const deleteBook = async () => {
    try {
      await axios.delete(`${url}/${book.id}`);
      console.log('Libro eliminado exitosamente');
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
    }
  };

  const fetchUpdatedBook = async () => {
    try {
      const updatedBook = await axios.get(`${url}/${book.id}`);
      setBook(updatedBook.data);
    } catch (error) {
      console.error('Error al obtener el libro actualizado:', error);
    }
  };

  // Llamamos a fetchUpdatedBook cuando la pantalla se enfoca
  useFocusEffect(
    useCallback(() => {
      fetchUpdatedBook();
    }, [])
  );

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: book.fileImg }}
        style={styles.bookImg}
        alt={book.id.toString()}
      />
      <Text style={styles.text}>{book.title}</Text>

      <FlatList
        data={[
          `Author: ${book.author}`,
          `Descripcion: ${book.description}`,
          `Price: ${book.price}`,
          `Rating: ${book.rating}`,
          `Genre: ${book.genre}`,
        ]}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        style={styles.flatListContainer}
      />

      <TouchableOpacity
        style={styles.buttonUpdate}
        onPress={() => {
          navigation.navigate("Edit", { book });
        }}
      >
        <Text style={styles.buttonText}>Modificar Libro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonDeleted}
        onPress={deleteBook}
      >
        <Text style={styles.buttonText}>Eliminar Libro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    marginTop: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  bookImg: {
    width: 190,
    height: 300,
    borderRadius: 3,
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonUpdate: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonDeleted: {
    backgroundColor: "#b10813",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DetailsBookScreen;
