import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const headerButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.toggleDrawer();
      }}
    >
      <Icon name="ios-menu" size={30} />
    </TouchableOpacity>
  );
};

export default headerButton;
