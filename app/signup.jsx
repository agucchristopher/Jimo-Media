import { ScrollView, Text } from "react-native";
import React, { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Toast from "../components/Toast";
import Dropdown from "../components/Dropdown";
import { Colors } from "../assets/data";
import { router } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const signup = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    setdob(formattedDate);
    return formattedDate;
  };
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

    let bodyContent = `email=${email}&username=${username}&password=${password}&dob=${dob}`;

    let response = await fetch(
      "https://jimo-media-backend.onrender.com/users/signup",
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
      })
      .finally(() => setloading(false));

    let data = await response.json();
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
        {popup ? <Toast status={status} mesage={message} /> : null}
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
        {/* {Platform.OS == "android" && ( */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* )} */}
        <Dropdown
          placeholder={"Date Of Birth"}
          inputPlaceholder={
            selectedDate ? formatDate(selectedDate) : "DD/MM/YYYY"
          }
          onPress={showDatePicker}
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
          <Text
            onPress={() => router.push("/signin")}
            style={{
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
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signup;
