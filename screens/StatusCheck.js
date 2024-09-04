import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import TextInput from "../component/TextInput";
import Button from "../component/Button";
export default function StatusCheck({ navigation }) {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <View style={styles.MenuBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.menuText}>Home </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Apply Online </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.menuText}>5 Step to e-Pasport  </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <Text style={styles.menuText}> Urgent Application   </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Instructions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Passport Fees  </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Sign in </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.menuText}>Sing Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("StatusCheck")}>
          <Text style={styles.menuText}> Check Status </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Contact </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.Leftcontainer}>
          <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            Check application status
          </Text>
          <Text
            style={{
             
              paddingLeft:50
            }}
          >
            Check the status of your application by entering either Application
            ID (e.g. 4000-100000000) you find on the Delivery Slip you received
            from the Passport Office Or Online Registration ID (OID) from your
            online application (e.g. OID1000001234)
          </Text>

          <View
            style={{
              margin: 16,
              width: "60%",
              height: 50,
            }}
          >
            <TextInput
              placeholder="Enter your Registration ID, like: 4000-0001254"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View
            style={{
              margin: 15,
            }}
          >
            <Text>Or </Text>{" "}
          </View>
          <View style={{ marginBottom: 16, height: 50, width: "60%" }}>
            <TextInput
              placeholder="Enter your Application ID, like: OID0215455"
              secureTextEntry
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
            />
          </View>
          <Button label="Submit" onPress={() => navigation.navigate("#")} />
        </View>
        <View style={styles.Rightcontainer}>
          <Image
            style={{ resizeMode: "stretch", width: 500, height: 500 }}
            source={require("../assets/status.jpeg")}
          />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    margin: 20,
  },
  Leftcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    padding: 20,
    margin: 20,
  },
  Rightcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 20,
  },
  statusPic: {
    resizeMode: "stretch",
    width: 500,
    height: 500,
  },
  menuText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
  MenuBar: {
    backgroundColor: "#F7F7F7",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
});

// export default function StatusCheck({ navigation, route }) {
//   return (
//     <ScrollView style={styles.container}>

//     </ScrollView>
//   )
// }
