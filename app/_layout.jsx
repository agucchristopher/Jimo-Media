import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Colors } from "../assets/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [user, setuser] = useState(false);
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    MBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    PBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    let checkUser = async () => {
      let cuser = await AsyncStorage.getItem("user");
      console.log("User: ", cuser);
      // if (cuser) {
      // router.replace("/pages/home");
      setuser("cuser");
      // }
    };
    checkUser();
    if (loaded) {
      checkUser();
      SplashScreen.hideAsync();
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        initialRouteName={user == null ? "index" : "pages"}
        screenOptions={{
          headerShown: false,
        }}
      >
        {user == null ? (
          <>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signin" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen name="fp" options={{ headerShown: false }} />
            <Stack.Screen name="otp" options={{ headerShown: false }} />
            <Stack.Screen
              name="resetPassword"
              options={{ headerShown: false }}
            />
          </>
        ) : null}
        <Stack.Screen name="pages" options={{ headerShown: false }} />
        <Stack.Screen name="makePost" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
