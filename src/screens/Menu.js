import React from "react";
import { Button, FlatList, TouchableOpacity } from "react-native";

const menu = [
  {
    key: "mypage",
    title: "Mypage",
    screen: "MypageScreen"
  },
  {
    key: "inquiry",
    title: "Inquiry",
    screen: "InquiryScreen"
  },
  {
    key: "logout",
    title: "logout",
    screen: "ProductListScreen"
  }
];

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.navigation);
    return (
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <Button
            title={item.title}
            onPress={() => this.props.navigation.navigate(item.screen)}
          />
        )}
      />
    );
  }
}
