import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LoginScreen = ({ loginHandler }) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={loginHandler}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
