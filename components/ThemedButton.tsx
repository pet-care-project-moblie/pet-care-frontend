import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, StyleSheet, ButtonProps } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { ThemedText } from "./ThemedText";
import { Dimensions } from "@/constants/Diamensions";

export type ThemedButtonProps = ButtonProps & {
  children?: React.ReactNode;
  title?: string | any;
  titleColor?: string;
  color?: string;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  titleType?:
  | "title1"
  | "title2"
  | "title3"
  | "body1"
  | "body2"
  | "body3"
  | "caption1"
  | "caption2";
};

export function ThemedButton({
  title,
  titleColor = Colors.light.neutral[6],
  color = Colors.light.semantic.success,
  width = '100%', // Responsive width by default
  height = Dimensions.percentageHeight(5.6), // Responsive height
  borderRadius = Dimensions.percentageWidth(3.5), // Responsive border radius
  titleType = "body1",
  children,
  ...props
}: ThemedButtonProps) {
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
    transform: [{ scale: scaleAnimation.value }, { translateX: translateX.value }],
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
            width: width as any,
            height: height,
            backgroundColor: color, borderRadius
          },
        ]}
      >
        {children ? children :
          <ThemedText color={titleColor} type={titleType}>
            {title}
          </ThemedText>
        }
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
