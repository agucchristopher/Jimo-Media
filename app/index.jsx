import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../assets/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import SplashScreen from "expo-app-loading";
import Animated, {
  BounceIn,
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
const index = () => {
  let AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);
  let AnimatedText = Animated.createAnimatedComponent(Text);
  // useEffect(async () => {
  // await SplashScreen.preventAutoHideAsync();
  useEffect(() => {
    let checkUser = async () => {
      let user = await AsyncStorage.getItem("user");
      console.log(user);
      if (user) {
        router.replace("/pages/home");
      }
    };
    checkUser();
  }, []);
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor={Colors.primary}  /> */}
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: Colors.primary,
          padding: 15,
          height: "100%",
          width: "100%",
          alignSelf: "center",
        }}
        // source={require("../assets/bg.avif")}
      >
        <AnimatedText
          entering={FadeInDown}
          style={{
            color: "white",
            fontSize: 36,
            textAlign: "center",
            marginTop: Dimensions.get("screen").height * 0.3,
            fontFamily: "PBold",
          }}
        >
          Birthday Hub
        </AnimatedText>
        <View
          style={{
            color: "white",
            fontSize: 36,
            textAlign: "center",
            marginTop: "auto",
            fontFamily: "MBold",
            height: 200,
            marginBottom: 15,
          }}
        >
          <AnimatedOpacity
            entering={FadeInUp.duration(500)}
            onPress={() => router.push("/signup")}
            style={{
              height: 55,
              width: Dimensions.get("screen").width * 0.95,
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 15,
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                color: Colors.primary,
                fontSize: 16,
                textAlign: "center",
                fontFamily: "MBold",
              }}
            >
              Get Started
            </Text>
          </AnimatedOpacity>
          <AnimatedOpacity
            entering={FadeInDown.duration(600)}
            onPress={() => router.push("/signin")}
            style={{
              height: 55,
              width: Dimensions.get("screen").width * 0.95,
              borderColor: "white",
              alignSelf: "center",
              borderRadius: 15,
              justifyContent: "center",
              borderWidth: 0.8,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                fontFamily: "MBold",
              }}
            >
              Log In
            </Text>
          </AnimatedOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
