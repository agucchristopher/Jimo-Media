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
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [bio, setBio] = useState("");
  let [location, setLocation] = useState("");
  let [user, setuser] = useState();

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
      "https://jimo-media-backend-o4n3.onrender.com/getUser",
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
      setUsername(data?.user?.username);
      setEmail(data?.user?.email);
      setBio(data?.user?.bio);
      setLocation(data?.user?.location);
    }
    u = await AsyncStorage.getItem("user");
    setuser(JSON.parse(u));
    console.log("Userrr:  ", u);
  };
  let updateUser = async () => {
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    let bodyContent = `email=${email}&username=${username}&bio=${bio}&location=${location}`;
    try {
      const response = await fetch(
        "https://jimo-media-backend-o4n3.onrender.com/users/updateAccount",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      )
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
      console.log(response);
      let data = await response.json();
      console.log(data);
      if (data?.status) {
        setloading(false);
        router?.push("/pages/home");
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
        <AuthHeader title={"Edit Profile"} />
        <InputText
          placeholder={"Username"}
          inputPlaceholder={username?.length ? username : "Edit Username"}
        />
        <InputText
          placeholder={"Email"}
          inputPlaceholder={email?.length ? email : "Edit Email"}
        />
        <InputText
          placeholder={"Bio"}
          inputPlaceholder={bio?.length ? bio : "Edit Bio"}
        />
        <InputText
          placeholder={"Location"}
          inputPlaceholder={location?.length ? location : "Edit Location"}
        />
        <Button
          bg={Colors.primary}
          loading={loading}
          onPress={() => updateUser()}
          title={"Save Changes"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default editprofile;

const styles = StyleSheet.create({});
