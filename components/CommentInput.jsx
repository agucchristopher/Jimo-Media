// src/CommentInput.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const CommentInput = ({ onSend, onChangeText }) => {
  const [comment, setComment] = useState("");

  const handleSend = () => {
    if (`${comment}`.trim()) {
      onSend();
      setComment(""); // Clear the input field after sending
    } else {
      Alert.alert("Error", "Comment cannot be empty.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write a comment..."
        // value={comment}
        onChangeText={(e) => {
          onChangeText(e);
          console.log(e);
        }}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default CommentInput;
