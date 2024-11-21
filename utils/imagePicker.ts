import axios from "axios";
import * as ImagePicker from "expo-image-picker";

export const pickImageFromLibrary = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    // aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const imageUri = result.assets[0].uri;

    const formData = new FormData() as any;

    formData.append("file", {
      uri: imageUri,
      name: `file.${imageUri.split(".").pop()}`,
      type: "image/jpeg",
    });

    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_COULD_URL}/files`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.filePath;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  }

  return null;
};
