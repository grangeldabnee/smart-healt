import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  const [loaded, error] = useFonts({
    Inter_900Black,
    ...Ionicons.font,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack />
    </>
  );
} 