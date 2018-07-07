import React from "react";
import { Button, View, Text } from "react-native";

class Detail extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("ChatScreen")}
          title="chat"
        />
      </View>
    );
  }
}

export default Detail;
