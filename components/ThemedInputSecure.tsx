import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { Dimensions } from '@/constants/Diamensions';

export type ThemedInputSecureProps = TextInputProps & {
    disabled?: boolean;
    label?: string;
    helperText?: string;
    error?: boolean;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onChangeText?: (text: string) => void;
    value?: string;
    name?: string;
    borderColor?: string;
    borderRadius?: number;
    focusedBorderColor?: string;
    width?: number | string;
};

export const ThemedInputSecure: React.FC<ThemedInputSecureProps> = ({
    label,
    helperText,
    borderColor = Colors.light.primary[2],
    borderRadius = Dimensions.percentageWidth(3.5),
    width = '100%',
    focusedBorderColor = Colors.light.primary[1],
    placeholder = 'Text input',
    value,
    error,
    onChangeText,
    onBlur,
    ...props
}) => {
    const borderAnimation = useSharedValue(1);
    const focused = useSharedValue(false);
    const [isSecure, setIsSecure] = useState(true);

    const handleFocus = () => {
        focused.value = true;
        borderAnimation.value = withTiming(2, { duration: 150 });
    };

    const handleBlur = () => {
        focused.value = false;
        borderAnimation.value = withTiming(1, { duration: 150 });
    };

    const animatedStyle = useAnimatedStyle(() => ({
        borderWidth: borderAnimation.value,
        borderColor: focused.value ? focusedBorderColor : error ? 'red' : borderColor,
    }));


    const toggleSecureInput = () => {
        setIsSecure(!isSecure);
    };

    return (
        <View style={[styles.container, { width: width as any }]}>
            {label && <ThemedText type='caption1' style={styles.label}>{label}</ThemedText>}
            <Animated.View style={[styles.inputContainer, animatedStyle]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.light.neutral[4]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    {...props}
                />
                <TouchableOpacity onPress={toggleSecureInput} style={styles.actionIcon}>
                    <Ionicons
                        name={isSecure ? 'eye-off' : 'eye'}
                        size={Dimensions.percentageWidth(5)}
                        color={Colors.light.primary[1]}
                    />
                </TouchableOpacity>
            </Animated.View>
            {helperText && (
                <ThemedText type='caption1' style={[styles.helperText, error && styles.errorText]}>
                    {helperText}
                </ThemedText>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: Dimensions.percentageHeight(1.2),
    },
    label: {
        color: Colors.light.neutral[3],
        marginBottom: Dimensions.percentageHeight(0.5),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: Dimensions.percentageHeight(1.3),
        paddingHorizontal: Dimensions.percentageWidth(3),
        backgroundColor: Colors.light.neutral[6],
        borderRadius: Dimensions.percentageWidth(3.5),
    },
    input: {
        flex: 1,
        fontSize: Dimensions.percentageWidth(4),
        color: Colors.light.neutral[1],
        fontFamily: "NotoSansThai_500Medium",
    },
    actionIcon: {
        marginLeft: Dimensions.percentageWidth(2),
    },
    helperText: {
        fontSize: Dimensions.percentageWidth(3.2),
        color: Colors.light.neutral[3],
        marginTop: Dimensions.percentageHeight(0.8),
    },
    errorText: {
        color: Colors.light.semantic.error,
    },
});