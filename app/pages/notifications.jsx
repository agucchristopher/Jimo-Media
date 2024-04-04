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
const notifications = ({ popup }) => {
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
        {/* <FlatList
          data={[""]}
          renderItem={() => {
            return (
              <TouchableOpacity
                style={{
                  width: "99%",
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
                    height: 55,
                    width: 55,
                    borderRadius: 1000,
                    resizeMode: "cover",
                  }}
                />
                <View style={{ flexDirection: "column", width: "80%" }}>
                  <Text style={{ fontFamily: "MBold" }} numberOfLines={3}>
                    Gold Nseuwem posted 3 new videos, includin g A prototype of
                    a food app Gold Nseuwem posted 3 new videos, includin g A
                    prototype of a food app Gold Nseuwem posted 3 new videos,
                    includin g A prototype of a food app
                  </Text>
                  <Text style={{ fontFamily: "MMedium", color: "grey" }}>
                    12 mins ago
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        /> */}
        <Text style={{ alignSelf: "center", color: "grey", fontSize: 18 }}>
          This feature is coming soon!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default notifications;

const styles = StyleSheet.create({});
