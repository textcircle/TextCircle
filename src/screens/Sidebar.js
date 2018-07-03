import { createDrawerNavigator } from "react-navigation";
import MainPage from "./MainPage";

const Sidebar = createDrawerNavigator({
  DrawerItem1: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: "Item1"
    }
  }
});

export default Sidebar;
