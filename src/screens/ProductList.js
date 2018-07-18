import React from "react";
import { Button, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "react-native-firebase";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("DetailScreen")}
          title="detail"
        />
      </View>
    );
  }
}
