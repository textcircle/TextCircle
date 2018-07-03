import { createBottomTabNavigator } from "react-navigation";
import ProductListScreen from "./ProductList";
import ChatListScreen from "./ChatList";
import ExhibitListScreen from "./ExhibitList";
import SearchScreen from "./Search";

const Main = createBottomTabNavigator({
  TabItem1: {
    screen: ProductListScreen,
    navigationOptions: {
      tabBarLabel: "商品一覧"
    }
  },
  TabItem2: {
    screen: ChatListScreen,
    navigationOptions: {
      tabBarLabel: "取引チャット"
    }
  },
  TabItem3: {
    screen: ExhibitListScreen,
    navigationOptions: {
      tabBarLabel: "出品"
    }
  },
  TabItem4: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: "検索"
    }
  }
});

export default Main;
