import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const LoginScreen = ({ loginHandler }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/splashBackground.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.title}>
            The seed of every habit is a single tiny decision
          </Text>

          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#101010",
  },
  logo: {
    position: "absolute",
    top: "20%",
    width: 109,
    height: 60,
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    position: "absolute",
    bottom: "10%",
    width: "80%",
    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "#9af444",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#B5FF6D",
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#101010",
    textAlign: "center",
    // fontFamily: "Brygada 1918",
    fontSize: 20,
    letterSpacing: 0.5,
    fontWeight: "600",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
});
