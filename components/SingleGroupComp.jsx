import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

function SingleGroupComp({ navigation }) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }}>
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            paddingBottom: 20,
            color: "#9af444",
          }}
        >
          Exercise
        </Text>
      </View>

      <View>
        <Image
          source={require("../assets/gym.jpg")}
          style={{
            width: "100%",
            height: "30%",
            alignSelf: "center",
            borderRadius: 10,
          }}
        />
        <Text style={styles.descText}>Description</Text>
        <Text style={styles.descPara}>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.Yorem ipsum dolor sit amet,
          consectetur.
        </Text>
        <Text></Text>
        <Text style={styles.descText}>Terms & Conditions</Text>
        <Text style={styles.descPara}>
          1. Yorem ipsum dolor sit amet, adipiscing elit. Etiam eu turpis
          molestie.
        </Text>
        <Text style={styles.descPara}>
          2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          praesentium nobis.
        </Text>

        <View style={styles.acceptContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={handleCheckboxToggle}
          >
            {isChecked && <View style={styles.checkboxIcon} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer} onPress={() => {}}>
            <Text style={styles.acceptText}>
              I accept the terms and conditions hereby mentioned.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PaymentPage")}
      >
        <Text style={styles.buttonText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#101010",
    // paddingTop: 60,
    padding: 20,
    height: "100%",
  },
  oreText: {
    color: "#9AF447",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descPara: {
    color: "white",
    textAlign: "justify",
  },
  descText: {
    color: "#FF0084",
    fontSize: 20,
    marginBottom: 10,
  },
  // acceptContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: 20,
  // },
  // checkbox: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: "white",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginRight: 10,
  // },
  // checkboxIcon: {
  //   width: 10,
  //   height: 10,
  //   backgroundColor: "white",
  //   borderRadius: 2,
  // },
  // acceptText: {
  //   color: "white",
  // },

  // acceptContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: 15,
  //   marginLeft: 10,
  // },
  // checkbox: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: 10,
  // },
  // checkboxIcon: {
  //   width: 10,
  //   height: 10,
  //   backgroundColor: 'white',
  //   borderRadius: 2,
  // },
  // textContainer: {
  //   flex: 1,
  // },
  // acceptText: {
  //   color: 'white',
  //   fontSize: 16,
  // //   fontFamily: 'Brygada 1918',

  // },

  acceptContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 15,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxIcon: {
    width: 12,
    height: 12,
    backgroundColor: "#FFF",
    borderRadius: 2,
  },
  textContainer: {
    flex: 1,
  },
  acceptText: {
    color: "#FFF",
  },

  // acceptContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // checkbox: {
  //   width: 20,
  //   height: 20,
  //   borderWidth: 2,
  //   borderColor: '#000',
  //   borderRadius: 4,
  //   marginRight: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // checkboxIcon: {
  //   width: 12,
  //   height: 12,
  //   // backgroundColor: '#000',
  //   backgroundColor: "white",

  //   borderRadius: 2,
  // },
  // acceptText: {
  //   color: 'white',
  //   fontSize: 16,
  //   // fontFamily: 'Brygada 1918',
  // },

  // button: {
  //   fontWeight: "bold",
  //   borderRadius: 5,
  //   backgroundColor: "#9af444",
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  //   marginTop: 30,
  // },
  // buttonText: {
  //   textAlign: "center",
  //   color: "#000",
  //   fontSize: 20,
  //   letterSpacing: 0.1,
  // },

  button: {
    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "#9af444",
    paddingVertical: 10,
    paddingHorizontal: 10,
    // marginTop: 30,

    borderWidth: 2,
    borderColor: "#B5FF6D",
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  buttonText: {
    color: "#101010",
    textAlign: "center",
    // fontFamily: "Brygada 1918",
    fontSize: 20,
    letterSpacing: 0.5,
    fontWeight: "600",
    // lineHeight: 16,
  },
});

export default SingleGroupComp;
