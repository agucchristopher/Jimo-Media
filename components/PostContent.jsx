import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../assets/data";
import { Svg, Path, SvgUri } from "react-native-svg";
import { router } from "expo-router";
import { SvgXml } from "react-native-svg";
const PostContent = ({ i, liked, data }) => {
  let [likedContent, setlikedContent] = useState(liked);
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    // Fetch the SVG content from an external URL
    fetch(
      "https://avatar.oxro.io/avatar.svg?name=Jabulani&background=6ab04c&color=000"
    )
      .then((response) => response.text())
      .then((svgData) => {
        console.log(svgData);
        setSvgContent(svgData);
      })
      .catch((error) => console.error("Error fetching SVG:", error));
  }, []);
  let randomColors = () => {
    let hash = Math.round(Math.random() * 10);
    let colors = ["000039", "ffa500", "00ff00", "ff0000"];
    // if (hash > 3) {
    //   return colors[2];
    // } else {
    //   return colors[hash];
    // }
    return "000039";
  };
  return (
    <View
      style={{
        height: data.image !== "" || data.image ? 320 : 150,
        alignSelf: "center",
        width: Dimensions.get("window").width * 0.99,
        margin: 3,
        marginTop: i == 0 ? 20 : 15,
        backgroundColor: "#fff",
        padding: 15,
        borderTopWidth: i == 0 ? 0 : 0.75,
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
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/profile",
              params: { owner: JSON.stringify(data.owner) },
            })
          }
        >
          <Image
            height={25}
            width={25}
            source={{
              uri: data?.owner.avatar
                ? data.owner.avatar
                : "https://api.dicebear.com/8.x/pixel-art/svg",
            }}
            style={{ width: 45, height: 40, borderRadius: 1000 }}
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
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/profile",
                  params: { owner: JSON.stringify(data.owner) },
                })
              }
            >
              <Text
                style={{
                  color: "#121212",
                  fontFamily: "PBold",
                  fontSize: 18,
                  justifyContent: "flex-end",
                }}
              >
                @{data?.owner?.username}
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
            {`${data?.content}`.length && data?.content !== "false"
              ? data.content
              : ""}
          </Text>
        </View>
      </View>
      {data.image !== "" || data.image ? (
        <TouchableOpacity>
          <Image
            source={{ uri: data.image }}
            style={{
              height: 120,
              width: "100%",
              resizeMode: "contain",
              marginTop: 10,
              borderRadius: 5,
              aspectRatio: 0.5,
            }}
          />
        </TouchableOpacity>
      ) : null}
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
            fill={likedContent ? Colors.primary : "grey"}
          >
            <Path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z" />
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
            fill={"grey"}
          >
            <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10V12H9V10H7ZM11 10V12H13V10H11ZM15 10V12H17V10H15Z" />
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
            fill={"grey"}
          >
            <Path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostContent;
