import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";
import { Svg, Path } from "react-native-svg";
import { Colors } from "../assets/data";
const makePost = () => {
  let [loading, setloading] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
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
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            margin: 15,
            marginRight: 25,
            flexDirection: "row",
            gap: 10,
            backgroundColor: Colors.primary,
            padding: 10,
            width: 120,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {!loading ? (
            <>
              <Text
                style={{ fontSize: 18, fontFamily: "MMedium", color: "white" }}
              >
                Post
              </Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width={23}
                height={23}
              >
                <Path
                  stroke={"white"}
                  d="m3.539.26l-.038-.02C2.565-.194,1.481-.025.738.671.041,1.323-.182,2.273.187,3.217l4.933,8.785L.247,20.853c-.337.879-.111,1.829.587,2.479.465.434,1.062.661,1.68.661.374,0,.755-.083,1.121-.254l20.368-11.74L3.539.26ZM1.09,2.792c-.192-.498-.068-1.018.331-1.391.229-.214.594-.4,1.018-.4.197,0,.407.041.622.138l18.063,10.361H5.985L1.09,2.792Zm2.084,20.061c-.562.262-1.212.163-1.658-.252-.4-.373-.525-.893-.364-1.328l4.837-8.772h15.144L3.174,22.853Z"
                />
              </Svg>
            </>
          ) : (
            <ActivityIndicator color={"white"} />
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default makePost;

const styles = StyleSheet.create({});
