import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Banner(props) {
  return (
    <View style={styles.Banner}>
      <Image
        style={styles.bannerPic}
        source={require("../assets/epassport.jpeg")}
      />
      <Text style={styles.BannerText}>
        {" "}
        Welcome to Bangladesh e-Passport Protal
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bannerPic: {
    
  },

  BannerText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 30,
    margin: -200,
    paddingLeft: 820,
  },
  Banner: {
   height:250,
    backgroundColor: "aliceblue",
    width:'100%'
  },
});

export default Banner;
