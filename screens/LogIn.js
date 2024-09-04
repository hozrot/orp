import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";
function LogIn({ navigation }) {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            color: "#223e4b",
            fontSize: 30,
            marginBottom: 16,
            fontWeight: "bold",
          }}
        >
          Log in to Online Registration Portal
        </Text>
        <View
          style={{
            padding: 32,
            marginBottom: 16,
            width: "25%",
            height: 50,
          }}
        >
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View
          style={{ padding: 32, marginBottom: 16, width: "25%", height: 50 }}
        >
          <TextInput
            icon="key"
            placeholder="Enter your password"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="go"
            returnKeyLabel="go"
          />
        </View>
        <Button
          label="Login"
          onPress={() => navigation.navigate("PassportType")}
        />
        <Text>
          If you don't have an account please create one{" "}
          <TouchableOpacity
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Register")}
          >
            {" "}
            Sign up now...
          </TouchableOpacity>{" "}
        </Text>

        {/* <View style={styles.Container}>
        <View style={styles.LogIN}>
          <Text> Log in to Online Registration Portal</Text>
          <TextInput placeholder="Enter Email " />

          <TextInput placeholder="Enter Password" />
          <Button
            type="submit"
            title="Login"
            onPress={() => navigation.navigate("Register")}
          /> */}
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 400,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  LogIn: {
    flex: 0.2,
    backgroundColor: "gray",
  },
});
export default LogIn;
