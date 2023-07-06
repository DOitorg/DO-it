import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const GroupScreen = ({ enrollHandler }) => {
  return (
    <View>
      <Text>ListOfGroups</Text>
      <TouchableOpacity onPress={enrollHandler}>
        <Text>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({});
