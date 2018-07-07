import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import ProductListScreen from "./ProductList";
import ChatListScreen from "./ChatList";
import ExhibitScreen from "./Exhibit";
import SearchScreen from "./Search";
import Icon from "react-native-vector-icons/Ionicons";

const Main = createBottomTabNavigator({
  TabItem1: {
    screen: ProductListScreen,
    navigationOptions: {
      tabBarLabel: "商品一覧",
      tabBarIcon: <Icon name="ios-home" size={30} />
    }
  },
  TabItem2: {
    screen: ChatListScreen,
    navigationOptions: {
      tabBarLabel: "取引チャット",
      tabBarIcon: <Icon name="ios-chatboxes" size={30} />
    }
  },
  TabItem3: {
    screen: ExhibitScreen,
    navigationOptions: {
      tabBarLabel: "出品",
      tabBarIcon: <Icon name="ios-camera" size={30} />
    }
  },
  TabItem4: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: "検索",
      tabBarIcon: <Icon name="ios-search" size={30} />
    }
  }
});

export default Main;
