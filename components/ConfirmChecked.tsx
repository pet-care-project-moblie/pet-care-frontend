import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText"; // ThemedText component
import { Colors } from "@/constants/Colors"; // Assuming you have a Colors file
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedButton } from "./ThemedButton";

type ConfirmCheckedProps = {
  checked: boolean;
  setChecked: (value: boolean) => void;
  message: string;
};

export const ConfirmChecked: React.FC<ConfirmCheckedProps> = ({
  checked, setChecked, message
}) => {
  return (
    <View style={styles.checkboxAndText}>
      <MaterialCommunityIcons
        name={
          checked
            ? "checkbox-marked"
            : "checkbox-blank-outline"
        }
        size={25}
        color={
          checked
            ? Colors.light.semantic.success
            : Colors.light.neutral[4]
        }
        onPress={() =>
          setChecked(!checked)
        }
      />
      <ThemedText type="body3" color={Colors.light.neutral[1]} style={{ width: "80%" }}>
        {message}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxAndText: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
});
