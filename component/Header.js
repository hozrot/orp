import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

function Header(props) {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.HeaderLeft}>
        <Image
          style={styles.pic}
          source={require("../assets/bangladesh.jpeg")}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          {"\t"}Government of the {"\n"} {"\t"}People's Republic of Bangladesh
        </Text>
      </View>
      <View>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
      Welcome to Bangladesh e-Passport Protal
        </Text>
      </View>
      <View style={styles.HeaderRight}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          Depertment of {"\n"}Immigration and Passport{" "}
        </Text>
        <Image style={styles.pic} source={require("../assets/passport.png")} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  HeaderContainer: {
    backgroundColor: "green",
    height: 80,
    // backgroundColor: "aliceblue",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  pic: {
    width: 50,
    height: 50,
  },
});

export default Header;
