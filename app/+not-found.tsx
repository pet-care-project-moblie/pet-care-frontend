import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DogSad from '@/assets/images/dog/DogSad';
import { Colors } from '@/constants/Colors';
import { ThemedButton } from '@/components/ThemedButton';
import { router } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <DogSad height={255} />
        </View>
        <View style={styles.containerText}>
          <ThemedText fontFamily='NotoSansThai' color={Colors.light.primary[1]} type="title1">เกิดข้อผิดพลาด</ThemedText>
          <ThemedText fontFamily='NotoSansThai' color={Colors.light.neutral[1]} type="body3">ไม่พบหน้าที่คุณกำลังมองหา</ThemedText>
        </View>
      </View>
      <View style={styles.contentButton}>
        <ThemedButton width={327} title="กลับสู่หน้าหลัก" onPress={()=>router.replace("/(tabs)/Homepage")} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerText: {
    marginTop: 10,
  },
  contentContainer: {
    marginTop: 200,
  },
  contentButton: {
    marginTop: 50,
  },
});
