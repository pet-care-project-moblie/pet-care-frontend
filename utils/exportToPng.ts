import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

export const exportToPng = async (viewRef: any) => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "You need to enable permission to save images to the gallery."
      );
      return;
    }

    const uri = await captureRef(viewRef, {
      format: "png",
      quality: 1,
    });

    await MediaLibrary.createAssetAsync(uri);

    Alert.alert("Success", "Image saved to gallery!");
  } catch (e) {
    console.error("Error saving image:", e);
    Alert.alert("Error", "Failed to save the image.");
  }
};
