import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../components/AuthHeader";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Colors } from "../assets/data";
import { router } from "expo-router";
const otp = () => {
  let { width, height } = Dimensions.get("screen");
  const [SelectedItem, setSelectedItem] = React.useState(0);
  let inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
    console.log(this);
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <AuthHeader title={""} />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontFamily: "PBold",
            textAlign: "center",
            // fontWeight: "bold",
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
            // fontWeight: "bold",
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
                  //   paddingLeft: 20,
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
                    // console.log(inputRef);
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
            // fontWeight: "bold",
          }}
        >
          Didn t receive the OTP?{" "}
          <Text
            style={{
              fontSize: 16,
              color: Colors.primary,
              fontFamily: "MMedium",
              textAlign: "center",
              // fontWeight: "bold",
            }}
          >
            Resend
          </Text>
        </Text>
        <Button
          title={"Next"}
          onPress={() => router.replace("/resetPassword")}
          bg={Colors.primary}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default otp;

const styles = StyleSheet.create({});
