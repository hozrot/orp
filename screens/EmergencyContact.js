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
import { Dropdown } from 'react-native-element-dropdown';
import TextInput from "../component/TextInput";
import Button from "../component/Button";

const relationship = [
  { relationship: 'Father', value2: '1' },
  { relationship: 'Uncle', value2: '2' },
  { relationship: 'Legal Guardian', value2: '3' },

];


function EmergencyContact({ navigation,route }) {
  const {yearofage,statusId,selectedId} = route.params;
  
  
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  
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
          <TouchableOpacity  onPress={() => navigation.navigate("SpouseInfo")}>
            <Text style={styles.sidemenu}>Spouse Information  </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{
            backgroundColor: 'gray',
          }} >
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
           Emergency Contact   Information
          </Text>
          
          
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Emergency Contact relationship (ব্যাক্তির সাথে সম্পর্ক)</Text>
          <Dropdown
                style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={relationship}
                labelField="relationship"
                valueField="value2"
                placeholder={!isFocus2 ? 'Select Emergency Contact relationship' : '...'}
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={item => {
                  setValue2(item.value2);
                  setIsFocus2(false);
                }}
              /> 
          </View>
          <View style={{
              width: "40%",
              flexDirection: 'row',
              padding: 10
            }} >
            </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}> Name (as per NID )(নাম )</Text>
            <TextInput
              placeholder="Enter  name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}> Select Country (দেশ)</Text>
            <TextInput
              placeholder="Enter  Country  name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}> Select District(জেলা) </Text>
            <TextInput
              placeholder="Enter  District  name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>City / Village / House(শহর/গ্রাম/বাড়ি)  </Text>
            <TextInput
              placeholder="Enter  City / Village / House name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Select Post Office  (পোস্ট অফিস) </Text>
            <TextInput
              placeholder="Enter   Post Office"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Select Post Code  (পোস্ট কোড) </Text>
            <TextInput
              placeholder="Enter   Post Code"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Select Police Station (পুলিশ স্টেশন)   </Text>
            <TextInput
              placeholder="Enter  Police Station"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Email address (ইমেইল)  </Text>
            <TextInput
              placeholder="Enter Email address "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Country Code  (দেশের কোড)  </Text>
            <TextInput
              placeholder="EnterCountry Code "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            /> 
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Contact Number (মোবাইল নং)  </Text>
            <TextInput
              placeholder="Enter mobile no  "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          
          <Text>status: {statusId}</Text>
         
         
          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("PassportOption",{yearofage,statusId,selectedId})}
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
  dropdown: {
    height: 50,
    width: 400,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
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
});
export default EmergencyContact;
