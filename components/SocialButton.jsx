import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  // ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../assets/data";
import { Svg, Path } from "react-native-svg";
const SocialButton = ({ type }) => {
  return (
    <TouchableOpacity
      // onPress={() =>
      //   Platform.OS == "ios" || Platform.OS == "web"
      //     ? alert("This feauture is currently unavailable")
      //     : ToastAndroid.show("This feauture is currently unavailable", 2000)
      // }
      style={{
        height: 55,
        width: Dimensions.get("screen").width * 0.9,
        borderColor: "darkgrey",
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 0.8,
        marginBottom: 8,
        flexDirection: "row",
      }}
    >
      {type == "facebook" ? (
        <Svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          style={{ alignSelf: "center", marginRight: 10 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d={
              "M14.7956 25V14.0703H18.3496L18.8779 9.79094H14.7956V7.06518C14.7956 5.83032 15.1272 4.98485 16.8355 4.98485H19V1.16959C17.9468 1.05249 16.8882 0.995949 15.829 1.00023C12.6877 1.00023 10.5308 2.98987 10.5308 6.64245V9.78294H7V14.0623H10.5386V25H14.7956Z"
            }
            fill="#4092FF"
          />
        </Svg>
      ) : (
        <Svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          style={{ alignSelf: "center", marginRight: 10 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M6.42014 15.4656L5.59739 18.537L2.59026 18.6006C1.69158 16.9338 1.18182 15.0266 1.18182 13C1.18182 11.0403 1.65843 9.1922 2.50324 7.56494H2.50389L5.18108 8.05576L6.35385 10.7169C6.10839 11.4325 5.9746 12.2007 5.9746 13C5.9747 13.8675 6.13184 14.6987 6.42014 15.4656Z"
            fill="#FBBB00"
          />
          <Path
            d="M24.6117 10.7921C24.7474 11.507 24.8182 12.2453 24.8182 12.9999C24.8182 13.846 24.7292 14.6713 24.5598 15.4675C23.9845 18.1765 22.4812 20.5421 20.3987 22.2161L20.3981 22.2155L17.026 22.0434L16.5488 19.0642C17.9306 18.2538 19.0105 16.9856 19.5793 15.4675H13.2598V10.7921H19.6715H24.6117Z"
            fill="#518EF8"
          />
          <Path
            d="M20.3981 22.2156L20.3987 22.2162C18.3734 23.8441 15.8006 24.8181 13 24.8181C8.49936 24.8181 4.58639 22.3026 2.59027 18.6006L6.42015 15.4656C7.41818 18.1292 9.98767 20.0253 13 20.0253C14.2948 20.0253 15.5078 19.6753 16.5487 19.0643L20.3981 22.2156Z"
            fill="#28B446"
          />
          <Path
            d="M20.5436 3.90253L16.715 7.03693C15.6377 6.36357 14.3643 5.97459 13.0001 5.97459C9.91953 5.97459 7.30199 7.95769 6.35395 10.7168L2.50394 7.56487H2.5033C4.47019 3.77267 8.43252 1.18176 13.0001 1.18176C15.8676 1.18176 18.4968 2.2032 20.5436 3.90253Z"
            fill="#F14336"
          />
        </Svg>
      )}
      <Text
        style={{ alignSelf: "center", fontSize: 15, fontFamily: "MMedium" }}
      >
        Continue with {type == "facebook" ? "Facebook" : "Google"}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});
