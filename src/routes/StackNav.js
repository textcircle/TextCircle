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
    navigationOptions: () => ({
      title: "商品一覧"
    })
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: () => ({
      title: "商品詳細"
    })
  },
  ChatScreen: {
    screen: Chat,
    navigationOptions: () => ({
      title: "取引"
    })
  }
});

export const StackNavChat = createStackNavigator({
  ChatListScreen: {
    screen: ChatList,
    navigationOptions: () => ({
      title: "チャット一覧"
    })
  },
  ChatScreen: {
    screen: Chat,
    navigationOptions: () => ({
      title: "取引"
    })
  }
});

export const StackNavExhibit = createStackNavigator({
  ExhibitScreen: {
    screen: Exhibit,
    navigationOptions: () => ({
      title: "出品"
    })
  }
});

export const StackNavSearch = createStackNavigator({
  SearchScreen: {
    screen: Search,
    navigationOptions: () => ({
      title: "検索"
    })
  },
  ProductListScreen: {
    screen: ProductList,
    navigationOptions: () => ({
      title: "商品一覧"
    })
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: () => ({
      title: "商品詳細"
    })
  },
  ChatScreen: {
    screen: Chat,
    navigationOptions: () => ({
      title: "取引"
    })
  }
});

export const StackNavMenu = createStackNavigator({
  MenuScreen: {
    screen: Menu,
    navigationOptions: () => ({
      title: "メニュー"
    })
  },
  MypageScreen: {
    screen: Mypage,
    navigationOptions: () => ({
      title: "マイページ"
    })
  },

  ExhibitListScreen: {
    screen: ExhibitList,
    navigationOptions: () => ({
      title: "出品一覧"
    })
  },
  InquiryScreen: {
    screen: Inquiry,
    navigationOptions: () => ({
      title: "お問い合わせ"
    })
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: () => ({
      title: "商品詳細"
    })
  },
  ChatScreen: {
    screen: Chat,
    navigationOptions: () => ({
      title: "取引"
    })
  }
});
