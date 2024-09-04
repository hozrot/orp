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
function DelevaryOption({ navigation,route }) {
  const {yearofage,statusId,selectedId} = route.params;
  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Regular (Within 15 Working day)',
    },
    {
      id: '2',
      label: 'Express (Within 7 Working day)',
    },
    {
      id: '3',
      label: 'Super Express (Within 2 Working day)',
      disabled: 'true'
    }
  ]), []);
  const paymentButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Online',
    },
    {
      id: '2',
      label: 'Offline',
    },
  ]), []);

  const [typeId, setTypeId] = useState();
  const [selectePayment, setSelectePayment] = useState();
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
          <TouchableOpacity onPress={() => navigation.navigate("PassportOption")}>
            <Text style={styles.sidemenu}>Passport Option </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: 'gray',
          }}>
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
            Delivary Option
          </Text>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}> Delivary Type (সরবরাহের ধরণ) </Text>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setTypeId}
              selectedId={typeId}
              containerStyle={[styles.radio]}
              layout="row"

            />

            
          </View>
          {selectedId==1 &&  <Text style={styles.InputTitle}>As you have a previous MRP passport, You are eligible to get the Express Delivary OPtion </Text>}
            {selectedId==2 &&  <Text style={styles.InputTitle}>As you have a previous ePP passport, You are eligible to get the Express Delivary OPtion </Text>}
            {selectedId==3 &&  <Text style={styles.InputTitle}>As you have no  previous MRP or epp passport, You are not eligible to get the Express Delivary OPtion </Text>}
          {typeId == 1 && <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            Passport Price : 5,750 Taka
          </Text>
          }
          {typeId == 2 && <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            Passport Price : 8,050 Taka
          </Text>
          }
          {typeId == 3 && <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
            Passport Price : 10,350 Taka
          </Text>
          }
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}> Payment Method (ফি পরিশোধের মাধ্যম) </Text>
            <RadioGroup
              radioButtons={paymentButtons}
              onPress={setSelectePayment}
              selectedId={selectePayment}
              layout='row'
            />
          </View>
         
         
          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("ApplicationSummary",{yearofage,statusId})}
          />

        </View>
      </View>
      <Footer/>
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
  radio: {

  }
});
export default DelevaryOption;
