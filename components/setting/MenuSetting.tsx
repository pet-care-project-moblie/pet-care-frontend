import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "@/constants/Diamensions";

export type MenuSettingProps = {
  titleText: string;
  onPress: () => void; // เพิ่ม onPress ใน props
};

export function MenuSetting(props: MenuSettingProps) {
  const { titleText, onPress } = props;
  const scaleAnimation = useSharedValue(1);

  const handlePressIn = () => {
    scaleAnimation.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 150 }),
        withTiming(1, { duration: 150 })
      ),
      3,
      false
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnimation.value }],
  }));

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} onPressIn={handlePressIn}>
      <View style={styles.cardContainer}>
        <View style={styles.menuItem}>
          <ThemedText type="body1" color={Colors.light.neutral[1]}>
            {titleText}
          </ThemedText>
          <View>
            <Ionicons
              size={25}
              name="chevron-forward-outline"
              color={Colors.light.neutral[5]}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.width,
    height: Dimensions.percentageHeight(6.5),
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.neutral[5],
    paddingHorizontal: Dimensions.percentageWidth(3),
  },
  menuItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
