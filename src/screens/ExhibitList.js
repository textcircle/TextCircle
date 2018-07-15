import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Detail from "./Detail";
import Chat from "./Chat";
import Icon from "react-native-vector-icons/Ionicons";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>出品一覧</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DetailScreen")}
          title="detail"
        />
      </View>
    );
  }
}
