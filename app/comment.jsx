import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import AuthHeader from components/AuthHeader";
import { Svg, Path } from "react-native-svg";
import { router, useLocalSearchParams } from "expo-router";
import moment from "moment";
import CommentInput from "../components/CommentInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
const comments = ({ popup }) => {
  let title = "Comments";
  let params = useLocalSearchParams();
  let { owner } = params;
  owner = JSON.parse(owner);
  console.log(owner);
  let [postID, setpostID] = useState(owner?.id);
  let [user, setuser] = useState();
  let [commnts, setcommnts] = useState();
  let [newcomment, setnewcomment] = useState();
  let [loading, setloading] = useState(false);
  let [posting, setposting] = useState(false);
  const getComments = async () => {
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      postID,
    });

    let response = await fetch(
      "https://jimo-media-backend-o4n3.onrender.com/post/getComments",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    )
      .finally(() => setloading(false))
      .catch(() => setloading(false));

    let data = await response?.json();
    console.log(data);
    setcommnts(data?.comments);
  };
  const postComment = async () => {
    console.log("Posting...");
    setposting(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      postID: postID,
      email: user?.email,
      content: newcomment,
    });

    let response = await fetch(
      "https://jimo-media-backend-o4n3.onrender.com/post/makeComment",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    )
      .then(() => setposting(false))
      .finally(() => setposting(false));
    getComments();
    let data = await response?.json();
    console.log(data);
  };
  let getUser = async () => {
    console.log("Getting User...");
    let u = await AsyncStorage.getItem("user");
    u = JSON.parse(u);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${u?.email}`;

    let response = await fetch(
      "https://jimo-media-backend-o4n3.onrender.com/getUser",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).finally(() => setloading(false));

    let data = await response.json();
    console.log("data: ", data);
    if (data.status) {
      let jsonUser = JSON.stringify(data?.user);
      await AsyncStorage.setItem("user", jsonUser);
    }
    u = await AsyncStorage.getItem("user");
    console.log(u);
    setuser(JSON.parse(u));
  };
  useEffect(() => {
    getUser();
    getComments();
  }, []);

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
            style={{ width: "27%", marginLeft: 5 }}
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
        <Text
          style={{ alignSelf: "center", color: "grey", fontSize: 18 }}
        ></Text>
        <FlatList
          data={commnts}
          renderItem={({ index, item }) => {
            return (
              <Comment
                author={item.user.username}
                image={item.user.avatar}
                timestamp={item.createdAt}
                // i={index}
                // data={item}
                // liked={index < 1 ? true : false}
                // key={index}
                text={item?.content}
              />
            );
          }}
        />
      </ScrollView>
      <CommentInput
        loading={posting}
        onChangeText={(e) => setnewcomment(e)}
        onSend={() => postComment()}
      />
    </SafeAreaView>
  );
};

export default comments;
const Comment = ({ author, text, timestamp, image }) => {
  const timeAgo = moment(timestamp).fromNow();

  console.log(timeAgo);
  return (
    <View style={styles.commentContainer}>
      <Image
        source={{ uri: image }}
        style={{
          height: 30,
          width: 30,
          alignSelf: "center",
          borderRadius: 1000,
        }}
      />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.text}>{text}</Text>
        {/* <Text style={styles.timestamp}>{timestamp}</Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  commentContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: "row",
    gap: 5,
  },
  author: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
});
