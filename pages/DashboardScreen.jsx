import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import users from "../assets/users.png"
import users2 from "../assets/users2.png"
const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        <View style={styles.container2}>
          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.text_heading}>You Invested</Text>
              <Text style={styles.text_money}>₹ 2000</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.card}>
              <Text style={styles.text_heading}>Profit Gained</Text>
              <Text style={styles.text_money}>₹ 272</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity>
            <View style={styles.card_2}>
              <Text style={styles.text_heading}>Active Participants</Text>
              <Text style={styles.text_money}>100</Text>
          <Image source={users} style={styles.users} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card_2}>
              <Text style={styles.text_heading}>Participants who Lost.</Text>
              <Text style={styles.text_money}>12</Text>
          <Image source={users2} style={styles.users} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <View style={styles.card_3}>
            <View style={styles.receivable}>
              <Text style={styles.text_profit}>Receivable Sum :</Text>
              <Text style={styles.text_money_3}>₹2272</Text>
            </View>
            <View style={styles.receivable}>
              <Text style={styles.text_profit}>Days in streak :</Text>
              <Text
                style={[styles.text_heading, { fontSize: 25, marginLeft: 60 }]}
              >
                28th
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 30,
          alignSelf: "center",
          width: "80%",
          backgroundColor: "#FF0084",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
            alignSelf: "center",
          }}
        >
          Leave
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    height: "100%",
    backgroundColor: "#101010",
  },

  container2: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    gap: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -45,
    right: 20,
  },
  users:{
width: 90,
height:20,
  },
  card: {
    width: 151,
    height:90,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    padding: 8,
  },
  card_2: {
    width: 151,
    height:137,
    borderWidth: 2,
    padding:10,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
  },
  card_3: {
    width: 308,
    height:117,
    padding:10,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text_invest: {
    color: "#FF0084",
    fontSize: 20,
  },
  text_heading: {
    color: "#F0C045",
    fontSize: 20,
  },
  text_totalMoney: {
    color: "#FF0084",
    fontSize: 22,
    // textAlign: "center",
    // marginRight: 40,
    // backgroundColor: "green",
  },
  text_money: {
    color: "#DFDEDF",
    fontSize: 25,
  },
  text_profit: {
    color: "#9AF444",
    fontSize: 20,
  },
  text_money2: {
    color: "#F0C045",

    fontSize: 35,
  },
  text_money_3: {
    color: "#F0C045",

    fontSize: 25,
    textAlign: "center",
    marginLeft: 40,
    // paddingLeft: 40,
  },

  receivable: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardImage: {
    width: 92,
    height: 76,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#00C2FF",
  },
  descText: {
    // backgroundColor: "pink",
    marginTop: 24,
    color: "#DFDEDF",
    fontSize: 26,
    marginBottom: 10,
  },
});