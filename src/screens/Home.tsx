import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getBooks, url } from "../data/api";
import { BookDTO } from "../domain/entities";
import { SearchBar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import DetailsBook from "./DetailsBook";

type SearchBarComponentProps = {};

const Home: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [books, setBooks] = useState<BookDTO[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookDTO[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

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
  }, []);

  const navigateToDetails = () => {
    
    const bookId = books.map(book=> book.id); 
    navigation.navigate("DetailsBook", { bookId });
  };

  const renderBookItem = ({ item }: { item: BookDTO }) => (
    <TouchableOpacity
      onPress={navigateToDetails}
      style={style.bookContainer}
    >
      <Image
        source={{ uri: item.fileImg }}
        style={style.bookImg}
        alt={item.id.toString()}
      />
      <Text style={style.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <SearchBar
        placeholder="Buscar"
        value={search}
        onChangeText={updateSearch}
        inputStyle={style.input}
        containerStyle={style.containerSearch}
        lightTheme
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBookItem}
        contentContainerStyle={style.flatListContainer}
        numColumns={2}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingBottom: 55,
    backgroundColor: "#ECE5E8",
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

export default Home;
