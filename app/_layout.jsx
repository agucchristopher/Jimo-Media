import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../assets/data";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [user, setuser] = useState();
  const [loaded, error] = useFonts({
    MBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    PBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    let checkUser = async () => {
      let cuser = await AsyncStorage.getItem("user");
      console.log("User: ", cuser);
      setuser("cuser");
    };
    checkUser();
    if (loaded) {
      checkUser();
    }
    SplashScreen.hideAsync();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        initialRouteName={user == null || undefined ? "index" : "pages"}
        screenOptions={{
          headerShown: false,
          statusBarColor: "#fff",
          statusBarStyle: "dark",
        }}
      >
        {user == null || undefined ? (
          <>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
                statusBarColor: Colors.primary,
                statusBarStyle: "light",
              }}
            />
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
        <Stack.Screen name="editprofile" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
