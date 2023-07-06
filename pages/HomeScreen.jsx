import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupScreen from "./GroupScreen";
import SettingScreen from "./SettingScreen";
import ChatScreen from "./ChatScreen";
import DashboardScreen from "./DashboardScreen";

const TopTab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const [enrolled, setEnrolled] = React.useState(false);

  const enrollHandler = () => {
    setEnrolled((prev) => !prev);
  };

  return (
    <TopTab.Navigator screenOptions={{ headerShown: false }}>
      {enrolled ? (
        <TopTab.Group>
          <TopTab.Screen name="Dashboard" component={DashboardScreen} />
          <TopTab.Screen name="Chats" component={ChatScreen} />
          <TopTab.Screen name="Settings" component={SettingScreen} />
        </TopTab.Group>
      ) : (
        <TopTab.Group>
          <TopTab.Screen
            name="Groups"
            children={() => <GroupScreen enrollHandler={enrollHandler} />}
          />
          <TopTab.Screen name="Settings" component={SettingScreen} />
        </TopTab.Group>
      )}
    </TopTab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
