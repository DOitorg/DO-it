import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import GroupScreen from "./GroupScreen";
import SettingScreen from "./ProfileScreen";
import ChatScreen from "./ChatScreen";
import DashboardScreen from "./DashboardScreen";
import ProfileScreen from "./ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import SingleGroupChat from "./SingleGroupChat";

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = ({ loginHandler }) => {
  const [enrolled, setEnrolled] = React.useState(false);

  const enrollHandler = () => {
    setEnrolled((prev) => !prev);
  };

  return (
    <>
      {enrolled ? (
        <SafeAreaView style={{ height: "100%", width: "100%" }}>
          <Stack.Navigator
            initialRouteName="TabBarComp"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="TabBarComp"
              component={TabBarComp}
            ></Stack.Screen>

            <Stack.Screen
              name="Profile"
              // component={ProfileScreen}
              children={() => <ProfileScreen loginHandler={loginHandler} />}
              screenOptions={{ presentation: "modal" }}
            ></Stack.Screen>
          </Stack.Navigator>
        </SafeAreaView>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Groups"
            children={() => <GroupScreen enrollHandler={enrollHandler} />}
          />
          <Stack.Screen
            name="Profile"
            // component={ProfileScreen}
            children={() => <ProfileScreen loginHandler={loginHandler} />}
            screenOptions={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

const TabBarComp = ({ navigation }) => {
  return (
    <View style={{ height: "100%" }}>
      <CommonHeaderComp navigation={navigation} />
      <TopTabComp />
    </View>
  );
};

const TopTabComp = ({ navigation }) => {
  return (
    <TopTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#101010",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#9AF444",
        },
        tabBarLabelStyle: { color: "#9AF444", fontWeight: "bold" },
      }}
    >
      <TopTab.Screen name="Dashboard" component={DashboardScreen} />
      <TopTab.Screen
        name="Chats"
        component={ChatScreen}
        ParentNavigation={navigation}
      />
    </TopTab.Navigator>
  );
};

const CommonHeaderComp = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#101010",
        paddingTop: 40,
      }}
    >
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 50, width: 100 }}
        ></Image>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={require("../assets/profile.png")}
          style={{ height: 50, width: 50 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
