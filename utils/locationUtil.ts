import * as Location from "expo-location";

interface UserLocation {
  latitude: number;
  longitude: number;
}

export const getUserLocation = async (): Promise<UserLocation | null> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    return { latitude, longitude };
  } catch (error) {
    console.error("Error getting location: ", error);
    return null;
  }
};
