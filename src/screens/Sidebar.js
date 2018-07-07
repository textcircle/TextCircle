import { createDrawerNavigator } from "react-navigation";
import MainPage from "./MainPage";
import InquiryScreen from "./Inquiry";
import ExhibitList from "./ExhibitList";
import Mypage from "./Mypage";

const Sidebar = createDrawerNavigator({
  DrawerItem1: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: "ホーム"
    }
  },
  DrawerItem2: {
    screen: Mypage,
    navigationOptions: {
      drawerLabel: "マイページ"
    }
  },
  DrawerItem3: {
    screen: ExhibitList,
    navigationOptions: {
      drawerLabel: "出品した商品"
    }
  },
  DrawerItem4: {
    screen: InquiryScreen,
    navigationOptions: {
      drawerLabel: "お問い合わせ"
    }
  },
  DrawerItem5: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: "ログアウト"
    }
  }
});

export default Sidebar;
