import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";

const makePost = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <AuthHeader title={"Make Post"} />
      <View
        style={{
          height: 300,
          borderWidth: 1,
          borderColor: "grey",
          width: "90%",
          alignSelf: "center",
          borderRadius: 15,
          padding: 10,
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Image
          source={require("../assets/post.jpg")}
          style={{
            height: 60,
            width: 60,
            resizeMode: "cover",
            borderRadius: 1000,
          }}
        />
        <TextInput
          style={{ width: "70%", marginTop: 10, height: 80 }}
          placeholderTextColor={"grey"}
          placeholder="Start Typing..."
        />
      </View>
    </SafeAreaView>
  );
};

export default makePost;

const styles = StyleSheet.create({});
