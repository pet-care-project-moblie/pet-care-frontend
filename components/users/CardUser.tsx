import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { ThemedText } from "../ThemedText";
import { ThemedButton } from "../ThemedButton";
import { CircularImageDisplay } from "../CircularImageDisplay";
import { Dimensions } from "@/constants/Diamensions";

export type CardUserProps = {
  name: string;
  phone: string;
  image: string;
  isAgency?: boolean;
  onDeletePress?: () => void;
  onEditPress?: () => void;
  onPress?: () => void;
};

export function CardUser({
  isAgency,
  name,
  phone,
  image,
  onPress,
  onDeletePress,
  onEditPress,
}: CardUserProps) {
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
      onPress={onPress}
      activeOpacity={1}
    >
      <Animated.View style={[styles.cardContainer, animatedStyle]}>
        <View style={styles.detailContainer}>
          <View style={styles.image}>
            <CircularImageDisplay
              image={image}
              size={Dimensions.percentageWidth(20)}
            />
          </View>

          <View style={styles.textDetail}>
            <ThemedText type="title2" color={Colors.light.neutral[1]}>
              {name}
            </ThemedText>
            <ThemedText type="caption2" color={Colors.light.neutral[1]}>
              เบอร์โทรติดต่อ : {phone}
            </ThemedText>
          </View>
          {isAgency &&
            <View style={styles.buttonContainer}>
              <ThemedButton
                width={Dimensions.percentageWidth(18)}
                height={Dimensions.percentageHeight(4.5)}
                title="แก้ไข"
                titleType="caption1"
                color={Colors.light.semantic.warning}
                onPress={onEditPress}
              />
              <ThemedButton
                width={Dimensions.percentageWidth(18)}
                height={Dimensions.percentageHeight(4.5)}
                title="ลบ"
                titleType="caption1"
                color={Colors.light.semantic.error}
                onPress={onDeletePress}
              />
            </View>
          }
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.light.neutral[6],
    borderRadius: Dimensions.percentageWidth(3.5), // Dynamic border radius
    paddingLeft: Dimensions.percentageWidth(4), // Responsive padding
    width: Dimensions.percentageWidth(90), // Responsive width
    height: Dimensions.percentageHeight(14), // Responsive height
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: Dimensions.percentageHeight(2), // Responsive margin
  },
  detailContainer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
  },
  textDetail: {
    height: Dimensions.percentageHeight(6), // Dynamic height
    paddingLeft: Dimensions.percentageWidth(4), // Responsive padding
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    right: Dimensions.percentageWidth(1), // Responsive right position
    top: "80%",
    transform: [{ translateY: -6 }],
    flexDirection: "row",
    gap: 5
  },
});
