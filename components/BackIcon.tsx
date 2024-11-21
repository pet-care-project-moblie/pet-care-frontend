import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { Dimensions } from '@/constants/Diamensions';

interface BackIconProps {
    onPress: () => void;
    color?: string;
    size?: number; // Optional size prop
}

export function BackIcon({ onPress, color, size = Dimensions.percentageWidth(6) }: BackIconProps) { // Dynamic size, default 6% of screen width
    const scaleValue = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleValue.value }],
        };
    });

    const handlePressIn = () => {
        scaleValue.value = withSpring(0.95);
    };

    const handlePressOut = () => {
        scaleValue.value = withSpring(1);
        onPress();
    };

    return (
        <View style={{ marginRight: Dimensions.percentageWidth(4) }}>
            <Animated.View style={animatedStyle}>
                <TouchableOpacity
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    activeOpacity={0.7}
                >
                    <Ionicons size={size} name="chevron-back" color={color || Colors.light.neutral[6]} />
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};
