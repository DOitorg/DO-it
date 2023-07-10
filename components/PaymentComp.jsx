// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

import { SignClient } from "@walletconnect/sign-client";

import "@ethersproject/shims";
import * as ethers from "ethers";

const daiAddress = "0xa84533de6fe5c53ce846317507b7b13f3ff1f10e";
import daiAbi from "../abi.json";

// StatusBar.setBarStyle('light-content)'

// const tx = {
//   from: account,
//   to: "0xBDE1EAE59cE082505bB73fedBa56252b1b9C60Ce", // Contract address
//   data: "0x",
//   gasPrice: "0x029104e28c",
//   gasLimit: "0x5208",
//   value: "0x00",
// };

// const result = await signClient.request({
//   topic: session.topic,y

//   chainId: "eip155:5",
//   request: {
//     method: "eth_sendTransaction",
//     params: [tx],
//   },
// })

const PaymentComp = ({ enrollHandler }) => {
  console.log(daiAbi);

  const { open, isConnected, address, provider } = useWalletConnectModal();

  // const test = async (enrollHandler) => {
  //   const web3Provider = new ethers.providers.Web3Provider(provider);
  //   const signer = web3Provider.getSigner();

  //   console.log(web3Provider, signer);

  //   const contract = new ethers.Contract(daiAddress, daiAbi, signer);

  //   console.log(contract);

  //   const chainId = await signer.getChainId();

  //   const tx = await contract.invest({
  //     value: ethers.utils.parseEther("0.0002"),
  //   });
  //   await tx.wait();
  //   console.log("Here", tx);

  //   const res = await contract.invest({
  //     value: ethers.utils.parseEther("0.0002"),
  //   });

  //   enrollHandler();
  // };

  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        padding: 20,
        backgroundColor: "#101010",
        paddingBottom: 50,
        padddingTop: 50,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#9af444",
            paddingTop: 20,
          }}
        >
          Payment
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginLeft: 20,
        }}
      >
        <View style={styles.charges}>
          <Text style={styles.charges_type}>Investment money</Text>
          <Text style={styles.charges_amount}>Rs. 2000</Text>
        </View>
        <View style={styles.charges}>
          <Text style={styles.charges_type}>Added Charges</Text>
          <Text style={styles.charges_amount}>Rs. 50</Text>
        </View>
        <View style={styles.charges}>
          <Text style={styles.charges_type}>Total Payable Amount</Text>
          <Text style={styles.charges_amount}>Rs. 2050</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={enrollHandler}
      >
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101010",
    padding: 10,
    height: "100%",
  },

  paymentLogo: {
    color: "#9AF444",
    fontSize: 35,
  },

  charges: {
    display: "flex",
    paddingBottom: 20,
  },

  charges_type: {
    color: "#FF0084",
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: "400",
  },

  charges_amount: {
    color: "#DFDEDF",
    fontSize: 26,
  },

  button: {
    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "#9af444",
    paddingVertical: 10,
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
  },
  buttonText: {
    color: "#101010",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 0.5,
    fontWeight: "600",
  },
});
