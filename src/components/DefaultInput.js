import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    {...props}
    underlineColorAndroid="transparent"
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    marginBottom: 14
  }
});

export default defaultInput;
