import { Colors } from '@/constants/Colors';
import { Dimensions } from '@/constants/Diamensions';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CircularImageDisplayProps {
    image?: string;
    size?: number | string;
    onPress?: () => void;
    children?: React.ReactNode;
}

export function CircularImageDisplay({ image, size = Dimensions.percentageWidth(25), onPress, children }: CircularImageDisplayProps) {

    const iconSize = typeof size === 'number' ? size * 0.6 : Dimensions.percentageWidth(15); // Dynamic icon size

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} disabled={!onPress} activeOpacity={0.7}>
                <View style={[styles.imageContainer, {
                    width: size as any,
                    height: size as any,
                    borderRadius: typeof size === 'number' ? size / 2 : Dimensions.percentageWidth(12.5),
                    backgroundColor: image ? Colors.light.neutral[6] : Colors.light.primary[4]
                }]}>
                    {image ? (
                        <Image
                            source={{ uri: `${process.env.EXPO_PUBLIC_API_COULD_URL}/files?fileUrl=${image}` }}
                            style={styles.image}
                        />
                    ) : (
                        <Ionicons
                            name="add-outline"
                            size={iconSize}
                            color={Colors.light.neutral[6]}
                        />
                    )}
                </View>
                {children}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    imageContainer: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
