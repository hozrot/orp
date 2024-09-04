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
import MenuBar from "../component/MenuBar";
export default function AddressInfo({ navigation,route }) {

  const yearofage = route.params;
  return (
    <ScrollView>
      <Header />
      <MenuBar />
      <View
        style={{
          paddingLeft: 200,
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
          {" "}
          Please fill in all required information step by step{" "}
        </Text>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 200,
        }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("PassportType")}>
            <Text style={styles.sidemenu}>Passport Type </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PersonalInfo")}>
            <Text style={styles.sidemenu}>Parsonal Information </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "gray",
            }}
            onPress={() => navigation.navigate("AddressInfo")}
          >
            <Text style={styles.sidemenu}>Address </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>ID Document </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Parental Information </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Spouse Information </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Emergency Contact </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Passport Option </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidemenu}>Delivary Option and Appionment </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              color: "#223e4b",
              fontSize: 30,
              fontWeight: "bold",
              padding: 20,
            }}
          >
            Address (ঠিকানা)
          </Text>

          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <View
              style={{
                padding: 10,
                flex: 0.5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                {" "}
                Permanent Address (স্থায়ী ঠিকানা ){"\n"} Note: Change of
                Permanet Address is subjective to {"\n"}SB Police clearence or
                Varification{" "}
              </Text>

              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                {" "}
                নোটঃ স্থায়ী ঠিকানা পরিবর্তন হলে পুলিশ ভেরিফিকেশন করা হবে{" "}
              </Text>
              <View style={styles.InputView}>
                <View style={styles.InputView}>
                  <Text style={styles.InputTitle}>
                    {" "}
                    Select District (জেলা ){" "}
                  </Text>
                  <TextInput
                    placeholder="Enter your District  name"
                    autoCapitalize="none"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                </View>
                <View style={styles.InputView}>
                  <Text style={styles.InputTitle}>
                    City / Village / House (শহর / গ্রাম / বাড়ি ){" "}
                  </Text>
                  <TextInput
                    placeholder="Enter your City / Village / House name"
                    autoCapitalize="none"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                </View>
                <View style={styles.InputView}>
                  <Text style={styles.InputTitle}>
                    Select Post Office (পোস্ট অফিস ){" "}
                  </Text>
                  <TextInput
                    placeholder="Enter your  Post Office"
                    autoCapitalize="none"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                </View>
                <View style={styles.InputView}>
                  <Text style={styles.InputTitle}>
                    Select Post Code (পোস্ট কোড ){" "}
                  </Text>
                  <TextInput
                    placeholder="Enter your  Post Code"
                    autoCapitalize="none"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                </View>
                <View style={styles.InputView}>
                  <Text style={styles.InputTitle}>
                    Select Police Station (পুলিশ স্টেশন ){" "}
                  </Text>
                  <TextInput
                    placeholder="Enter your Police Station"
                    autoCapitalize="none"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 0.5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                {" "}
                Present Address (বর্তমান ঠিকানা ) {"\n"} Note: Change of Present
                Address is subjective to RPO/BM{" "}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                {" "}
                নোটঃ বর্তমান ঠিকানা অনুযায়ী নিকটস্থ পাসপোর্ট অফিসে ফর্ম জমা ও
                বায়োমেট্রিক ডাটা দিতে হবে{" "}
              </Text>
              <label>
                <input
                  type="checkbox"
                  name="myCheckbox"
                  defaultChecked={true}
                />
                Same as present Address:(স্থায়ী ও বর্তমান ঠিকানা একই )
              </label>

              <View style={styles.InputView}>
                <Text style={styles.InputTitle}> Select District (জেলা )</Text>
                <TextInput
                  placeholder="Enter your District  name"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.InputTitle}>
                  City / Village / House (শহর / গ্রাম / বাড়ি ){" "}
                </Text>
                <TextInput
                  placeholder="Enter your City / Village / House name"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.InputTitle}>
                  Select Post Office (পোস্ট অফিস ){" "}
                </Text>
                <TextInput
                  placeholder="Enter your  Post Office"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.InputTitle}>
                  Select Post Code (পোস্ট কোড ){" "}
                </Text>
                <TextInput
                  placeholder="Enter your  Post Code"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
              </View>
              <View style={styles.InputView}>
                <Text style={styles.InputTitle}>
                  Select Police Station (পুলিশ স্টেশন ){" "}
                </Text>
                <TextInput
                  placeholder="Enter your Police Station"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
              </View>
            </View>
          </View>

          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("IdDoc",yearofage)}
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
    padding: 10,
  },
  InputTitle: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  InputView: {
    width: "80%",
    padding: 10,
  },
});
