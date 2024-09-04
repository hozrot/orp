import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
function Footer(props) {
  return (
    <View>
      <View style={styles.FooterContainer}>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "white",
              fontWeight: "bold",
            }}
          >
            About Us {"\t"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Feedback {"\t"}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {" "}
            Contact{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FooterContainer}>
        <TouchableOpacity>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {" "}
            © Bangladesh e‑Passport Online Registration Portal, v4.11.4{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  FooterContainer: {
    backgroundColor: "green",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default Footer;
