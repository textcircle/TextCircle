import { createDrawerNavigator } from "react-navigation";
import MainPage from "./MainPage";
import InquiryScreen from "./Inquiry";
import ExhibitList from "./ExhibitList";

const Sidebar = createDrawerNavigator({
  DrawerItem1: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: "ホーム"
    }
  },
  DrawerItem2: {
    screen: ExhibitList,
    navigationOptions: {
      drawerLabel: "出品した商品"
    }
  },
  DrawerItem3: {
    screen: InquiryScreen,
    navigationOptions: {
      drawerLabel: "お問い合わせ"
    }
  },
  DrawerItem4: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: "ログアウト"
    }
  }
});

export default Sidebar;
