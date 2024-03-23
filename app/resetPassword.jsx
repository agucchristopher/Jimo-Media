import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";
import Button from "../components/Button";
import { Colors } from "../assets/data";
import InputText from "../components/InputText";
import { router } from "expo-router";
const resetPassword = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <AuthHeader title={""} />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontFamily: "PBold",
            textAlign: "center",
            marginBottom: 35,
            // fontWeight: "bold",
          }}
        >
          Reset Password
        </Text>
        {/* <Text
          style={{
            fontSize: 16,
            color: "#4E636F",
            fontFamily: "MMedium",
            textAlign: "center",
            margin: 15,
            marginTop: 0,
            marginBottom: 35,
            // fontWeight: "bold",
          }}
        >
          Enter the 5 digit verification that has been sent to your email
          address.
        </Text> */}
        <InputText
          placeholder={"New Password"}
          inputPlaceholder={"Enter your new password"}
        />
        <InputText
          placeholder={"Confirm Password"}
          inputPlaceholder={"Confirm your new password"}
        />
        <View style={{ marginBottom: 25 }}></View>
        <Button
          onPress={() => router.replace("/signin")}
          title={"Reset Password"}
          bg={Colors.primary}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default resetPassword;

const styles = StyleSheet.create({});
