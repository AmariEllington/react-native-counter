import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Counter")}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({});

export default HomeScreen;
