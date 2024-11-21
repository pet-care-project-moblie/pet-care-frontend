import React from "react";
import { TouchableOpacity, StyleSheet, TextProps } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { Dimensions } from "@/constants/Diamensions";

export type TextLinkProps = TextProps & {
    color?: string;
    titleType?:
    | "title1"
    | "title2"
    | "title3"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2";
    onPress?: () => void;
};

export function TextLink({
    color = Colors.light.primary[1],
    titleType = "body1",
    onPress,
    ...props
}: TextLinkProps) {
    const scaleAnimation = useSharedValue(1);

    const handlePressIn = () => {
        scaleAnimation.value = withRepeat(
            withSequence(
                withTiming(1.05, { duration: 150 }),
                withTiming(1, { duration: 150 })
            ),
            1,
            false
        );
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scaleAnimation.value }],
    }));

    return (
        <TouchableOpacity
            onPressIn={handlePressIn}
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.linkContainer}
        >
            <Animated.View style={animatedStyle}>
                <ThemedText style={[styles.linkText, { color }]} type={titleType}>
                    {props.children}
                </ThemedText>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    linkContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    linkText: {
        textDecorationLine: "underline",
        color: Colors.light.primary[1],
        fontSize: Dimensions.percentageWidth(3.6),
    },
});
