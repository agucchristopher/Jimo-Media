import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Colors } from "../assets/data";
import { router } from "expo-router";
const fp = () => {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [popup, setpopup] = useState("");
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState(false);
  let forget = async () => {
    console.log("..");
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${email}`;

    let response = await fetch(
      "http://192.168.43.144:8080/users/forgetPassword",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    )
      .catch((err) => {
        setpopup(true);
        setloading(false);
        console.log(err);
        setstatus(false);
        setmessage(err.message);
        setTimeout(() => {
          setpopup(false);
        }, 2000);
      })
      .finally(() => setloading(false));

    let data = await response.json();
    console.log(data);
    if (data) {
      setmessage(data.message);
      setstatus(data.status);
      setpopup(true);
      setTimeout(() => {
        setTimeout(() => {
          setpopup(false);
          data.status ? router.push("/otp") : null;
        }, 1000);
      }, 2000);
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      {popup ? <Toast mesage={message} status={status} /> : null}
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <AuthHeader title={""} />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontFamily: "PBold",
            textAlign: "center",
          }}
        >
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#4E636F",
            fontFamily: "MMedium",
            textAlign: "center",
            margin: 15,
            marginTop: 0,
            marginBottom: 35,
          }}
        >
          Enter the email address linked to your account and we will send you a
          5 digit code.
        </Text>
        <InputText
          placeholder={"Email"}
          onChangeText={(e) => setemail(e)}
          inputPlaceholder={"Enter your email address"}
        />
        <Button
          onPress={() => forget()}
          title={"Next"}
          bg={Colors.primary}
          loading={loading}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default fp;

const styles = StyleSheet.create({});
