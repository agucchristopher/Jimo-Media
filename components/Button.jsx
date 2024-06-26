import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Button = ({ title, onPress, bg, loading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        width: Dimensions.get("screen").width * 0.92,
        backgroundColor: bg,
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size={24} />
      ) : (
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            fontFamily: "MBold",
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
