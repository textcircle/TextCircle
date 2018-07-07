import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import HeaderButton from "../components/HeaderButton";

class Inquiry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text>test</Text>;
  }
}

export default createStackNavigator(
  {
    InquiryScreen: {
      screen: Inquiry,
      navigationOptions: ({ navigation }) => ({
        title: "お問い合わせ",
        headerLeft: <HeaderButton navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: "InquiryScreen"
  }
);
