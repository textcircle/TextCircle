import React from "react";
import { Button, View, Modal } from "react-native";

class Detail extends React.Component {
  state = {
    visible: false
  };
  checkAuth = () => {
    const checkAuth = false; //ここで認証されているかチェックを行う
    if (checkAuth) {
      this.props.navigation.navigate("ChatScreen");
    } else {
      this.setState({ visible: true });
    }
  };

  closeModalWindow = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <View>
        <Button onPress={this.checkAuth} title="chat" />
        <Modal
          style={{ flex: 1 }}
          visible={this.state.visible}
          animationType="slide"
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <Button title="check auth" onPress={this.closeModalWindow} />
        </Modal>
      </View>
    );
  }
}

export default Detail;
