import { Colors } from '@/constants/Colors';
import { SafeAreaView, type ViewProps } from 'react-native';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  return <SafeAreaView style={[{ backgroundColor:Colors.light.neutral[6] }, style]} {...otherProps} />;
}
