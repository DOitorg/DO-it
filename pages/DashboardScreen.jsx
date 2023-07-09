import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

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
              <Text style={styles.text_profit}>₹ 272</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity>
            <View style={styles.card_2}>
              <Text style={styles.text_heading}>Active Participants</Text>
              <Text style={styles.text_money}>100</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card_2}>
              <Text style={styles.text_heading}>Participants who Lost.</Text>
              <Text style={styles.text_invest}>12</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <View style={styles.card_3}>
            <View style={styles.receivable}>
              <Text style={styles.text_profit}>Receivable Sum :</Text>
              <Text style={styles.text_money_3}>₹108</Text>
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
  },
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  profileIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -45,
    right: 20,
  },
  card: {
    width: 141,
    height: 110,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
    marginRight: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  card_2: {
    width: 141,
    height: 147,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
    marginRight: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  card_3: {
    width: 308,
    height: 117,
    borderWidth: 2,
    borderColor: "#474343",
    borderRadius: 8,
    marginTop: 10,
    marginRight: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  text_invest: {
    color: "#FF0084",
    fontSize: 20,
    textAlign: "center",
  },
  text_heading: {
    color: "#F0C045",
    fontSize: 20,
    textAlign: "center",
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
    fontSize: 35,
    textAlign: "center",
  },
  text_profit: {
    color: "#9AF444",
    fontSize: 20,
    textAlign: "center",
  },
  text_money2: {
    color: "#F0C045",

    fontSize: 35,
    textAlign: "center",
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

    // backgroundColor: "pink",
    justifyContent: "space-between",
    // alignItems: "center",
    // marginRight: 40,
    // paddingRight: 40,
  },

  cardImage: {
    width: 92,
    height: 76,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
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
