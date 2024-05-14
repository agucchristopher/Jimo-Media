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
  let [posts, setposts] = useState([]);
  const [datefmt, setdatefmt] = useState("");
  const [dd, setdd] = useState("");
  let [You, setYou] = useState(false);
  let title = "";
  let { width, height } = useWindowDimensions();
  const timestamp = "2024-03-20T16:59:20.471Z";

  let getPosts = async () => {
    console.log("Getting User Posts...");
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${user?.email}`;

    let response = await fetch(
      "https://jimo-media-backend-o4n3.onrender.com/post/getUserPosts",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).finally(() => setloading(false));

    let data = await response.json();
    let newposts = data.posts;
    console.log(newposts);
    // setposts(data.posts);
    setposts(newposts);
  };
  let you = async () => {
    let u = await AsyncStorage.getItem("user");
    u = JSON.parse(u);
    let owner = JSON.parse(params?.owner);
    // console.log(owner);
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
      "https://jimo-media-backend-o4n3.onrender.com/getUser",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).finally(() => setloading(false));

    let data = await response.json();
    console.log("data: ", data);
    if (data.status) {
      setdd(data?.user?.dob);
      console.log(data?.user?.dob);
      console.log("Dob", dd);
      const date = new Date(data?.user?.dob);

      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
      const day = date.getDate();

      setdatefmt(`${month}/${day}/${year}`);
      console.log("Dob", dd);
      setuser(data?.user);
    }
  };
  useEffect(() => {
    getUser().then(() => {
      getPosts();
    });
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
            source={require("../assets/bbg.jpg")}
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
              source={{
                uri: user?.pfp,
              }}
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
              onPress={() => router.push("/editprofile")}
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
            {user?.location}
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
              d="M17,10.039c-3.859,0-7,3.14-7,7,0,3.838,3.141,6.961,7,6.961s7-3.14,7-7c0-3.838-3.141-6.961-7-6.961Zm0,11.961c-2.757,0-5-2.226-5-4.961,0-2.757,2.243-5,5-5s5,2.226,5,4.961c0,2.757-2.243,5-5,5Zm1.707-4.707c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-1-1c-.188-.188-.293-.442-.293-.707v-2c0-.552,.447-1,1-1s1,.448,1,1v1.586l.707,.707Zm5.293-10.293v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v1H11c.552,0,1,.448,1,1s-.448,1-1,1H2v9c0,1.654,1.346,3,3,3h4c.552,0,1,.448,1,1s-.448,1-1,1H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h1V1c0-.552,.448-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z"
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
            {datefmt}
          </Text>
        </View>
        {/* <View
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
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
