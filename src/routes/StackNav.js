import { createStackNavigator } from "react-navigation";
import ProductList from "../screens/ProductList";
import Detail from "../screens/Detail";
import Chat from "../screens/Chat";
import ChatList from "../screens/ChatList";
import Exhibit from "../screens/Exhibit";
import Search from "../screens/Search";
import Menu from "../screens/Menu";
import Mypage from "../screens/Mypage";
import ExhibitList from "../screens/ExhibitList";
import Inquiry from "../screens/Inquiry";

export const StackNavProduct = createStackNavigator({
  ProductListScreen: {
    screen: ProductList,
    navigationOptions: ({ navigation }) => ({
      title: "商品一覧"
    })
  },
  DetailScreen: {
    screen: Detail,
    title: "商品詳細"
  },
  ChatScreen: {
    screen: Chat,
    title: "取引"
  },
  MenuScreen: { screen: Menu },
  MypageScreen: { screen: Mypage },
  ExhibitListScreen: { screen: ExhibitList },
  InquiryScreen: { screen: Inquiry }
});

export const StackNavChat = createStackNavigator({
  ChatListScreen: {
    screen: ChatList,
    navigationOptions: ({ navigation }) => ({
      title: "チャット一覧"
    })
  },
  ChatScreen: { screen: Chat }
});

export const StackNavExhibit = createStackNavigator({
  ExhibitScreen: {
    screen: Exhibit,
    navigationOptions: ({ navigation }) => ({
      title: "出品一覧"
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
});

export const StackNavSearch = createStackNavigator({
  SearchScreen: {
    screen: Search,
    title: "検索"
  },
  ProductListScreen: {
    screen: ProductList,
    navigationOptions: ({ navigation }) => ({
      title: "商品一覧"
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
});

export const StackNavMenu = createStackNavigator({
  MenuScreen: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      title: "メニュー"
    })
  },
  DetailScreen: {
    screen: Detail,
    title: "商品詳細"
  },
  ChatScreen: {
    screen: Chat,
    title: "取引"
  },
  MenuScreen: { screen: Menu },
  MypageScreen: { screen: Mypage },
  ExhibitListScreen: { screen: ExhibitList },
  InquiryScreen: { screen: Inquiry }
});
