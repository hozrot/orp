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



function IdDoc({ navigation,route }) {
  const yearofage = route.params;
  
  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Yes,I have a Machine Readable Passport(MRP)',

    },
    {
      id: '2',
      label: 'Yes,I have an ePassport (ePP)',

    },
    {
      id: '3',
      label: 'No,I Applied for the first time',

    }
  ]), []);
  const selection = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Yes',
    },
    {
      id: '2',
      label: 'No',
    },
  ]), []);

  const [selecteOption, setSelecteOption] = useState();

  const [selectedId, setSelectedId] = useState();

  return (
    <ScrollView>
      <Header />
      <View style={styles.MenuBar}>
        <TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate("PassportType")}>
            <Text style={styles.sidemenu}>Passport Type </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PersonalInfo")}>
            <Text style={styles.sidemenu}>Parsonal Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddressInfo")}>
            <Text style={styles.sidemenu}>Address </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'gray', }}>
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
            ID Document
          </Text>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10
          }}> Do you have any previous Passport?</Text>
          {/* <View  style={{
           flexDirection:'row'
          }}>
          <label style={{
            fontWeight: "bold",
            fontSize:24
          }} >
          <input type="radio" name="mrp" value="mrp"  />
          Yes, MRP
        </label>
        <label style={{
            fontWeight: "bold",
            fontSize:24
          }} >
          <input type="radio" name="epp" value="epp"   />
        Yes, ePP
        </label>
        <label style={{
            fontWeight: "bold",
            fontSize:24
          }} >
          <input type="radio" name="no" value="no"   />
        No
        </label>
          </View> */}

          {/* {value == "mrp" && <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
            paddingTop: 10
          }}> ** Provide Your MRP data and Bring that passport while Enrollment  </Text>} */}
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
          />

          {selectedId == 1 &&
            <View style={styles.InputView}>
              <Text style={styles.InputTitle}> Reissue Reason </Text>
              <TextInput
                placeholder="Enter your reason of reissue"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={styles.InputTitle}>MRP no. </Text>
              <TextInput
                placeholder="Enter your Passport (MRP) number"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={{
                fontWeight: "bold",
                paddingBottom: 10,
                paddingTop: 10
              }}> ** Provide Your MRP data and Bring that passport while Enrollment  </Text>
              <Text style={styles.InputTitle}>MRP issue Date </Text>
              <TextInput
                placeholder="Enter your issue date"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={styles.InputTitle}>MRP expiration Date </Text>
              <TextInput
                placeholder="Enter your Passport (ePP) expiration date"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />


            </View>


          }
          {selectedId == 2 &&
            <View style={styles.InputView}>
              <Text style={styles.InputTitle}> Reissue Reason </Text>
              <TextInput
                placeholder="Enter your reason of reissue"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={styles.InputTitle}>ePP no. </Text>
              <TextInput
                placeholder="Enter your Passport (ePP) number"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={{
                fontWeight: "bold",
                paddingBottom: 10,
                paddingTop: 10
              }}> ** Provide Your ePP data and Bring that passport while Enrollment  </Text>
              <Text style={styles.InputTitle}>ePP issue Date </Text>
              <TextInput
                placeholder="Enter your issue date"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={styles.InputTitle}>ePP expiration Date </Text>
              <TextInput
                placeholder="Enter your Passport (ePP) expiration date"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />


            </View>


          }
          {selectedId == 3 && <View style={styles.InputView}>
            <Text style={{
              fontWeight: "bold",
              paddingBottom: 10,
              paddingTop: 10
            }}> **  Do you have passport of other Countries </Text>
            <RadioGroup
              radioButtons={selection}
              onPress={setSelecteOption}
              selectedId={selecteOption}
              layout='row'

            />
          </View>}

          <Text style={{
            fontWeight: "bold",
            padding: 10,

          }}> Identification Information  </Text>

          <View style={styles.InputView}>
            <Text style={styles.InputTitle}> NID or BRC </Text>
            <TextInput
              placeholder="Enter yourIdentification no."
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("ParentalInfo",{yearofage,selectedId})}
          />
  <Text>{yearofage}</Text>
        </View>
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
  InputTitle: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  InputView: {
    width: "40%",
    padding: 10
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
export default IdDoc;
