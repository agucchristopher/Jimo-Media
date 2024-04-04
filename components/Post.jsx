import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
const Post = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
        marginTop: 15,
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 0,
        padding: 5,
        width: Dimensions.get("screen").width * 0.9,
      }}
    >
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Image
          source={require("./../assets/pfp.jpg")}
          style={{
            height: 50,
            width: 50,
            borderRadius: 1000,
            resizeMode: "cover",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#F1F1F1",
          height: 48,
          width: Dimensions.get("screen").width * 0.7,
          marginTop: 10,
          borderRadius: 1000,
          alignSelf: "center",
          color: "grey",
          fontFamily: "MMedium",
          paddingLeft: 25,
          margin: 5,
          marginRight: 0,
          outline: "none",
          justifyContent: "center",
        }}
        onPress={() => router.push("/makePost")}
        placeholder={`What's on your mind?`}
      >
        <Text
          style={{
            color: "grey",
            fontFamily: "MMedium",
          }}
        >
          What's on your mind?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
