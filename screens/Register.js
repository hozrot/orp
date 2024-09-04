import React, { useMemo, useState } from "react";
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
import DatePicker from 'react-native-date-picker';
import RNDateTimePicker from 'react-native-ui-lib';
import { IndexPath, Layout, Select, SelectItem, Datepicker } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';
import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";
import MenuBar from "../component/MenuBar";
import SideMenu from "../component/SideMenu";
function Register(props) {
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
         Create your Account for the  Online Registration Portal
        </Text>
        <View style={{
          width: "40%",
          padding: 20
        }}>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
          }}>Email Address  </Text>
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
        <View style={{
          width: "40%",
          padding: 20
        }}>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
          }}>Enter your password  </Text>
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
        <View style={{
          width: "40%",
          padding: 20
        }}>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
          }}>Retype  your password  </Text>
         <TextInput
            icon="key"
            placeholder="Retype  your password"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="go"
            returnKeyLabel="go"
          />

        </View>
        <View style={{
          width: "40%",
          padding: 20
        }}>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
          }}>Full Name  </Text>
          <TextInput
            placeholder="Enter your Full name"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
          />

        </View>
        <View style={{
          width: "40%",
          padding: 20
        }}>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
          }}>Given  Name  </Text>
          <TextInput
            placeholder="Enter your Given name"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
          />

        </View>
        <View style={{
          width: "40%",
          padding: 20
        }}>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
          }}>Surname  </Text>
          <TextInput
            placeholder="Enter your Surname"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
          />

        </View>
        <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Country Code    </Text>
          <TextInput
            placeholder="EnterCountry Code "
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Contact Number   </Text>
          <TextInput
            placeholder="Enter mobile no  "
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <Button
          label="Create Account"
          onPress={() => navigation.navigate("HomePage")}
        />
        <Text style={{
          fontWeight: "bold",
          paddingBottom: 10,
          paddingLeft: 10,
          padding: 20
        }}>Note: Six (6) applications can be applied with one account</Text>


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
  InputTitle: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  InputView: {
    width: "40%",
    padding: 10
  },
});
export default Register;
