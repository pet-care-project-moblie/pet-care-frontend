import { Colors } from '@/constants/Colors';
import { Dimensions } from '@/constants/Diamensions';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface RectangleImageDisplayProps {
    image?: string;
    width?: number | string;
    height?: number | string;
    onPress?: () => void;
    isRemove?: boolean;
    onRemove?: () => void;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'; // เพิ่ม resizeMode เพื่อให้สามารถควบคุมวิธีการแสดงผลของรูปได้
    style?: object; // เพิ่มการรองรับ style
}

export function RectangleImageDisplay({
    image,
    width = '100%',
    height = Dimensions.percentageHeight(25),
    onPress,
    isRemove = false,
    onRemove,
    resizeMode = 'cover',
    style,
}: RectangleImageDisplayProps) {
    const iconSize = typeof width === 'number' && typeof height === 'number' ? Math.min(width, height) * 0.6 : Dimensions.percentageWidth(10);

    return (
        <View style={[styles.container, style]}>
            {isRemove && (
                <TouchableOpacity
                    style={{ position: 'absolute', top: 0, left: -10, zIndex: 990 }}
                    onPress={onRemove}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name="close-circle"
                        size={30}
                        color={Colors.light.semantic.error}
                    />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onPress} disabled={!onPress} activeOpacity={0.7}>
                <View
                    style={[
                        styles.imageContainer,
                        {
                            width: width as any,
                            height: height as any,
                            backgroundColor: image
                                ? Colors.light.neutral[6]
                                : Colors.light.primary[4],
                        },
                    ]}
                >
                    {image ? (
                        <Image
                            source={{ uri: `${process.env.EXPO_PUBLIC_API_COULD_URL}/files?fileUrl=${image}` }}
                            style={styles.image}
                            resizeMode={resizeMode} // ใช้ resizeMode ที่รับมาจาก props
                        />
                    ) : (
                        <Ionicons
                            name="add-outline"
                            size={iconSize}
                            color={Colors.light.neutral[6]}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    imageContainer: {
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimensions.percentageWidth(3.5),
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
