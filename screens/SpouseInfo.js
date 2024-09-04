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
import { Dropdown } from "react-native-element-dropdown";
import TextInput from "../component/TextInput";
import Button from "../component/Button";
import { Entypo as Icon } from "@expo/vector-icons";

const status = [
  { status: "Married", statusId: "1" },
  { status: "Single", statusId: "2" },
  { status: "Divorced ", statusId: "3" },
];

function SpouseInfo({ navigation,route }) {
  const {yearofage,selectedId} = route.params;

  const [statusId, setStatusId] = useState(null);
  const [statusFocus, setstatusFocus] = useState(false);
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
          <TouchableOpacity  onPress={() => navigation.navigate("PersonalInfo")}>
            <Text style={styles.sidemenu}>Parsonal Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("AddressInfo")}>
            <Text style={styles.sidemenu}>Address </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("IdDoc")}>
            <Text style={styles.sidemenu}>ID Document  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ParentalInfo")}> 
            <Text style={styles.sidemenu}>Parental Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{
            backgroundColor: 'gray',
          }} >
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
          paddingBottom: 10
        }}>
          <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20
            }}
          >
           Spouse  Information
          </Text>
          
          
          <View style={styles.InputView}>
          {/* <label>
          Select marital Status  
      <select name="selectedFruit">
        <option value="apple">Single</option>
        <option value="banana">Married</option>
       
      </select>
    </label> */}
          <Text style={styles.InputTitle}> Select marital Status (বৈবাহিক অবস্থা )</Text>
          <Dropdown
                  style={[
                    styles.dropdown,
                    statusFocus && { borderColor: "blue" },
                  ]}
                  data={status}
                  labelField="status"
                  valueField="statusId"
                  placeholder={!statusFocus ? "Select marital Status" : "..."}
                  value={statusId}
                  onFocus={() => setstatusFocus(true)}
                  onBlur={() => setstatusFocus(false)}
                  onChange={(item) => {
                    setStatusId(item.statusId);
                    setstatusFocus(false);
                  }}
                />

          </View>
          
              
                {statusId == 1 && (
                 <View>
                  <View style={styles.InputView}>
          <Text style={styles.InputTitle}> Spouse's Name (স্বামী/ স্ত্রীর নাম )</Text>
            <TextInput
              placeholder="Enter your Spouse's   name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Profession (পেশা) </Text>
            <TextInput
              placeholder="Enter your Spouse's Profession"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Nationality (জাতীয়তা) </Text>
            <TextInput
              placeholder="Enter your Spouse's Nationality"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Spouse's NID no. (Optional)(স্বামী / স্ত্রীর এন আই ডি নং)  </Text>
            <TextInput
              placeholder="Enter your  father's NID no. "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
                 </View>
                )}
           
          
         {/* <Text>status: {statusId}</Text>
         <Text>{yearofage}</Text> */}
          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("EmergencyContact",{yearofage,statusId,selectedId})}
          />
          
         
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
  sidemenu: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10
  },
  InputTitle:{
    fontWeight: "bold",
    paddingBottom: 10,
  },
  InputView: {
    width: "40%",
    padding: 10
  },
  dropdown: {
    height: 50,
    width: 400,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
  },
});
export default SpouseInfo;
