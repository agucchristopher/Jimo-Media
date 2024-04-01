import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import { router } from "expo-router";
import { Colors } from "../assets/data";
const profile = ({ popup }) => {
  let title = "";
  let { width, height } = useWindowDimensions();
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
            fontSize: 20,
          }}
        >
          Sarah John
        </Text>
        <Text
          style={{
            fontFamily: "MMedium",
            marginLeft: 15,
            alignSelf: "flex-start",
            fontSize: 20,
          }}
        >
          Lab Scientist ❤️‍🔥❤️‍🔥
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            width: width * 0.45,
            height: 55,
            alignItems: "center",
            justifyContent: "center",
            margin: 15,
            borderRadius: 5,
            marginLeft: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontFamily: "PBold" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginLeft: 15,
            flexDirection: "row",
            alignContent: "center",
            gap: 10,
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
              d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
            />
          </Svg>
          <Text
            style={{
              color: "#4D4D4D",
              fontSize: 17,
              fontFamily: "PBold",
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
            gap: 10,
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
              d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
            />
          </Svg>
          <Text
            style={{
              color: "#4D4D4D",
              fontSize: 17,
              fontFamily: "PBold",
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
            gap: 10,
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
              d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
            />
          </Svg>
          <Text
            style={{
              color: "#4D4D4D",
              fontSize: 17,
              fontFamily: "PBold",
              textAlignVertical: "center",
            }}
          >
            Location
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
