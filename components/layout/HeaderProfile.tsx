import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Notification from "@/assets/images/Notification";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useUser } from "@/app/ctx";
import { router } from "expo-router";
import { Dimensions } from "@/constants/Diamensions";
import { CircularImageDisplay } from "../CircularImageDisplay";

export function HeaderProfile() {
  const user = useUser();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapsibleHeight = useSharedValue(0);

  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
    collapsibleHeight.value = withTiming(
      isCollapsed ? 0 : Dimensions.percentageHeight(12),
      { duration: 300 }
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: collapsibleHeight.value,
    opacity: withTiming(!isCollapsed ? 0 : 1, { duration: 300 }),
  }));

  const handleLogout = () => {
    user.removeToken();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handlePress} activeOpacity={1}>
          <View style={styles.imageContainer}>
            <CircularImageDisplay
              image={user.data?.profile?.images?.[0]}
              size={Dimensions.percentageWidth(14.1)}
            />
          </View>
        </TouchableOpacity>
        <ThemedText color={Colors.light.neutral[6]} type="body1">
          {user.data?.username}
        </ThemedText>
        <Animated.View style={[styles.collapsibleContainer, animatedStyle]}>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <ThemedText color={Colors.light.neutral[1]} type="caption1">
              ออกจากระบบ
            </ThemedText>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.notificationIcon}>
        <Notification height={28} color={Colors.light.neutral[6]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 24,
    position: 'relative',
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 18,
  },
  notificationIcon: {
    marginRight: 10,
    width: 28,
    height: 28,
  },
  collapsibleContainer: {
    position: "absolute",
    top: 30,
    left: 30,
    backgroundColor: Colors.light.neutral[6],
    borderRadius: 15,
    padding: 10,
    zIndex: 999,
    elevation: 10,
    overflow: "visible",
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: Colors.light.neutral[3],
  },
});

