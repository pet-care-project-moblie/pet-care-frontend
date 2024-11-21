import { Text, type TextProps, StyleSheet } from 'react-native';

import { useMemo } from 'react';
import { Colors } from '@/constants/Colors';

export type ThemedTextProps = TextProps & {
  color?: string;
  fontFamily?: 'Poppins' | 'NotoSansThai';
  type: 'title1' | 'title2' | 'title3' | 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2';
};

export function ThemedText({
  color = Colors.light.neutral[1],
  style,
  type,
  fontFamily = 'NotoSansThai',
  ...rest
}: ThemedTextProps) {

  const mapType = useMemo(() => {
    return {
      title1: {
        ...styles.title1,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_600SemiBold' : 'Poppins_600SemiBold',
      },
      title2: {
        ...styles.title2,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_600SemiBold' : 'Poppins_600SemiBold',
      },
      title3: {
        ...styles.title3,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_600SemiBold' : 'Poppins_600SemiBold',
      },
      body1: {
        ...styles.body1,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_500Medium' : 'Poppins_500Medium',
      },
      body2: {
        ...styles.body2,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_400Regular' : 'Poppins_400Regular',
      },
      body3: {
        ...styles.body3,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_500Medium' : 'Poppins_500Medium',
      },
      caption1: {
        ...styles.caption1,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_600SemiBold' : 'Poppins_600SemiBold',
      },
      caption2: {
        ...styles.caption2,
        fontFamily: fontFamily === 'NotoSansThai' ? 'NotoSansThai_500Medium' : 'Poppins_500Medium',
      },
    };
  }, [fontFamily]);

  return (
    <Text
      style={[
        { color },
        mapType[type],
        style,
      ]}
      {...rest}
    />
  );
}

// Poppins_100Thin
// Poppins_100Thin_Italic
// Poppins_200ExtraLight
// Poppins_200ExtraLight_Italic
// Poppins_300Light
// Poppins_300Light_Italic
// Poppins_400Regular
// Poppins_400Regular_Italic
// Poppins_500Medium
// Poppins_500Medium_Italic
// Poppins_600SemiBold
// Poppins_600SemiBold_Italic
// Poppins_700Bold
// Poppins_700Bold_Italic
// Poppins_800ExtraBold
// Poppins_800ExtraBold_Italic
// Poppins_900Black
// Poppins_900Black_Italic
// NotoSansThai_100Thin
// NotoSansThai_200ExtraLight
// NotoSansThai_300Light
// NotoSansThai_400Regular
// NotoSansThai_500Medium
// NotoSansThai_600SemiBold
// NotoSansThai_700Bold
// NotoSansThai_800ExtraBold
// NotoSansThai_900Black

// Title1 semi-bold 24 high line 28
// Title2 semi-bold 20 high line 28
// Title3 semi-bold 16 high line 24

// Body1 medium 16 high line 24
// Body2 regular 16 high line 24
// Body3 medium 14 high line 150%

// Caption1 semi-bold 12 high line 16
// Caption2 medium 12 high line 16

const styles = StyleSheet.create({
  title1: {
    fontSize: 24,
    // lineHeight: 28,
  },
  title2: {
    fontSize: 20,
    // lineHeight: 28,
  },
  title3: {
    fontSize: 16,
    // lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    // lineHeight: 24,
  },
  body2: {
    fontSize: 16,
    // lineHeight: 24,
  },
  body3: {
    fontSize: 14,
    // lineHeight: 21,
  },
  caption1: {
    fontSize: 12,
    // lineHeight: 16,
  },
  caption2: {
    fontSize: 12,
    // lineHeight: 16,
  },
});