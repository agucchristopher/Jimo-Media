import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
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
  let [refreshing, setrefreshing] = useState(false);
  let getPosts = async () => {
    setloading(true);
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = "email=aguchris740@gmail.com";

    let response = await fetch(
      "https://jimo-media-backend.vercel.app/post/getPosts",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).finally(() => setloading(false));

    let data = await response.json();
    console.log("data: ", data);
    let newposts = data.posts;
    // setposts(data.posts);
    setposts(newposts);
    console.log("first", posts);
  };
  useEffect(() => {
    getPosts();
    setTimeout(() => {}, 3000);
  }, []);
  useEffect(async () => {
    let user = await AsyncStorage.getItem("user");
    console.log(user);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 0, backgroundColor: "white" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white", padding: 5 }}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setrefreshing(true);
              getPosts().finally(() => setrefreshing(false));
            }}
            refreshing={refreshing}
          />
        }
      >
        <Post />
        {/* <Status /> */}
        <View style={{ width: "100%", borderWidth: 0.75, marginTop: 25 }} />
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
        {!loading && posts.length == [] ? (
          <Text
            style={{
              margin: 15,
              textAlign: "center",
              fontFamily: "MMedium",
            }}
          >
            No Posts to show
          </Text>
        ) : null}
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
