import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { Dimensions } from '@/constants/Diamensions';
export type ThemedDatePickerProps = {
    label?: string;
    helperText?: string;
    error?: boolean;
    placeholder?: string;
    value?: Date;
    onChange?: (date: Date) => void;
    borderColor?: string;
    borderRadius?: number;
    focusedBorderColor?: string;
    width?: number | string;
    mode?: 'date' | 'time' | 'datetime';
    display?: 'default' | 'spinner' | 'calendar' | 'clock';
    minimumDate?: Date | undefined;
    maximumDate?: Date | undefined;
    disabled?: boolean;
};

export function ThemedDatePicker({
    label,
    helperText,
    error,
    placeholder = 'Select Date',
    value,
    onChange,
    borderColor = Colors.light.neutral[5],
    borderRadius = Dimensions.percentageWidth(3.5),
    width = '100%',
    focusedBorderColor = Colors.light.neutral[5],
    mode = 'date',
    display = 'default',
    minimumDate = new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDate()),
    maximumDate = new Date(),
    disabled
}: ThemedDatePickerProps) {
    const [showPicker, setShowPicker] = useState(false);
    const borderAnimation = useSharedValue(1);
    const focused = useSharedValue(false);

    const handleFocus = () => {
        focused.value = !focused.value;
        borderAnimation.value = !focused.value ? withTiming(2, { duration: 150 }) : withTiming(1, { duration: 150 });
        setShowPicker(!showPicker);
    };

    const handleChange = (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            if (event.type === 'set') {
                const currentDate = selectedDate || value;
                setShowPicker(false);
                if (onChange) {
                    onChange(currentDate as any);
                }
            } else {
                setShowPicker(false);
            }
        } else {
            const currentDate = selectedDate || value;
            if (onChange) {
                onChange(currentDate as any);
            }
        }
    };

    const animatedStyle = useAnimatedStyle(() => ({
        borderWidth: borderAnimation.value,
        borderColor: focused.value ? focusedBorderColor : (error ? 'red' : borderColor),
    }));

    return (
        <View style={[styles.container, { width: width as any }]}>
            {label && <ThemedText type='caption1' style={styles.label}>{label}</ThemedText>}
            <Animated.View style={[styles.inputContainer, animatedStyle, { borderColor: disabled ? Colors.light.neutral[4] : Colors.light.primary[1], borderRadius }]}>
                <TouchableOpacity onPress={handleFocus} style={styles.touchable} disabled={disabled}>
                    <ThemedText type='body1' style={styles.dateText}>
                        {value ? value.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }) : placeholder}
                    </ThemedText>
                    <FontAwesome name="calendar" size={Dimensions.percentageWidth(5)} color={Colors.light.neutral[1]} />
                </TouchableOpacity>
            </Animated.View>
            {helperText && <ThemedText type='caption1' style={[styles.helperText, error ? styles.errorText : null]}>{helperText}</ThemedText>}
            {showPicker && (
                <DateTimePicker
                    value={value || new Date()}
                    mode={mode}
                    display={display}
                    onChange={handleChange}
                    timeZoneName='Asia/Bangkok'
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    disabled={disabled}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: Dimensions.percentageHeight(1.5), // Responsive margin
    },
    label: {
        color: Colors.light.neutral[3],
        marginBottom: Dimensions.percentageHeight(0.8), // Responsive margin
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: Dimensions.percentageHeight(1.3), // Responsive padding
        paddingHorizontal: Dimensions.percentageWidth(3), // Responsive padding
        borderColor: Colors.light.neutral[1],
        backgroundColor: Colors.light.neutral[6],
    },
    touchable: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        fontSize: Dimensions.percentageWidth(4), // Responsive font size
        color: Colors.light.neutral[1],
    },
    helperText: {
        fontSize: Dimensions.percentageWidth(3.2), // Responsive font size
        color: Colors.light.neutral[3],
        marginTop: Dimensions.percentageHeight(0.8),
    },
    errorText: {
        color: Colors.light.semantic.error,
    },
});
