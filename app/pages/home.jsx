import {
  ActivityIndicator,
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
  useEffect(() => {
    setTimeout(() => {
      setposts(["agucchristopher", "jimo", "cj", "042_sv", "odumo"]);
    }, 3000);
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
        {posts.map((data, i) => {
          return (
            <PostContent
              i={i}
              data={data}
              liked={i < 1 ? true : false}
              key={i}
            />
          );
        })}
        {!posts.length ? (
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
