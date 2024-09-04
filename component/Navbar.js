import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function Navbar({ navigation }) {
  return (
    <View>
      <View style={styles.MenuBar}>
        <TouchableOpacity>
          <Text style={styles.menuText}>Home </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.menuText}>Instructions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Fees Details </Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}> Sign in  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.menuText}>Sing Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Check Status </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.menuText}>Sign in </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Sign up </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MenuBar: {
    backgroundColor: "#F7F7F7",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  menuText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
});
export default Navbar;
