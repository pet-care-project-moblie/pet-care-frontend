import { Colors } from "@/constants/Colors";

export const getTagColor = (index: number) => {
    const colorOptions = [
      Colors.light.semantic.error,
      Colors.light.semantic.info,
      Colors.light.semantic.success,
      Colors.light.semantic.warning,
      Colors.light.semantic.alert,
    ];
    return colorOptions[index % colorOptions.length];
  };