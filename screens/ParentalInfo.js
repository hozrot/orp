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
function ParentalInfo({ navigation,route }) {
  const {yearofage,selectedId} = route.params;
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
          <TouchableOpacity style={{
            backgroundColor: 'gray',
          }} >
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
           Parental Info (পিতা-মাতার তথ্য )
          </Text>

          <View style={{
            flexDirection: 'row',
            flex: 1
          }}>
            <View style={{
              padding: 10,
              flex: .5
            }}>
              <Text style={{
            fontWeight: "bold",
            padding: 10,
           
          }}> Father's Information (বাবার তথ্য)</Text>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}> Father's Name (বাবার নাম )</Text>
            <TextInput
              placeholder="Enter your Father's   name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Profession (পেশা) </Text>
            <TextInput
              placeholder="Enter your father's Profession"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Nationality (জাতীয়তা) </Text>
            <TextInput
              placeholder="Enter your father's Nationality"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Father's NID no.(বাবার এন আই ডি নং )  (Optional)  </Text>
            <TextInput
              placeholder="Enter your  father's NID no. "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
              </View>
              <View style={{
              padding: 10,
              flex: .5
            }}>
              <Text style={{
            fontWeight: "bold",
            padding: 10,
           
          }}> Mother's Information (মায়ের তথ্য) </Text>
          
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}> Mother's Name (মায়ের নাম )</Text>
            <TextInput
              placeholder="Enter your mother's   name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Profession (পেশা) </Text>
            <TextInput
              placeholder="Enter your mother's Profession"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Nationality (জাতীয়তা) </Text>
            <TextInput
              placeholder="Enter your mother's Nationality"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Mother's NID no.  (Optional) (মায়ের এন আই ডি নং )  </Text>
            <TextInput
              placeholder="Enter your  mother's NID no. "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
              </View>
              </View>
          
          
              <View style={{
            flexDirection: 'row',
            flex: 1
          }}>
            <View style={{
              padding: 10,
              flex: .5
            }}>
               <Text style={{
            fontWeight: "bold",
            padding: 10,
           
          }}> Legal Gurdian's Information (দত্তক এর পরিচিতি ) </Text>
          
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Legal Gurdian's Name দত্তক এর নাম ইংরেজীতে (As per NID) </Text>
            <TextInput
              placeholder="Enter yourLegal Gurdian's Name  (দত্তক এর নাম)"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputTitle}>Profession (পেশা) </Text>
            <TextInput
              placeholder="Enter your Legal Gurdian's Profession"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />

          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Nationality (জাতীয়তা) </Text>
            <TextInput
              placeholder="Enter your Legal Gurdian's  Nationality"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.InputTitle}>Ministry of Home Affairs Order no.(Mandatory)   </Text>
            <TextInput
              placeholder="Enter Home Affairs Order no. "
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <Text style={{
            fontWeight: "bold",
            paddingBottom: 10,
            paddingLeft: 10,
          
          }}>Note: This Document is Mandatory to submit while enrollment</Text>
              </View>
              <View style={{
              padding: 10,
              flex: .5
            }}>
              </View>
              </View>
          
         
          
          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("SpouseInfo",{yearofage,selectedId})}
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
    width: "90%",
    padding: 10
  },
});
export default ParentalInfo;
