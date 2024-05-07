import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";
import Button from "../components/Button";
import { Colors } from "../assets/data";
import { router } from "expo-router";
const otp = () => {
  const [SelectedItem, setSelectedItem] = React.useState(0);
  let [otp, setOtp] = React.useState([{}, {}, {}, {}, {}]);
  let inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
    console.log(this);
  }, []);
  const [email, setemail] = useState("aguchris740@gmail.com");
  const [loading, setloading] = useState(false);
  const [popup, setpopup] = useState("");
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState(false);
  let verifyOtp = async () => {
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${email}`;

    let response = await fetch(
      "https://jimo-media-backend-o4n3.onrender.com/users/verifyOtp",
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
          data.status ? router.replace("/resetPassword") : null;
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
          OTP Verification
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
          Enter the 5 digit verification that has been sent to your email
          address.
        </Text>
        <FlatList
          data={["", "", "", "", ""]}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 15,
            alignSelf: "center",
          }}
          renderItem={({ index, item }) => {
            return (
              <View
                style={{
                  backgroundColor: "#F7F8F9",
                  height: 55,
                  borderRadius: 15,
                  alignItems: "center",
                  borderColor: SelectedItem == index ? "#00D0C2" : "#121212",
                  borderWidth: 1,
                  width: 55,
                  justifyContent: "center",
                }}
              >
                <TextInput
                  ref={SelectedItem == index ? inputRef : null}
                  keyboardType="numeric"
                  onFocus={() => {
                    setSelectedItem(index);
                  }}
                  onTextInput={() => {
                    if (index != 4) {
                      setSelectedItem(index + 1);
                      inputRef.current.focus();
                    } else {
                      setSelectedItem((value) => (value = 4));
                      inputRef.current.blur();
                    }
                  }}
                  style={{ height: 50, width: 50, textAlign: "center" }}
                  maxLength={1}
                />
              </View>
            );
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontFamily: "MMedium",
            textAlign: "center",
            marginTop: 15,
            marginBottom: 35,
          }}
        >
          Didn t receive the OTP?{" "}
          <Text
            style={{
              fontSize: 16,
              color: Colors.primary,
              fontFamily: "MMedium",
              textAlign: "center",
            }}
          >
            Resend
          </Text>
        </Text>
        <Button
          title={"Next"}
          loading={loading}
          onPress={() => verifyOtp()}
          bg={Colors.primary}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default otp;
