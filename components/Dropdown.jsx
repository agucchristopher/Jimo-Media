import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
const Dropdown = ({
  placeholder,
  inputPlaceholder,
  type,
  keyboardType,
  onPress,
}) => {
  let [eye, seteye] = React.useState(false);
  return (
    <View
      style={{
        marginLeft: 25,
        marginRight: 25,
        gap: 2,
        margin: 10,
        alignSelf: "center",
      }}
    >
      <Text style={{ fontFamily: "MMedium", fontSize: 16, marginLeft: 5 }}>
        {placeholder}
      </Text>
      <TouchableOpacity
        onPress={() => {
          onPress ? onPress() : null;
          // seteye(!eye);
        }}
        style={{
          // marginLeft: 25,
          // marginRight: 25,
          marginTop: 5,
          height: 55,
          flexDirection: "row",
          width: Dimensions.get("screen").width * 0.9,
          backgroundColor: "#F1F1F1",
          borderRadius: 10,
          alignItems: "center",
          padding: 0,
          justifyContent: "center",
        }}
      >
        <Text
          secureTextEntry={type == "password" && !eye ? true : false}
          keyboardType={keyboardType}
          style={{
            backgroundColor: "#F1F1F1",
            height: 48,
            width:
              type == "password"
                ? Dimensions.get("screen").width * 0.8
                : Dimensions.get("screen").width * 0.8,
            marginTop: 10,
            borderRadius: 10,
            alignSelf: "center",
            color: "grey",
            fontFamily: "MMedium",
            alignSelf: "center",
            padding: 15,
            margin: 5,
            marginRight: 0,
            outline: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
          placeholder={inputPlaceholder}
        >
          {inputPlaceholder}
        </Text>
        {/* {type == "password" && ( */}
        <TouchableOpacity>
          <Svg
            viewBox="0 0 24 24"
            height={24}
            width={24}
            fill={"#7C7C7C"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d={
                eye
                  ? "M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                  : "M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
              }
            />
          </Svg>
        </TouchableOpacity>
        {/* )} */}
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
