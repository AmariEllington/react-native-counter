import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this.increaseCounter}>
          <Text> Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.decreaseCounter}>
          <Text> Decrease</Text>
        </TouchableOpacity>
        <Text> Counter: {counter}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({});

export default Counter;
