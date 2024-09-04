import React, { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
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
import { RadioButton } from "react-native-ui-lib";

export default function PassportOption({ navigation, route }) {
  
  const {yearofage,statusId,selectedId} = route.params;
  const pageButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: '48 Page',
    },
    {
      id: '2',
      label: '64 Page',
      disabled: 'true'
    },
  ]), []);
  const validityButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: '5 Years',
    },
    {
      id: '2',
      label: '10 Years',
    },
  ]), []);

  const [pageId, setPageId] = useState();
  const [validityId, setValidityId] = useState();
  return (
    <ScrollView>
      <Header />

      <View style={{
        paddingLeft: 200
      }}>
        <Text style={{
          color: "#223e4b",
          fontSize: 30,
          marginBottom: 16,
          fontWeight: "bold",
        }}> Please fill in all required information step by step </Text>
      </View>

      <View style={{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 200
      }}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("PassportType")} >
            <Text style={styles.sidemenu}>Passport Type </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PersonalInfo")}>
            <Text style={styles.sidemenu}>Parsonal Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddressInfo")}>
            <Text style={styles.sidemenu}>Address </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("IdDoc")}>
            <Text style={styles.sidemenu}>ID Document  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ParentalInfo")}>
            <Text style={styles.sidemenu}>Parental Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SpouseInfo")}>
            <Text style={styles.sidemenu}>Spouse Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("EmergencyContact")} >
            <Text style={styles.sidemenu}>Emergency Contact  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: 'gray',
          }} >
            <Text style={styles.sidemenu}>Passport Option </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Delivary Option and Appionment  </Text>
          </TouchableOpacity>

        </View>


        <View style={{
          width: "80%",
          padding: 20
        }}>
          <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            Passport Option
          </Text>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}> Passport Page (পেজ সংখ্যা) </Text>
            <RadioGroup
              radioButtons={pageButtons}
              onPress={setPageId}
              selectedId={pageId}
              layout='row'

            />
            {/* <RadioButton radioButtons={pageButtons}
            onPress={setPageId}
            selectedId={pageId}
            layout='row'
            disabled
            selected/> */}

          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}> Validity (মেয়াদ) </Text>
            <RadioGroup
              radioButtons={validityButtons}
              onPress={setValidityId}
              selectedId={validityId}
              layout='row'

            />
          </View>

          {validityId == 1 && <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            Passport Price :  4,025  Taka
          </Text>}
          {validityId == 2 && <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            Passport Price :  5,750 Taka
          </Text>}
          <Text>{statusId}</Text>

          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("DelevaryOption",{yearofage,statusId,selectedId})}
          />
  <Text>{yearofage}</Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  )
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
  sidemenu: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10
  },
  InputTitle: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  InputView: {
    width: "40%",
    padding: 10
  },
});