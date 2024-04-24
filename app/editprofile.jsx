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
import InputText from "../components/InputText";
import Button from "../components/Button";
const editprofile = () => {
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
      "https://jimo-media-backend.onrender.com/getUser",
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
        "https://jimo-media-backend.onrender.com/post/makePost",
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
        <AuthHeader title={"Edit Profile"} />
        <InputText
          placeholder={"Username"}
          inputPlaceholder={"Edit Username"}
        />
        <InputText placeholder={"Email"} inputPlaceholder={"Edit Email"} />
        <InputText placeholder={"Bio"} inputPlaceholder={"Edit Bio"} />
        <InputText
          placeholder={"Location"}
          inputPlaceholder={"Edit Location"}
        />
        <InputText
          placeholder={"Education"}
          inputPlaceholder={"Edit Education"}
        />
        <Button bg={Colors.primary} title={"Save Changes"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default editprofile;

const styles = StyleSheet.create({});
