import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Post = ({}) => {
  let [user, setuser] = useState();
  let [loading, setloading] = useState(false);
  let getUser = async () => {
    let u = await AsyncStorage.getItem("user");
    u = JSON.parse(u);
    console.log("U: ", u);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "application/x-www-form-urlencoded",
    };

    let bodyContent = `id=${u?._id}`;

    let response = await fetch(
      "https://jimo-media-backend.onrender.com/getUser",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).finally(() => setloading(false));

    let data = await response.json();
    console.log("data: ", data);
    if (data.status) {
      let jsonUser = JSON.stringify(data?.user);
      setuser(data?.user);
      await AsyncStorage.setItem("user", jsonUser);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log("User: " + user);
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
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/profile",
            params: { owner: JSON.stringify({ id: user._id }) },
          })
        }
      >
        <Image
          source={{
            uri: user?.pfp,
          }}
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
