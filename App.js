/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: '',
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text>Tap on the white text box to start typing…</Text>
        <TextInput style={styles.instructions} multiline onChangeText={this.onChangeText}>
          <Text>{text}</Text>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    width: 300,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: '#ffffff'
  },
});
