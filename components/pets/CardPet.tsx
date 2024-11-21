import React, { useMemo, useRef } from 'react';
import { TouchableOpacity, StyleSheet, View, ImageBackground, Alert } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
} from 'react-native-reanimated';
import { ThemedText } from '../ThemedText';
import Paw from '@/assets/images/Paw';
import Male from '@/assets/images/Male';
import Female from '@/assets/images/Female';
import { Colors } from '@/constants/Colors';
import { Gender, ImagePetCardLink, Theme } from '@/constants/pet';
import { CircularImageDisplay } from '../CircularImageDisplay';
import { calculateAge } from '@/utils/calculateAge';
import { exportToPng } from '@/utils/exportToPng';
import Download from '@/assets/images/Download';

export type CardPetProps = {
    name: string;
    description?: string;
    identityNumber: string;
    birthDate: Date;
    image: string;
    onPress?: () => void;
    isDownloadable?: boolean;
    theme: Theme;
    gender: Gender;
};

const splitIdentityNumber = (identityNumber: string) => {
    return identityNumber.replace(/(.{4})/g, '$1 ').trim();
};

export function CardPet(props: CardPetProps) {
    const { name, description, identityNumber, birthDate, image, gender, theme, onPress, isDownloadable } = props;

    const age = useMemo(() => calculateAge(birthDate), [birthDate]);
    const identityNumberFormat = useMemo(() => splitIdentityNumber(identityNumber), [identityNumber]);

    const scaleAnimation = useSharedValue(1);
    const translateX = useSharedValue(0);
    const viewRef = useRef(null);

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

    const handleExport = () => {
        exportToPng(viewRef);
    };

    return (
        <View
            style={styles.container}
        >
            {
                isDownloadable &&
                <TouchableOpacity
                    style={{ position: 'absolute', top: -10, right: -20, zIndex: 990 }}
                    onPress={handleExport}
                    activeOpacity={0.7}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: Colors.light.semantic.success,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <Download
                            height={40}
                            color={Colors.light.neutral[6]}
                        />
                    </View>
                </TouchableOpacity>
            }
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={isDownloadable ? handleExport : onPress}
                activeOpacity={1}
            >
                <Animated.View style={[styles.cardContainer, animatedStyle]} ref={viewRef}>
                    <ImageBackground
                        source={ImagePetCardLink[theme as Theme]}
                        style={styles.backgroundImage}
                        imageStyle={{ borderRadius: 15, width: "auto", height: "100%" }}
                        resizeMode="cover"
                    >
                        <View style={styles.detailContainer}>
                            <ThemedText type='title1' color={Colors.light.neutral[6]}>{name}</ThemedText>
                            <ThemedText type='body2' color={Colors.light.neutral[6]}>{description}</ThemedText>
                            <ThemedText type='body2' color={Colors.light.neutral[6]}>{identityNumberFormat}</ThemedText>
                            <ThemedText type='title2' color={Colors.light.neutral[6]}>อายุ {age} </ThemedText>
                        </View>
                        <View style={styles.rightSection}>
                            <CircularImageDisplay
                                image={image}
                                size={100}
                            />
                            <View style={styles.genderIconContainer}>
                                <View style={styles.pawIcon}>
                                    <Paw color={Colors.light.neutral[6]} height={52} />
                                </View>
                                <View style={[styles.genderIcon, { bottom: gender === "female" ? 5 : 2.5 }]}>
                                    {gender === "female" ? <Female height={24} /> : <Male height={24} />}
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        width: 327,
        height: 201,
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 15,
        paddingLeft: 20,
        paddingRight: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
    },
    rightSection: {
        width: 100,
        height: "100%",
        paddingTop: 10,
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: 12,
    },
    detailContainer: {
        paddingTop: 10,
        height: 145,
        justifyContent: "space-between",
    },
    genderIconContainer: {
        width: 52,
        height: 52,
        marginRight: 7,
    },
    pawIcon: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    genderIcon: {
        position: "absolute",
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
});
