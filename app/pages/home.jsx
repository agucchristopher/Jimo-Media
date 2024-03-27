import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../components/Post";
import PostContent from "../../components/PostContent";
import { Colors } from "../../assets/data";
import Status from "../../components/Status";
import AsyncStorage from "@react-native-async-storage/async-storage";
const home = () => {
  let [posts, setposts] = useState([]);
  let [loading, setloading] = useState(false);
  useEffect(() => {
    let getPosts = async () => {
      setloading(true);
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/x-www-form-urlencoded",
      };

      let bodyContent = "email=aguchris740@gmail.com";

      let response = await fetch("http://127.0.0.1:8080/post/getPosts", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }).finally(() => setloading(false));

      let data = await response.json();
      console.log("data: ", data);
      let newposts = data.posts;
      // setposts(data.posts);
      setposts(newposts);
      console.log("first", posts);
    };
    getPosts();
    setTimeout(() => {}, 3000);
  }, []);
  useEffect(async () => {
    let user = await AsyncStorage.getItem("user");
    console.log(user);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 0, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
        <Post />
        <Status />

        <FlatList
          data={posts}
          renderItem={({ index, item }) => {
            return (
              <PostContent
                i={index}
                data={item}
                liked={index < 1 ? true : false}
                key={index}
              />
            );
          }}
        />
        {loading ? (
          <View style={{ marginTop: 15 }}>
            <ActivityIndicator color={Colors.primary} />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
