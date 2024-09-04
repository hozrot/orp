import React, { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  ScrollView,
  Radio,
  TouchableOpacity,
} from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";
import Navbar from "../component/Navbar";
//import { RadioButton } from "react-native-ui-lib";




export default function PassportType({ navigation }) {
  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Ordinary Passport',
      value: 'ordinary '
    },
    {
      id: '2',
      label: 'Official Passport',
      value: 'official'
    }
  ]), []);
  const supportingDoc = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'GO',
      value: 'go '
    },
    {
      id: '2',
      label: 'NOC',
      value: 'noc'
    }
  ]), []);
  const payment = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Yes',
      value: 'yes '
    },
    {
      id: '2',
      label: 'NO',
      value: 'no'
    }
  ]), []);
  const [passportType, setPassportType] = useState();
  const [selectedId, setSelectedId] = useState();
  const [selectedDoc, setSelectedDoc] = useState();
  const [selectedPayment, setSelectedPayment] = useState();

  return (
    <ScrollView>
      <Header />
      <View style={styles.MenuBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.menuText}>Home </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Apply Online  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>5 Step to e-Pasport  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Urgent Application   </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Instructions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}> Passport Fees  </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.menuText}>Sign in </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.menuText}>Sing Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.menuText}> Check Status </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Contact </Text>
        </TouchableOpacity>
       
      </View>
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
        <View style={styles.sideBlock}>
          <TouchableOpacity style={{ backgroundColor:'gray',}}>
            <Text style={styles.sidemenu}>Passport Type </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Parsonal Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Address </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>ID Document  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Parental Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Spouse Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Emergency Contact  </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Passport Option </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Delivary Option and Appionment  </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: "80%",
        }}>
            <Text
              style={{
                color: "#223e4b",
                fontSize: 30,
                fontWeight: "bold",
                padding:20
              }}
            >
              Passport Type
            </Text>
           <Text style={{
                fontWeight: "bold",
                paddingBottom:10
              }}> Select the Passport Type for your application!</Text>


        {/* <label><input type="radio" name="passType1" checked={passportType} onChange={e => setPassportType(e.target.checked)}  /> Official </label>
        <label><input type="radio" name="passType2" checked={passportType}  onChange={e => setPassportType(e.target.checked)} /> Ordinary Passport </label>

        <Text> test :: {passportType}</Text>
       */}

              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                layout='row'
                selected
              />

            {selectedId == 1 && <Text style={{
                fontWeight: "bold",
                paddingBottom:10,
                paddingTop:10
              }}> ** Provide NOC/ Student Id / Tread Licence According to your profession  </Text>}
            {selectedId == 2 &&<View> <Text style={{
                fontWeight: "bold",
                paddingBottom:10,
                paddingTop:10
              }}> Select Available Suporting Document  </Text> <RadioGroup
                radioButtons={supportingDoc}
                onPress={setSelectedDoc}
                selectedId={selectedDoc}
                layout='row'
                selected
              />
              <Text style={{
                fontWeight: "bold",
                paddingBottom:10,
                paddingTop:10
              }}>Is a Payment required for the Official Passport   </Text>
              <RadioGroup
                radioButtons={payment}
                onPress={setSelectedPayment}
                selectedId={selectedPayment}
                layout='row'
                selected
              /></View>}
              {/* <Text>{selectedId}</Text> */}
            <Button
              label="Save and Continue"
              onPress={() => navigation.navigate("PersonalInfo",{selectedId, selectedDoc,selectedPayment})}
            />

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
  sideBlock:{
    width: "20%",
    flexDirection: 'column',
    paddingLeft: 50
  },
  sidemenu: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10
  },
  MenuBar: {
    backgroundColor: "#F7F7F7",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  menuText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
});