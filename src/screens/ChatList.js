import React from "react";
import { View, Button } from "react-native";

export default class ProductList extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("ChatScreen")}
          title="chat"
        />
      </View>
    );
  }
}
