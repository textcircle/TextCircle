import React from "react";
import { Alert, Button, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Detail from "./Detail";
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
    DetailScreen: Detail
  },
  {
    initialRouteName: "ProductListScreen"
  }
);
