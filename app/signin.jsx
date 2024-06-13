import { ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Colors } from "../assets/data";
import SocialButton from "../components/SocialButton";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "../components/Toast";
const signin = () => {
  let [email, setemail] = useState(null);
  let [password, setpassword] = useState(null);
  let [loading, setloading] = useState(false);
  let [popup, setpopup] = useState(false);
  let [status, setstatus] = useState(false);
  let [message, setmessage] = useState(null);
  let login = async () => {
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${email}&password=${password}`;

    let response = await fetch(
      "https://jimo-media-backend-o4n3.onrender.com/users/signin",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    )
      .catch((err) => {
        setpopup(true);
        setloading(false);
        setstatus(false);
        setmessage(err.message);
        alert("Error", err.message);
        setTimeout(() => {
          setpopup(false);
        }, 2000);
      })
      .finally(() => setloading(false));

    let data = await response.json();
    if (data) {
      setpopup(true);
      setstatus(data.status);
      setmessage(data.message);
      alert(data.message);
      setTimeout(() => {
        setpopup(false);
        setTimeout(() => {
          data.status ? router.push("/pages/home") : null;
        }, 1000);
      }, 2000);
    }
    if (data.status) {
      let jsonUser = JSON.stringify(data.user);
      await AsyncStorage.setItem("user", jsonUser);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* {popup ? <Toast status={status} mesage={message} /> : null} */}
      <ScrollView style={{ flex: 1, backgroundColor: "white", height: "100%" }}>
        <AuthHeader title={"Log In"} />
        <InputText
          placeholder={"Email"}
          inputPlaceholder={"Enter Email Address"}
          onChangeText={(e) => setemail(e)}
        />
        <InputText
          placeholder={"Password"}
          type={"password"}
          inputPlaceholder={"Enter Your Password"}
          onChangeText={(e) => setpassword(e)}
        />
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginRight: 25,
          }}
        >
          <Text
            style={{
              width: "100%",
              textAlign: "right",
              fontFamily: "MMedium",
              fontSize: 16,
              marginTop: 15,
              marginBottom: 25,
            }}
            onPress={() => router.push("/fp")}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Button
          title={"Sign In"}
          onPress={() => login()}
          bg={Colors.primary}
          loading={loading}
        />
        <Text
          style={{
            width: "92%",
            textAlign: "center",
            fontFamily: "MMedium",
            fontSize: 16,
            margin: 15,
          }}
        >
          Or
        </Text>
        <SocialButton type="facebook" />
        <SocialButton type="google" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
