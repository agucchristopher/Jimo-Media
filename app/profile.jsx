import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import { router } from "expo-router";
import { Colors } from "../assets/data";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const profile = ({ popup }) => {
  let params = useLocalSearchParams();
  console.log("Params: ", params);
  let [user, setuser] = useState(params?.owner);
  let [loading, setloading] = useState(false);
  let [You, setYou] = useState(false);
  let title = "";
  let { width, height } = useWindowDimensions();

  let you = async () => {
    console.log("********************************");
    let u = await AsyncStorage.getItem("user");
    u = JSON.parse(u);
    let owner = JSON.parse(params?.owner);
    if (owner.id === u?._id) {
      console.log("your profile", u, params?.owner);
      setYou(true);
    }
  };
  let getUser = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    let id = JSON.parse(user)?.id;
    console.log("Id: " + id);
    let bodyContent = `id=${id}`;

    let response = await fetch(
      "https://jimo-media-backend.vercel.app/getUser",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).finally(() => setloading(false));

    let data = await response.json();
    console.log("data: ", data);
    if (data.status) {
      setuser(data?.user);
    }
  };
  useEffect(() => {
    getUser();
    you();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 0, backgroundColor: "white" }}>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          gap: 15,
          marginBottom: 0,
          marginTop: 15,
          width: "100%",
        }}
      >
        {!popup ? (
          <TouchableOpacity
            style={{ width: "33%", marginLeft: 5 }}
            onPress={() => router.back()}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1d1d1d"
              height={30}
              width={30}
            >
              <Path d="m24,11.5H1.266l4.617-4.617-.707-.707L.458,10.894c-.61.61-.61,1.604,0,2.215l4.717,4.716.707-.707L1.265,12.5h22.735v-1Z"></Path>
            </Svg>
          </TouchableOpacity>
        ) : null}
        {!popup ? (
          <Text
            style={{
              alignContent: "center",
              fontFamily: "PBold",
              fontSize: 20,
              width: "35%",
            }}
          >
            {title}
          </Text>
        ) : null}
        <View style={{ width: "20%" }}></View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        {/* Picture */}
        <View style={{ height: 250 }}>
          <ImageBackground
            source={require("../assets/post.jpg")}
            style={{
              height: 200,
              width: width,
              alignSelf: "center",
            }}
            resizeMode="cover"
          ></ImageBackground>
          <TouchableOpacity
            style={{
              height: 150,
              width: 150,
              borderRadius: 1000,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              marginTop: 10,
              position: "absolute",
              bottom: 0,
            }}
          >
            <Image
              source={require("../assets/pfp.jpg")}
              style={{
                height: 150,
                width: 150,
                resizeMode: "cover",
                borderRadius: 1000,
                alignSelf: "flex-start",
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "PBold",
            marginLeft: 15,
            marginTop: 10,
            alignSelf: "flex-start",
            fontSize: 18,
          }}
        >
          @{user?.username}
        </Text>
        <Text
          style={{
            fontFamily: "MMedium",
            marginLeft: 15,
            alignSelf: "flex-start",
            fontSize: 16,
          }}
        >
          {user?.bio}
        </Text>
        {You ? (
          <View style={{ flexDirection: "row", gap: 1, alignSelf: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#F1F1F1",
                width: width * 0.4,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                margin: 15,
                borderRadius: 5,
                marginLeft: 5,
              }}
            >
              <Text
                style={{ color: "grey", fontSize: 18, fontFamily: "PBold" }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/makePost")}
              style={{
                backgroundColor: Colors.primary,
                width: width * 0.4,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                margin: 15,
                borderRadius: 5,
                marginLeft: 5,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontFamily: "PBold" }}
              >
                Make Post
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <View
          style={{
            marginLeft: 15,
            flexDirection: "row",
            alignContent: "center",
            gap: 15,
            margin: 5,
            marginTop: !You ? 15 : 5,
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            height={30}
            width={30}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill={"#4D4D4D"}
              d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
            />
          </Svg>
          <Text
            style={{
              color: "#4D4D4D",
              fontSize: 17,
              fontFamily: "MMedium",
              textAlignVertical: "center",
            }}
          >
            Location
          </Text>
        </View>
        <View
          style={{
            marginLeft: 15,
            flexDirection: "row",
            alignContent: "center",
            gap: 15,
            margin: 5,
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            height={30}
            width={30}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill={"#4D4D4D"}
              d="M15 3C15.5523 3 16 3.44772 16 4V6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H8V4C8 3.44772 8.44772 3 9 3H15ZM16 8H8V19H16V8ZM4 8V19H6V8H4ZM14 5H10V6H14V5ZM18 8V19H20V8H18Z"
            />
          </Svg>
          <Text
            style={{
              color: "#4D4D4D",
              fontSize: 17,
              fontFamily: "MMedium",
              textAlignVertical: "center",
            }}
          >
            Workplace
          </Text>
        </View>
        <View
          style={{
            marginLeft: 15,
            flexDirection: "row",
            alignContent: "center",
            gap: 15,
            margin: 5,
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            height={30}
            width={30}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill={"#4D4D4D"}
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"
            />
          </Svg>
          <Text
            style={{
              color: "#4D4D4D",
              fontSize: 17,
              fontFamily: "MMedium",
              textAlignVertical: "center",
            }}
          >
            Education
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
