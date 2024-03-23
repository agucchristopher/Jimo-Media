import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../assets/data";
import { Svg, Path } from "react-native-svg";
import { router } from "expo-router";
const PostContent = ({ i, liked, data }) => {
  let [likedContent, setlikedContent] = useState(liked);
  // tests
  return (
    <View
      style={{
        height: 350,
        alignSelf: "center",
        width: Dimensions.get("window").width * 0.99,
        margin: 3,
        marginTop: i === 0 ? 0 : 15,
        backgroundColor: "#fff",
        // borderRadius: 5,
        padding: 15,
        borderTopWidth: 0.75,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("./../assets/pfp.jpg")}
            style={{
              height: 55,
              width: 55,
              borderRadius: 1000,
              resizeMode: "cover",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 48,
            width: Dimensions.get("screen").width * 0.7,
            borderRadius: 1000,
            fontFamily: "MMedium",
            paddingLeft: 5,
            margin: 5,
            marginRight: 0,
            outline: "none",
            justifyContent: "center",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => router.push("/profile")}>
              <Text
                style={{
                  color: "#121212",
                  fontFamily: "PBold",
                  fontSize: 18,
                  justifyContent: "flex-end",
                }}
              >
                @{data}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                backgroundColor: Colors.primary,
                padding: 4.5,
                margin: 3,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "PBold",
                  fontSize: 16,
                }}
              >
                Send Gift
              </Text>
            </TouchableOpacity> */}
          </View>
          <Text
            style={{
              color: "grey",
              fontFamily: "MMedium",
            }}
          >
            Happy Birthday to me, I wish myself all the joys on earth.
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require("../assets/post.jpg")}
          style={{
            height: 200,
            width: "100%",
            resizeMode: "cover",
            marginTop: 10,
            borderRadius: 5,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width * 0.85,
          alignSelf: "center",
          gap: 15,
        }}
      >
        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "#F1F1F1",
            marginTop: 15,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setlikedContent(!likedContent)}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            // fill={Colors.primary}
            fill={likedContent ? Colors.primary : "grey"}
          >
            <Path d="M14.75,7c-1.2,0-2.19,.55-2.75,1.43-.56-.88-1.55-1.43-2.75-1.43-1.79,0-3.25,1.57-3.25,3.5,0,3.36,5.48,7.25,5.71,7.41l.29,.2,.29-.2c.23-.16,5.71-4.05,5.71-7.41,0-1.93-1.46-3.5-3.25-3.5Zm-2.75,9.88c-1.63-1.2-5-4.16-5-6.38,0-1.38,1.01-2.5,2.25-2.5,1.32,0,2.25,.92,2.25,2.23v.77h1v-.77c0-1.31,.93-2.23,2.25-2.23,1.24,0,2.25,1.12,2.25,2.5,0,2.22-3.37,5.18-5,6.38ZM12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,23c-6.07,0-11-4.93-11-11S5.93,1,12,1s11,4.93,11,11-4.93,11-11,11Z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "#F1F1F1",
            marginTop: 15,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            // fill={Colors.primary}
            fill={"grey"}
          >
            <Path d="m13,10c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-10,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1ZM24,3.5v13c0,1.93-1.57,3.5-3.5,3.5h-3.532l-3.985,3.295c-.275.245-.626.368-.978.368-.356,0-.716-.126-1.001-.379l-3.898-3.284h-3.605c-1.93,0-3.5-1.57-3.5-3.5V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-1,0c0-1.378-1.121-2.5-2.5-2.5H3.5c-1.379,0-2.5,1.122-2.5,2.5v13c0,1.378,1.121,2.5,2.5,2.5h3.788c.118,0,.232.042.322.118l4.048,3.41c.199.178.485.176.674.008l4.138-3.421c.09-.074.202-.115.318-.115h3.712c1.379,0,2.5-1.122,2.5-2.5V3.5Z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "#F1F1F1",
            marginTop: 15,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            // fill={Colors.primary}
            fill={"grey"}
          >
            <Path d="m16,10c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3c0,.35.061.687.172.999l-3.831,2.128c-.55-.686-1.395-1.127-2.341-1.127-1.654,0-3,1.346-3,3s1.346,3,3,3c.946,0,1.791-.441,2.341-1.127l3.83,2.128c-.111.313-.172.649-.172.999,0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3c-.946,0-1.791.441-2.341,1.127l-3.83-2.128c.111-.313.172-.649.172-.999s-.061-.686-.172-.999l3.831-2.128c.55.686,1.395,1.127,2.341,1.127Zm0,5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2c0-1.359,1.259-2,2-2Zm-9-1c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm9-9c1.103,0,2,.897,2,2s-.897,2-2,2c-1.128,0-2-1-2-2,0-1.103.897-2,2-2Zm3.5-5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15Z" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({});
