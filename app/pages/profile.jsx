import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/AuthHeader";
import { Svg, Path } from "react-native-svg";
import { router } from "expo-router";
import AsynStorage from "@react-native-async-storage/async-storage";
const profile = () => {
  let title = "Settings";
  let popup;
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
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
        <TouchableOpacity
          style={{
            width: "99%",
            // backgroundColor: "red",
            height: 80,
            margin: 5,
            flexDirection: "row",
            gap: 5,
            padding: 5,
          }}
        >
          <Image
            source={require("../../assets/pfp.jpg")}
            style={{
              height: 30,
              width: 30,
              borderRadius: 1000,
              resizeMode: "cover",
            }}
          />
          <View style={{ flexDirection: "column", width: "80%" }}>
            <Text
              style={{ fontFamily: "MBold", fontSize: 18 }}
              numberOfLines={3}
            >
              @agucchristopher
            </Text>
            <Text
              style={{ fontFamily: "MMedium", color: "grey", fontSize: 16 }}
            >
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "99%",
            // backgroundColor: "red",
            height: 80,
            margin: 5,
            flexDirection: "row",
            gap: 5,
            padding: 5,
            gap: 10,
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height={30}
            width={30}
          >
            <Path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z" />
          </Svg>
          <View style={{ flexDirection: "column", width: "80%" }}>
            <Text
              style={{ fontFamily: "MBold", fontSize: 18 }}
              numberOfLines={3}
            >
              Friends
            </Text>
            <Text style={{ fontFamily: "MMedium", color: "grey" }}>
              View your friend list
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await AsynStorage.clear();
            router.replace("/");
          }}
          style={{
            width: "99%",
            // backgroundColor: "red",
            height: 80,
            margin: 5,
            flexDirection: "row",
            gap: 5,
            padding: 5,
            gap: 10,
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height={30}
            width={30}
          >
            <Path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z" />
          </Svg>
          <View style={{ flexDirection: "column", width: "80%" }}>
            <Text
              style={{ fontFamily: "MBold", fontSize: 18 }}
              numberOfLines={3}
            >
              Log Out
            </Text>
            <Text style={{ fontFamily: "MMedium", color: "grey" }}>
              {/* View your friend list */}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
