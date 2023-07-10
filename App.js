import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";

import "./expo-crypto-shim.js";

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
StatusBar.setBarStyle("light-content");
const Stack = createStackNavigator();

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const projectId = "71a318a4a2ddac2f312be5daef7b9701";

const providerMetadata = {
  name: "h4b",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const { open, isConnected, provider } = useWalletConnectModal();

  async function sendTx() {}

  useEffect(() => {
    // console.log(provider);

    if (!provider) return;

    // console.log(provider.session)

    const account = provider?.session?.namespaces?.eip155?.accounts[0]?.slice(9);
    console.log("Hello", account);

  }, [provider]);

  const handleLogin = () => {
    // console.log(isConnected)
    if (!isConnected) open();
    //setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isConnected ? (
          <Stack.Screen
            name="Home"
            children={() => <HomeScreen loginHandler={handleLogout} />}
          />
        ) : (
          <Stack.Screen
            name="Login"
            children={() => <LoginScreen loginHandler={handleLogin} />}
          />
        )}
      </Stack.Navigator>
      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
