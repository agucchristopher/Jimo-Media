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
import { Svg, Path } from "react-native-svg";
import { router } from "expo-router";
const profile = ({ popup }) => {
  let title = "";
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
            marginTop: 10,
            alignSelf: "flex-start",
            fontSize: 20,
          }}
        >
          Lab Scientist ❤️‍🔥❤️‍🔥
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
