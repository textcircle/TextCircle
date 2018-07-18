import React from "react";
import { Button } from "react-native";
import firebase from "react-native-firebase";

export default class ProductList extends React.Component {
  registration = () => {
    console.log("test");
    console.log(firebase);
    firebase
      .firestore()
      .collection("test")
      .add({
        name: "test",
        content: "content",
        token: "token"
      })
      .catch(err => {
        console.log("err: " + err);
      });
  };

  render() {
    return (
      <Button
        title="test"
        onPress={() => {
          console.log("tes");
          this.registration();
        }}
      />
    );
  }
}
