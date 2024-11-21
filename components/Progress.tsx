import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import CatMouse from '@/assets/images/cat/CatMouse';
import { Dimensions } from '@/constants/Diamensions';


export function Progress() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <CatMouse height={Dimensions.percentageHeight(30)} />
                </View>
                <View style={styles.containerText}>
                    <ThemedText fontFamily='NotoSansThai' color={Colors.light.primary[1]} type="title2">
                        กำลังโหลด...
                    </ThemedText>
                    <ThemedText fontFamily='NotoSansThai' color={Colors.light.neutral[1]} type='title3'>
                        กรุณารอสักครู่
                    </ThemedText>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: Dimensions.width,
        height: Dimensions.height,
        backgroundColor: Colors.light.neutral[6],
    },
    containerText: {
        marginTop: Dimensions.percentageHeight(1.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        marginTop: Dimensions.percentageHeight(15),
    },
    imageContainer: {
        width: Dimensions.percentageWidth(80),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
