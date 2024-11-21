import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, StyleSheet, ButtonProps, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { ThemedText } from "./ThemedText";
import { Dimensions } from "@/constants/Diamensions";

export type IconButtonProps = ButtonProps & {
  icon: React.ReactNode;
  title: string;
  titleColor?: string;
  width?: number | string;
  height?: number | string;
  style?: any;
};

export function IconButton({
  icon,
  title,
  color = Colors.light.neutral[6],
  width = Dimensions.percentageWidth(25), // Dynamic width, default to 25% of screen width
  height = Dimensions.percentageHeight(12), // Dynamic height, default to 12% of screen height
  titleColor = Colors.light.neutral[3],
  ...props
}: IconButtonProps) {
  const scaleAnimation = useSharedValue(1);
  const translateX = useSharedValue(0);

  const handlePressIn = () => {
    scaleAnimation.value = withTiming(0.98, { duration: 100 });
    translateX.value = withTiming(-5, { duration: 100 });
  };

  const handlePressOut = () => {
    scaleAnimation.value = withTiming(1, { duration: 200 });
    translateX.value = withSequence(
      withTiming(5, { duration: 150 }),
      withTiming(0, { duration: 150 })
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scaleAnimation.value },
      { translateX: translateX.value },
    ],
  }));

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      {...props}
    >
      <Animated.View
        style={[
          animatedStyle,
          styles.buttonContainer,
          {
            backgroundColor: color,
            width: width as any,
            height: height as any,
          },
        ]}
      >
        <View style={styles.iconContainer}>{icon}</View>
        <ThemedText
          style={styles.buttonText}
          color={titleColor}
          type="caption2"
        >
          {title}
        </ThemedText>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    paddingTop: Dimensions.percentageHeight(1),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  iconContainer: {
    width: Dimensions.percentageWidth(10),
    height: Dimensions.percentageWidth(10),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    maxWidth: Dimensions.percentageWidth(18),
    textAlign: "center",
  },
});
