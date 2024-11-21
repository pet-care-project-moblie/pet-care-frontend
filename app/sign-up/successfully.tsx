import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";
import DogSmile from "@/assets/images/dog/DogSmile";
import { Dimensions } from "@/constants/Diamensions";

export default function SuccessfullyPage() {

  return (
    <ThemedView style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <DogSmile height={Dimensions.percentageHeight(26)} />
        </View>
        <View style={styles.containerText}>
          <ThemedText
            color={Colors.light.primary[1]}
            type="title1"
          >
            สมัครสมาชิกสำเร็จ
          </ThemedText>
          <View style={styles.BodyText}>
            <ThemedText
              color={Colors.light.neutral[1]}
              type="body3"
              style={{ textAlign: "center" }}
            >
              ขอบคุณอย่างยิ่งที่สมัครสมาชิกกับเรา! เรารู้สึกยินดีที่ได้ต้อนรับคุณ
              เข้าสู่ครอบครัวของเรา และพร้อมที่จะให้บริการสุดพิเศษ เพื่อให้คุณได้สัมผัส
              ประสบการณ์ที่ดีที่สุด อย่ารอช้า เข้าสู่ระบบเพื่อเริ่มต้นใช้งานทันที!
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.contentButton}>
        <ThemedButton
          width={Dimensions.percentageWidth(83.85)}
          title="เสร็จสิ้น"
          onPress={() => router.replace("/sign-in")}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.percentageHeight(1.78),
  },
  contentContainer: {
    marginTop: Dimensions.percentageHeight(17.77),
  },
  contentButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  BodyText: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: Dimensions.percentageWidth(89.74),
    marginTop: Dimensions.percentageHeight(1.18),
  },
});
