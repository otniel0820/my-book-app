import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/HomeStack";
import { BookDTO } from "../domain/entities";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { url } from "../data/api";

type EditScreenProps = NativeStackScreenProps<RootStackParamList, "Edit">;

const EditBookScreen: React.FC<EditScreenProps> = ({ route, navigation }) => {
  const book = route.params?.book as BookDTO | undefined;
  const [image, setImage] = useState<string>("");
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: book,
  });

  const pickImage = async () => {
    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (cameraStatus !== 'granted' || mediaStatus !== 'granted') {
      alert('Lo siento, necesitamos permisos para acceder a la cámara y la galería para continuar.');
      return;
    }
  
    Alert.alert(
      'Seleccionar fuente de imagen',
      '¿Desde dónde desea seleccionar la imagen?',
      [
        {
          text: 'Galería',
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
  
            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }
          },
        },
        {
          text: 'Cámara',
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
  
            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const onSubmit = async (data: BookDTO) => {
    try {
      if (image) data.fileImg = image;
      await axios.put(`${url}/${book?.id}`, data);

      navigation.goBack();
    } catch (error) {
      console.error("Error al actualizar el libro:", error);
    }
  };

  const renderItem = () => (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={{ uri: image || book?.fileImg }}
          style={styles.bookImg}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            onChangeText={(text) => setValue("title", text)}
            value={field.value}
          />
        )}
        name="title"
        rules={{ required: "Title is required" }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter description"
            onChangeText={(text) => setValue("description", text)}
            value={field.value}
          />
        )}
        name="description"
        rules={{ required: "Description is required" }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter author"
            onChangeText={(text) => setValue("author", text)}
            value={field.value}
          />
        )}
        name="author"
        rules={{ required: "Author is required" }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter price"
            onChangeText={(text) => setValue("price", text)}
            value={field.value}
          />
        )}
        name="price"
        rules={{ required: "Price is required" }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter rating"
            onChangeText={(text) => setValue("rating", text)}
            value={field.value}
          />
        )}
        name="rating"
        rules={{ required: "Rating is required" }}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter genre"
            onChangeText={(text) => setValue("genre", text)}
            value={field.value}
          />
        )}
        name="genre"
        rules={{ required: "Genre is required" }}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {renderItem()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  bookImg: {
    alignSelf: "center",
    width: 190,
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#3498db",
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

export default EditBookScreen;
