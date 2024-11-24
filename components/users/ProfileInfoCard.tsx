import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Diamensions";

interface ProfileInfoCardProps {
  title?: string;
  id: string;
  name: string;
  phone: string;
  // email: string;
  lifestyle: string;
  personality: string[];
  freeTime: number;
  level: number;
  accommodationType: string;
  distance: number;
}

export function ProfileInfoCard(data: ProfileInfoCardProps) {
  const { title = "ข้อมูลผู้รับเลี้ยงสัตว์" } = data;
  const colorMapping = [
    Colors.light.semantic.error,
    Colors.light.semantic.warning,
    Colors.light.semantic.success,
    Colors.light.semantic.info,
  ];
  const experienceLevelColor = colorMapping[data.level - 1];

  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <ThemedText type="title2">{title}</ThemedText>
        <ThemedText type="title2" style={styles.idText}>
          # {data.id}
        </ThemedText>
      </View>
      <View style={styles.infoContainer}>
        <InfoRow label="ชื่อ-นามสกุล" value={data.name} />
        <InfoRow label="หมายเลขโทรศัพท์" value={data.phone} />
        {/* <InfoRow label="อีเมล" value={data.email} /> */}
        <InfoRow label="ไลฟ์สไตล์" value={data.lifestyle} />
        <InfoRow
          label="บุคลิกภาพ"
          value={data.personality.join(", ")}
        />
        <InfoRow label="เวลาว่างเล่นกับสัตว์" value={`${data.freeTime} ชั่วโมง`} />
        <InfoRow label="ประเภทที่อยู่" value={data.accommodationType} />
        <InfoRow label="ระยะทางที่สามารถไปรับสัตว์เลี้ยงได้" value={`${data.distance} กิโลเมตร`} />
        <InfoRow
          label="ประสบการณ์ในการเลี้ยงสัตว์"
          value={data.level.toString()}
          valueStyle={{ color: experienceLevelColor }}
        />
      </View>
    </View>
  );
}

const InfoRow = ({ label, value, valueStyle = {} }: { label: string; value: string; valueStyle?: object }) => (
  <View style={styles.infoRow}>
    <ThemedText type="body2" style={styles.labelText}>{label}</ThemedText>
    <ThemedText type="body1" style={[styles.valueTextBold, valueStyle]}>{value}</ThemedText>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.neutral[6],
    padding: Dimensions.percentageWidth(4.1),
    borderRadius: 8,
    marginBottom: Dimensions.percentageHeight(1.9),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Dimensions.percentageHeight(1.9),
  },
  idText: {
    color: Colors.light.neutral[1],
  },
  infoContainer: {
    marginVertical: Dimensions.percentageHeight(1.2),
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Dimensions.percentageHeight(1.2),
  },
  labelText: {
    color: "#A0A0A0",
    flex: 1,
  },
  valueTextBold: {
    flex: 1,
    textAlign: "right",
    color: Colors.light.primary[1],
  },
});
