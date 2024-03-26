import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Toast = ({ status, mesage }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(800)}
      exiting={FadeOutDown.duration(800)}
      style={{
        height: 80,
        position: "absolute",
        top: 25,
        backgroundColor: status ? "lightgreen" : "crimson",
        width: "95%",
        alignSelf: "center",
        margin: 5,
        flexDirection: "row",
        rowGap: 5,
        borderRadius: 15,
        zIndex: 50,

        // opacity: 20,
      }}
    >
      <View
        style={{
          //   backgroundColor: "red",
          width: "85%",
          alignSelf: "center",
          padding: 15,
          marginLeft: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "PBold",
            fontSize: 18,
            color: status ? "#121212" : "white",
          }}
        >
          {status ? "Success" : "Error"}
        </Text>
        <Text
          style={{
            fontFamily: "MMedium",
            fontSize: 16,
            color: status ? "#121212" : "white",
          }}
        >
          {mesage}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Toast;

const styles = StyleSheet.create({});
