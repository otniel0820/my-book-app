import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getBooks } from "../data/api";
import { BookDTO } from "../domain/entities";
import { SearchBar } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/HomeStack";
import { useIsFocused } from '@react-navigation/native';



type HomeProps = NativeStackScreenProps<RootStackParamList, "HomeScreen">



const HomeScreen = ({navigation}:HomeProps) => {
  const [books, setBooks] = useState<BookDTO[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookDTO[]>([]);
  const [search, setSearch] = useState("");
  const isFocused = useIsFocused(); 

  const updateSearch = (query: string) => {
    setSearch(query);
    filterBooks(query);
  };

  const filterBooks = (query: string) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  useEffect(() => {
    const booksData = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    booksData();
  }, [isFocused]);

  const navigateToDetails = (selectedBook: BookDTO) => {
    navigation.navigate("Details", { book: selectedBook });
  };
  const renderBookItem = ({ item }: { item: BookDTO }) => (
    <TouchableOpacity
      onPress={()=>navigateToDetails(item)}
      style={styles.bookContainer}
    >
      <Image
        source={{ uri: item.fileImg }}
        style={styles.bookImg}
        alt={item.id.toString()}
      />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar"
        value={search}
        onChangeText={updateSearch}
        inputStyle={styles.input}
        containerStyle={styles.containerSearch}
        lightTheme
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBookItem}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 55,
    backgroundColor: "#dbf0f0",
  },
  flatListContainer: {
    paddingVertical: 16,
    paddingHorizontal: 5,
  },
  containerSearch: {
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  bookContainer: {
    flex: 1,
    margin: 8,
    gap: 15,
  },
  text: {
    textAlign: "left",
  },
  bookImg: {
    width: 190,
    height: 300,
    borderRadius: 3,
  },
  input: {
    margin: 5,
    color: "#000",
  },
});

export default HomeScreen;
