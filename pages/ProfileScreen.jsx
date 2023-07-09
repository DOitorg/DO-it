import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#00C2FF" />
        </TouchableOpacity>
        <View style={styles.profileHeader}>
          <Text style={styles.profileHeaderText}>Profile</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="create" size={24} color="#00C2FF" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.profilePhotoContainer}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profilePhoto}
          />

          <View style={styles.profilePhotoIconContainer}>
            <Ionicons name="camera" size={20} color="#00C2FF" />
          </View>
        </View>
        <Text style={styles.name}>Arijit Mukherjee</Text>
        <Text style={styles.email}>johndoe@gmail.com</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsHeading}>Details</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wallet Address</Text>
          <TouchableOpacity style={styles.cardArrow}>
            <Ionicons name="chevron-forward" size={24} color="#00C2FF" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>History</Text>
          <TouchableOpacity style={styles.cardArrow}>
            <Ionicons name="chevron-forward" size={24} color="#00C2FF" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>All-Time Earnings</Text>
          <TouchableOpacity style={styles.cardArrow}>
            <Ionicons name="chevron-forward" size={24} color="#00C2FF" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Log out</Text>
          <TouchableOpacity style={styles.cardArrow}>
            <Ionicons name="chevron-forward" size={24} color="#00C2FF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#101010",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  profileHeader: {
    flex: 1,
    alignItems: "center",
  },
  profileHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9AF444",
  },
  content: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  profilePhotoContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profilePhotoIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#101010",
    borderRadius: 50,
    padding: 5,
  },
  name: {
    color: "#9AF444",
    // fontFamily: 'Be Vietnam Pro',
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 24,
    letterSpacing: -1.2,
    width: 222,
    height: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
    color: "#9A9B82",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  detailsHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
    color: "#FF0084",
  },
  card: {
    width: "100%",
    height: 44,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#1D1A1A",
    backgroundColor: "#101010",
    marginBottom: 20,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    color: "white",
    marginRight: "auto",
  },
  cardArrow: {
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default ProfileScreen;
