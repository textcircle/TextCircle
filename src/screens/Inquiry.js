import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import DefaultInput from "../components/DefaultInput";

export default class Inquiry extends React.Component {
  state = {
    name: "",
    mail: "",
    content: ""
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>お問い合わせ</Text>
          <Text>名前</Text>
          <DefaultInput
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <Text>メールアドレス</Text>
          <DefaultInput
            onChangeText={mail => this.setState({ mail })}
            value={this.state.mail}
          />
          <Text>お問い合わせ内容</Text>
          <DefaultInput
            onChangeText={content => this.setState({ content })}
            value={this.state.content}
          />
          <Button
            style={styles.button}
            title="問い合わせる"
            onPress={() => console.log("pressed")}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50
  },
  inputContainer: {
    width: "80%"
  },
  title: {
    fontSize: 26,
    marginBottom: 30
  }
});
