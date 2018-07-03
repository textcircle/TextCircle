import React from "react";
import { TabNavigator } from "react-navigation";
import ProductListScreen from "./ProductList";
import { Text, Button } from "react-native";
import MainPage from "./MainPage";

// const AuthPage = TabNavigator({
//   screen: ProductListScreen
// });

class Auth extends React.Component {
  render() {
    return <Button onPress={MainPage} title={test} />;
  }
}

export default Auth;
