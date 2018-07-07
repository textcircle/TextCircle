import React from "react";
import { Button, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Detail from "./Detail";
import Chat from "./Chat";
import Icon from "react-native-vector-icons/Ionicons";

class ProductList extends React.Component {
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

export default createStackNavigator(
  {
    ProductListScreen: {
      screen: ProductList,
      navigationOptions: ({ navigation }) => ({
        title: "出品した商品",
        headerLeft: (
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Icon name="ios-menu" size={30} />
          </TouchableOpacity>
        )
      })
    },
    DetailScreen: {
      screen: Detail,
      title: "商品詳細"
    },
    ChatScreen: {
      screen: Chat,
      title: "取引"
    }
  },
  {
    initialRouteName: "ProductListScreen"
  }
);
