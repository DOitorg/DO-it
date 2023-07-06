import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const GroupScreen = ({ enrollHandler }) => {
  return (
    <Stack.Navigator initialRouteName="ListOfGroups">
      <Stack.Screen name="ListOfGroups" component={ListOfGroups} />
      <Stack.Screen
        name="SingleGroup"
        children={() => <SingleGroup enrollHandler={enrollHandler} />}
        screenOptions={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

const ListOfGroups = ({ navigation }) => {
  return (
    <View>
      <Text>ListOfGroups</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const SingleGroup = ({ enrollHandler }) => {
  return (
    <View>
      <Text>SingleGroup</Text>
      <TouchableOpacity onPress={enrollHandler}>
        <Text>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({});
