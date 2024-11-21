import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useMemo } from 'react';
import 'react-native-reanimated';
import { Redirect, Slot } from 'expo-router';
export { ErrorBoundary } from "expo-router";
import * as ScreenOrientation from 'expo-screen-orientation';

import * as Poppins from '@expo-google-fonts/poppins';
import * as NotoSansThai from '@expo-google-fonts/noto-sans-thai';
import { AuthProvider } from './ctx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const poppinsFonts = useMemo(() => ({
    Poppins_100Thin: Poppins.Poppins_100Thin,
    Poppins_100Thin_Italic: Poppins.Poppins_100Thin_Italic,
    Poppins_200ExtraLight: Poppins.Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic: Poppins.Poppins_200ExtraLight_Italic,
    Poppins_300Light: Poppins.Poppins_300Light,
    Poppins_300Light_Italic: Poppins.Poppins_300Light_Italic,
    Poppins_400Regular: Poppins.Poppins_400Regular,
    Poppins_400Regular_Italic: Poppins.Poppins_400Regular_Italic,
    Poppins_500Medium: Poppins.Poppins_500Medium,
    Poppins_500Medium_Italic: Poppins.Poppins_500Medium_Italic,
    Poppins_600SemiBold: Poppins.Poppins_600SemiBold,
    Poppins_600SemiBold_Italic: Poppins.Poppins_600SemiBold_Italic,
    Poppins_700Bold: Poppins.Poppins_700Bold,
    Poppins_700Bold_Italic: Poppins.Poppins_700Bold_Italic,
    Poppins_800ExtraBold: Poppins.Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic: Poppins.Poppins_800ExtraBold_Italic,
    Poppins_900Black: Poppins.Poppins_900Black,
    Poppins_900Black_Italic: Poppins.Poppins_900Black_Italic,
  }), []);

  const notoSansThaiFonts = useMemo(() => ({
    NotoSansThai_100Thin: NotoSansThai.NotoSansThai_100Thin,
    NotoSansThai_200ExtraLight: NotoSansThai.NotoSansThai_200ExtraLight,
    NotoSansThai_300Light: NotoSansThai.NotoSansThai_300Light,
    NotoSansThai_400Regular: NotoSansThai.NotoSansThai_400Regular,
    NotoSansThai_500Medium: NotoSansThai.NotoSansThai_500Medium,
    NotoSansThai_600SemiBold: NotoSansThai.NotoSansThai_600SemiBold,
    NotoSansThai_700Bold: NotoSansThai.NotoSansThai_700Bold,
    NotoSansThai_800ExtraBold: NotoSansThai.NotoSansThai_800ExtraBold,
    NotoSansThai_900Black: NotoSansThai.NotoSansThai_900Black,
  }), []);

  const [fontsLoaded] = useFonts({
    ...poppinsFonts,
    ...notoSansThaiFonts,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
    changeScreenOrientation();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <Slot initialRouteName="(tabs)" /> {/* Or the name of a valid route */}
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

