import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { Dimensions } from '@/constants/Diamensions';

export type ThemedTextInputProps = TextInputProps & {
    disabled?: boolean;
    label?: string;
    helperText?: string;
    error?: boolean;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onChangeText?: (text: string) => void;
    value?: string;
    name?: string;
    icon?: 'search' | 'dropdown' | 'currency';
    actionIcon?: 'clear' | 'arrow';
    iconPosition?: 'left' | 'right';
    onIconPress?: () => void;
    borderColor?: string;
    borderRadius?: number;
    focusedBorderColor?: string;
    width?: number | string;
};

export const ThemedTextInput: React.FC<ThemedTextInputProps> = ({
    label,
    helperText,
    icon,
    actionIcon,
    iconPosition = 'left',
    onIconPress,
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

    const renderIcon = () => {
        const iconSize = Dimensions.percentageWidth(5.4);
        const iconColor = Colors.light.neutral[4];
        switch (icon) {
            case 'search':
                return <FontAwesome name="search" size={iconSize} color={iconColor} />;
            case 'dropdown':
                return <FontAwesome name="caret-down" size={iconSize} color={iconColor} />;
            case 'currency':
                return <ThemedText type='body1' style={styles.currencyText}>USD</ThemedText>;
            default:
                return null;
        }
    };

    const renderActionIcon = () => {
        if (!actionIcon) return null;
        const iconSize = Dimensions.percentageWidth(5);
        return (
            <TouchableOpacity onPress={onIconPress}>
                <FontAwesome
                    name={actionIcon === 'clear' ? 'times' : 'arrow-right'}
                    size={iconSize}
                    color={Colors.light.neutral[1]}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, { width: width as any }]}>
            {label && <ThemedText type='caption1' style={styles.label}>{label}</ThemedText>}
            <Animated.View style={[styles.inputContainer, animatedStyle, { borderRadius }]}>
                {icon && iconPosition === 'left' && <View style={styles.iconLeft}>{renderIcon()}</View>}
                <TextInput
                    style={[styles.input, icon && iconPosition === 'left' && styles.inputWithIcon]}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.light.neutral[4]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChangeText={onChangeText}
                    {...props}
                />
                {icon && iconPosition === 'right' && <View style={styles.iconRight}>{renderIcon()}</View>}
                {actionIcon && <View style={styles.actionIcon}>{renderActionIcon()}</View>}
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
        color: '#1abc9c'
    },
    label: {
        color: '#1abc9c',
        marginBottom: Dimensions.percentageHeight(0.5),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: Dimensions.percentageHeight(1.3),
        paddingHorizontal: Dimensions.percentageWidth(3),
        backgroundColor: Colors.light.neutral[6],
    },
    input: {
        flex: 1,
        fontSize: Dimensions.percentageWidth(4),
        color: Colors.light.neutral[1],
        fontFamily: "NotoSansThai_500Medium",
    },
    inputWithIcon: {
        marginLeft: Dimensions.percentageWidth(2),
    },
    iconLeft: {
        marginRight: Dimensions.percentageWidth(2),
    },
    iconRight: {
        marginLeft: Dimensions.percentageWidth(2),
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
    currencyText: {
        fontSize: Dimensions.percentageWidth(4),
        color: '#1abc9c',
    },
});
