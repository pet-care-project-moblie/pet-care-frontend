import { Colors } from '@/constants/Colors';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BackIcon } from '../BackIcon';
import { ThemedText } from '../ThemedText';
import { Dimensions } from '@/constants/Dimensions'; // Responsive dimensions utility

export type HeaderProps = {
    title: string;
    onPressArrowBack: () => void;
    children?: React.ReactNode;
    color?: string;
    style?: any;
};

export function Header({ title, onPressArrowBack, children, color = Colors.light.neutral[1], style }: HeaderProps) {

    return (
        <View style={styles.containerHeader}>
            <View style={styles.containerBackButton}>
                <BackIcon color={color} onPress={onPressArrowBack} />
                <ThemedText
                    color={color}
                    type="title2"
                >
                    {title}
                </ThemedText>
            </View>
            <View
                style={style}
            >
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: Dimensions.percentageWidth(6),
        paddingTop: Platform.OS === 'ios' ? Dimensions.percentageHeight(2) : Dimensions.percentageHeight(7),
        marginBottom: Dimensions.percentageHeight(1.5),
    },
    containerBackButton: {
        flexDirection: "row",
        alignItems: "center",
    },
});
