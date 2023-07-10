import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";

function ListOfGroupsComp({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <SingleCard type="Ongoing" navigation={navigation} />
        <NextCard type="Upcoming" navigation={navigation} />
      </View>
    </View>
  );
}

const SingleCard = ({ type, navigation }) => {
  return (
    <View style={{ paddingBottom: 50 }}>
      <Text style={styles.descText}>{type} Groups</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
          <View style={styles.card}>
            <Image
              source={require("../assets/exercise_icon.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Exercise</Text>
            <Text style={styles.count}>162/200</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SingleGroup")}>
          <View style={styles.card}>
            <Image
              source={require("../assets/meditation_icon.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Meditate</Text>
            <Text style={styles.count}>84/100</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const NextCard = ({ type, navigation }) => {
  return (
    <View style={{ paddingBottom: 50 }}>
      <Text style={styles.descText}>{type} Groups</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require("../assets/jogging_icon.png")}
            style={styles.cardImage2}
          />
          <Text style={styles.cardText2}>Jogging</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/reading_icon.png")}
            style={styles.cardImage2}
          />
          <Text style={styles.cardText2}>Reading</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    height: "100%",
    backgroundColor: "#101010",
  },
  count:{
    color: "gray",
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  logo: {
    height: 60,
    width: 109,
  },
  descText: {
    color: "#FF0084",
    fontSize: 20,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-evenly",
  },
  card: {
    width: 141,
    height: 167,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 92,
    height: 76,
    marginBottom: 10,
  },
  cardImage2: {
    width: 92,
    height: 76,
    marginBottom: 10,
    opacity: 0.35,
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
    color: "#00C2FF",
  },
  cardText2: {
    fontSize: 16,
    textAlign: "center",
    color: "#00C2FF",
    opacity: 0.35,
  },
});

export default ListOfGroupsComp;