import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  StackNavProduct,
  StackNavChat,
  StackNavExhibit,
  StackNavSearch,
  StackNavMenu
} from "./StackNav";
import Icon from "react-native-vector-icons/Ionicons";

const TabNav = createBottomTabNavigator(
  {
    TabItem1: {
      screen: StackNavProduct,
      navigationOptions: {
        tabBarLabel: "商品一覧",
        tabBarIcon: <Icon name="ios-home" size={30} />
      }
    },
    TabItem2: {
      screen: StackNavChat,
      navigationOptions: {
        tabBarLabel: "取引チャット",
        tabBarIcon: <Icon name="ios-chatboxes" size={30} />
      }
    },
    TabItem3: {
      screen: StackNavExhibit,
      navigationOptions: {
        tabBarLabel: "出品",
        tabBarIcon: <Icon name="ios-camera" size={30} />
      }
    },
    TabItem4: {
      screen: StackNavSearch,
      navigationOptions: {
        tabBarLabel: "検索",
        tabBarIcon: <Icon name="ios-search" size={30} />
      }
    },
    TabItem5: {
      screen: StackNavMenu,
      navigationOptions: {
        tabBarLabel: "メニュー",
        tabBarIcon: <Icon name="ios-menu" size={30} />
      }
    }
  }
  // {
  //   initialRouteName: "StackNavScreen"
  // }
);

export default TabNav;
