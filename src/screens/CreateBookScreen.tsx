import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { url } from "../data/api";
import { BookDTO } from "../domain/entities";
import { useNavigation } from "@react-navigation/native";

const CreateBookScreen = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      price: "",
      rating: "",
      genre: "",
      fileImg: "",
    },
  });

  const { goBack } = useNavigation();
  const [image, setImage] = useState<string>("");

  const pickImage = async () => {
    const { status: cameraStatus } =
      await ImagePicker.requestCameraPermissionsAsync();
    const { status: mediaStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== "granted" || mediaStatus !== "granted") {
      alert(
        "Lo siento, necesitamos permisos para acceder a la cámara y la galería para continuar."
      );
      return;
    }

    Alert.alert(
      "Seleccionar fuente de imagen",
      "¿Desde dónde desea seleccionar la imagen?",
      [
        {
          text: "Galería",
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

            if (!result.canceled) {
              setValue("fileImg", result.assets[0].uri);
              setImage(result.assets[0].uri);
            }
          },
        },
        {
          text: "Cámara",
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

            if (!result.canceled) {
              setValue("fileImg", result.assets[0].uri);
              setImage(result.assets[0].uri);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const createBook = async (data: any) => {
    try {
      const newBook = {
        ...data,
      };
      console.log(newBook);

      await axios.post(`${url}`, newBook);
      console.log("Libro creado exitosamente");
      setImage("");
      reset();
      goBack();
    } catch (error) {
      console.error("Error al crear el libro:", error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        overScrollMode="never"
      >
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <Image
              source={{
                uri: "https://www.samtrans.com/files/images/2021-09/default.jpg",
              }}
              style={styles.defaultImage}
            />
          )}
        </TouchableOpacity>

        <Controller
          control={control}
          render={({ field }) => (
            <View>
              <Text style={styles.label}>Título:</Text>
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
              {errors.title && (
                <Text style={styles.error}>{errors.root?.message}</Text>
              )}
            </View>
          )}
          name="title"
          rules={{
            required: {
              value: true,
              message: "Campo obrigatório",
            },
          }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
              <Text style={styles.label}>Autor:</Text>
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
              {errors.author && (
                <Text style={styles.error}>{errors.root?.message}</Text>
              )}
            </View>
          )}
          name="author"
          rules={{ required: "Campo obligatorio" }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
              <Text style={styles.label}>Descripción:</Text>
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
              {errors.description && (
                <Text style={styles.error}>{errors.root?.message}</Text>
              )}
            </View>
          )}
          name="description"
          rules={{ required: "Campo obligatorio" }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
              <Text style={styles.label}>Precio:</Text>
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
              {errors.price && (
                <Text style={styles.error}>{errors.root?.message}</Text>
              )}
            </View>
          )}
          name="price"
          rules={{ required: "Campo obligatorio" }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
              <Text style={styles.label}>Rating:</Text>
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
              {errors.rating && (
                <Text style={styles.error}>{errors.root?.message}</Text>
              )}
            </View>
          )}
          name="rating"
          rules={{ required: "Campo obligatorio" }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
              <Text style={styles.label}>Género:</Text>
              <TextInput
                style={styles.input}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
              {errors.genre && (
                <Text style={styles.error}>{errors.root?.message}</Text>
              )}
            </View>
          )}
          name="genre"
          rules={{ required: "Campo obligatorio" }}
          defaultValue=""
        />

        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={handleSubmit(createBook)}
        >
          <Text style={styles.buttonText}>Crear Libro</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dfe9ec'
  },
  scrollView: {
    padding: 16,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  defaultImage: {
    width: 190,
    height: 300,
    marginBottom: 16,
    borderRadius: 5,
  },
  previewImage: {
    width: 190,
    height: 300,
    marginBottom: 16,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonCreate: {
    backgroundColor: "#27ae60",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
});

export default CreateBookScreen;
