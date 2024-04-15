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
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";
import { Svg, Path } from "react-native-svg";
import { Colors } from "../assets/data";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
// import fs from "fs";
// import FormData from "form-data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
const makePost = () => {
  let [loading, setloading] = useState(false);
  let [content, setcontent] = useState(false);
  let [imageUri, setimageUri] = useState();
  let [imageName, setimageName] = useState();
  let [imageType, setimageType] = useState();
  let [user, setuser] = useState();
  let [fileItem, setfileItem] = useState();
  let [active, setactive] = useState(true);

  let getUser = async () => {
    let u = await AsyncStorage.getItem("user");
    u = JSON.parse(u);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${u?.email}`;

    let response = await fetch(
      "https://jimo-media-backend.vercel.app/getUser",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    if (data.status) {
      let jsonUser = JSON.stringify(data?.user);
      await AsyncStorage.setItem("user", jsonUser);
    }
    u = await AsyncStorage.getItem("user");
    setuser(JSON.parse(u));
    console.log("Userrr:  ", u);
  };
  let post = async () => {
    console.log("Posting..", user);
    let userID = user?.email;
    console.log("Parsed ID: ", userID);
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": `multipart/form-data`,
    };
    console.log(fileItem);
    try {
      console.log(
        "Image Upload Params: ",
        imageName,
        " ",
        imageType,
        " ",
        imageUri
      );
      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        name: imageName,
        type: imageType,
      });
      formData.append("email", userID);
      formData.append("content", content);
      const response = await fetch(
        "https://jimo-media-backend.vercel.app/post/makePost",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "*/*",
            "Content-Type": "multipart/form-data",
          },
        }
      ).catch((err) => console.log(err));
      console.log(response);
      let data = await response.json();
      console.log(data);
      if (data?.status) {
        setcontent("");
        router?.push("/pages/home");
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }

    setloading(false);
  };
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setimageUri(result?.assets[0].uri);
      setimageName(result?.assets[0].fileName);
      setimageType(result?.assets[0].mimeType);
      setfileItem(result?.assets[0]);
    } else {
      alert("You did not select any image.");
    }
  };
  const openCameraAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      // allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setimageUri(result?.assets[0].uri);
      setimageName(result?.assets[0].fileName);
      setimageType(result?.assets[0].mimeType);
      setfileItem(result?.assets[0]);
    } else {
      alert("You did not select any image.");
    }
  };
  useEffect(() => {
    getUser();
    if (`${content}`.length || `${imageUri}`.length) {
      setactive(false);
    }
  }, []);

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
            flexDirection: "column",
            gap: 5,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, height: "80%" }}>
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
              onChangeText={(e) => setcontent(e)}
            />
          </View>

          <View
            style={{
              // backgroundColor: "red",
              height: 50,
              width: "100%",
              alignSelf: "flex-end",
              // justifyContent: "center",
              alignItems: "center",
              padding: 5,
              flexDirection: "row",
              gap: 5,
            }}
          >
            <TouchableOpacity onPress={openCameraAsync}>
              <Fontisto name="camera" size={24} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImageAsync}>
              <MaterialIcons name="image" size={28} color="grey" />
            </TouchableOpacity>
          </View>
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
          onPress={() => post()}
          // disabled={active}
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
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{
              width: "70%",
              aspectRatio: 1,
              alignSelf: "center",
              margin: 10,
              borderRadius: 15,
            }}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default makePost;

const styles = StyleSheet.create({});
