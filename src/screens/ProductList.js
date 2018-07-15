import React from "react";
import { Button, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Icon size={30} name="ios-trash" />
        <Button
          onPress={() => this.props.navigation.navigate("DetailScreen")}
          title="detail"
        />
      </View>
    );
  }
}
