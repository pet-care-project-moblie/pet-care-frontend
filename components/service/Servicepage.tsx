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


export type ServicePageProps = {
  titleText: string;
  onPress: () => void; // เพิ่ม onPress ใน props
};

export function ServicePage(props: ServicePageProps) {
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
        <View>
        <ThemedText fontFamily='Poppins' color={Colors.light.neutral[1]} type='caption1'>
            {titleText}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.width,
    alignItems: "center",
    position: "relative",
  },
});
