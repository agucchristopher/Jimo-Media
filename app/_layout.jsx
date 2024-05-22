import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "../assets/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    MBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    PBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size={"large"} style={{}} color={Colors.primary} />
      </SafeAreaView>
    );
  }
  return (
    <>
      <Stack
        initialRouteName={"index"}
        screenOptions={{
          headerShown: false,
          statusBarColor: "#fff",
          statusBarStyle: "dark",
        }}
      >
        {/* {user == null || undefined ? ( */}
        {/* // <> */}
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
        <Stack.Screen name="resetPassword" options={{ headerShown: false }} />
        {/* </> */}
        {/* // ) : null} */}
        <Stack.Screen name="pages" options={{ headerShown: false }} />
        <Stack.Screen name="makePost" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="editprofile" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
