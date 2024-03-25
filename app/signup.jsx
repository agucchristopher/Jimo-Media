import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React, { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Colors } from "../assets/data";
import { router } from "expo-router";

const signup = () => {
  let [username, setusername] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [dob, setdob] = useState("");
  let [loading, setloading] = useState(false);
  let [popup, setpopup] = useState(false);
  let [status, setstatus] = useState(false);
  let [message, setmessage] = useState("");
  let register = async () => {
    console.log("..");
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${email}&username=${username}&password=${password}&dob=1710953960471`;

    let response = await fetch("http://192.168.0.101:8080/users/signup", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .catch((err) => {
        setpopup(true);
        setloading(false);
        console.log(err);
        setstatus(false);
        setmessage(err.message);
      })
      .finally(() => setloading(false));

    let data = await response.json();
    console.log(data);
    if (data) {
      setpopup(true);
      setstatus(data.status);
      setmessage(data.message);
      setTimeout(() => {
        setpopup(false);
        setTimeout(() => {
          data.status ? router.push("/signin") : null;
        }, 1000);
      }, 2000);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {/* <View style={{ backgroundColor: "white" }}> */}
        {popup ? <Toast status={status} mesage={message} /> : null}
        {/* </View> */}
        <AuthHeader popup={false} title={"Register"} />
        <InputText
          placeholder={"Username"}
          inputPlaceholder={"Enter your Username."}
          onChangeText={(e) => setusername(e)}
        />
        <InputText
          placeholder={"Email"}
          inputPlaceholder={"Enter your Email Address."}
          onChangeText={(e) => setemail(e)}
        />
        <InputText
          placeholder={"Password"}
          inputPlaceholder={"Enter your Password."}
          type={"password"}
          onChangeText={(e) => setpassword(e)}
        />
        <InputText
          placeholder={"Date Of Birth"}
          inputPlaceholder={"DD/MM/YYYY"}
        />
        <Button
          bg={Colors.primary}
          onPress={() => register()}
          loading={loading}
          title={"Sign Up"}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: "MMedium",
            marginTop: 10,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          Already have an account?{" "}
          {/* <TouchableOpacity
            style={{
              alignContent: "center",
              justifyContent: "center",
              //   backgroundColor: "pink",
            }}
          > */}
          <Text
            onPress={() => router.push("/signin")}
            style={{
              //   textAlign: "center",
              fontSize: 16,
              fontFamily: "MMedium",
              marginTop: 0,
              alignSelf: "center",
              color: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            Sign In
          </Text>
          {/* </TouchableOpacity> */}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signup;

const styles = StyleSheet.create({});