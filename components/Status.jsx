import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Status = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{
        height: 200,
        width: "99%",
        marginBottom: 35,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={{
          height: 200,
          //   backgroundColor: "red",
          width: 130,
          borderRadius: 15,
          // borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Image
          source={require("../assets/post.jpg")}
          style={{
            height: 200,
            width: 125,
            borderRadius: 15,
            resizeMode: "cover",
          }}
        ></Image>
        <View
          style={{
            position: "absolute",
            bottom: 5,
            color: "black",
            fontFamily: "MMedium",
            backgroundColor: "white",
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              position: "absolute",
              bottom: 5,
              color: "black",
              fontFamily: "MMedium",
              backgroundColor: "white",
            }}
          >
            Add to Status
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={["", "", "", ""]}
        horizontal
        renderItem={() => {
          return (
            <TouchableOpacity
              style={{
                height: 200,
                //   backgroundColor: "red",
                width: 130,
                borderRadius: 15,
                // borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../assets/post.jpg")}
                style={{
                  height: 200,
                  width: 125,
                  borderRadius: 15,
                  resizeMode: "cover",
                }}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  bottom: 5,
                  color: "black",
                  fontFamily: "MMedium",
                  backgroundColor: "white",
                  //   borderRadius: 5,
                }}
                numberOfLines={1}
              >
                agucchristopher
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default Status;

const styles = StyleSheet.create({});
