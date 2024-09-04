import React, { useMemo, useState, useRoute } from "react";
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
import MenuBar from "../component/MenuBar";
import SideMenu from "../component/SideMenu";
// import { Tooltip } from "@ui-kitten/components";
//import { IconButton, Tooltip } from "react-native-paper";
const job = [
  { label: "Government Job", value: "1" },
  { label: "Private Job", value: "2" },
  { label: "Business", value: "3" },
  { label: "Student", value: "4" },
  { label: "Others", value: "5" },
];
const gender = [
  { gender: "Male", value2: "1" },
  { gender: "Female", value2: "2" },
  { gender: "Other", value2: "3" },
];
const religion = [
  { religion: "Islam", value3: "1" },
  { religion: "Hindu", value3: "2" },
  { religion: "Buddha", value3: "3" },
];
const citizenship = [
  { citizenship: "By Birth", citizenshipId: "1" },
  { citizenship: "Native", citizenshipId: "2" },
  { citizenship: "Migration", citizenshipId: "3" },
];
const year = [
  { year: "2022", yearId: "1" },
  { year: "2015", yearId: "2" },
  { year: "2006", yearId: "3" },
  { year: "2000", yearId: "4" },
  { year: "1995", yearId: "5" },
  { year: "1990", yearId: "6" },
  { year: "1985", yearId: "7" },
];

export default function PersonalInfo({ navigation, route }) {
  const {PassportType,selectedDoc,selectedPayment} = route.params;
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);
  const [citizenshipId, setCitizenshipId] = useState(null);
  const [citizenshipFocus, setCitizenshipFocus] = useState(false);
  const [yearId, setYearId] = useState(null);
  const [yearFocus, setYearFocus] = useState(false);

  const [age, setAge] = useState(null);
  const ageAsNumber = Number(age);

  return (
    <ScrollView>
      <Header />
      {/* <Text> option: {selectedPayment}</Text>
      <Text> option2: {selectedDoc}</Text> */}
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
          Please fill in all required information step by step
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
          <TouchableOpacity
            style={{
              backgroundColor: "gray",
            }}
            onPress={() => navigation.navigate("PersonalInfo")}
          >
            <Text style={styles.sidemenu}>Parsonal Information </Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ApplicationSummary")}
          >
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
            Personal Information (ব্যাক্তিগত তথ্য)
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingBottom: 10,
              paddingLeft: 10,
              padding: 20,
            }}
          >
            Note: If you have any confusion about "Given anme" and "Surname"
            Please click here for example
          </Text>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
                padding: 10,
              }}
            >
              {" "}
              Select Gender (লিঙ্গ ){" "}
            </Text>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                padding: 10,
              }}
            >
              <View>
                {" "}
                <Dropdown
                  style={[styles.dropdown, isFocus2 && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={gender}
                  labelField="gender"
                  valueField="value2"
                  placeholder={!isFocus2 ? "Select your Gender" : "..."}
                  value={value2}
                  onFocus={() => setIsFocus2(true)}
                  onBlur={() => setIsFocus2(false)}
                  onChange={(item) => {
                    setValue2(item.value2);
                    setIsFocus2(false);
                  }}
                />{" "}
              </View>
              <View>
                {" "}
                {value2 == 3 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      padding: 20,
                      marginBottom: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Need to provide Certification for Other Gender{" "}
                  </Text>
                )}{" "}
              </View>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              Full Name (সম্পুর্ণ নাম){" "}
            </Text>

            <TextInput
              placeholder="Enter your Full name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View
            style={{
              width: "40%",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              Given Name (নামের ১ম অংশ ){" "}
            </Text>
            <TextInput
              placeholder="Enter your Given name"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View
            style={{
              width: "40%",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              Surname (নামের শেষ অংশ){" "}
            </Text>
            <TextInput
              placeholder="Enter your Surname"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View
            style={{
              width: "40%",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              {" "}
              Select Profession (পেশা){" "}
            </Text>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
              }}
            >
              <View>
                {" "}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={job}
                  labelField="label"
                  valueField="value"
                  placeholder={
                    !isFocus ? "Select your current Profession" : "..."
                  }
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />{" "}
              </View>
              <View>
                {" "}
                {value == 1 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      padding: 20,
                      marginBottom: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Need to provide Government NOC while Enrollment{" "}
                  </Text>
                )}
                {value == 2 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      padding: 20,
                      marginBottom: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Need to provide Official NOC while Enrollment{" "}
                  </Text>
                )}
                {value == 3 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      padding: 20,
                      marginBottom: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Need to provide Tread Licence while Enrollment{" "}
                  </Text>
                )}
                {value == 4 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      padding: 20,
                      marginBottom: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Need to provide Student ID while Enrollment{" "}
                  </Text>
                )}{" "}
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
                padding: 20,
              }}
            >
              {" "}
              Select Religion (ধর্ম ){" "}
            </Text>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                padding: 20,
              }}
            >
              <View>
                {" "}
                <Dropdown
                  style={[styles.dropdown, isFocus3 && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={religion}
                  labelField="religion"
                  valueField="value3"
                  placeholder={!isFocus3 ? "Select your Religion" : "..."}
                  value={religion}
                  onFocus={() => setIsFocus3(true)}
                  onBlur={() => setIsFocus3(false)}
                  onChange={(item) => {
                    setValue3(item.value3);
                    setIsFocus3(false);
                  }}
                />{" "}
              </View>
            </View>
            <View
              style={{
                width: "40%",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}
              >
                Country Code (দেশের কোড){" "}
              </Text>
              <TextInput
                placeholder="Enter Country Code"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
            </View>
            <View
              style={{
                width: "40%",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}
              >
                Mobile No (মোবাইল নং ){" "}
              </Text>
              <TextInput
                placeholder="Enter Mobile no"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
                fontSize: 24,
              }}
            >
              Birth Data (জন্মগ্রহন সংক্রান্ত তথ্য ){" "}
            </Text>
            <View
              style={{
                width: "40%",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}
              >
                Select Country of Birth(যে দেশে জন্মগ্রহন করেছেন){" "}
              </Text>
              <TextInput
                placeholder="Enter Country of Birth"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
            </View>
            <View
              style={{
                width: "40%",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}
              >
                Select City of Birth (যে শহরে জন্মগ্রহন করেছেন){" "}
              </Text>
              <TextInput
                placeholder="Enter City of Birth"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
              />
            </View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Note:You can enter max 28 Charecter for your City of birth
            </Text>
            <View
              style={{
                width: "75%",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}
              >
                Select Date of Birth (জন্মতারিখ ){" "}
              </Text>
              {/* <label for="start">DOB</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                min="1900-01-01"
                max="2024-12-31"
              /> */}
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="number"
                  enterKeyHint="enter"
                  placeholder="Enter Date 1-31"
                />

                <input
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  type="number"
                  enterKeyHint="enter"
                  placeholder="Enter Month 1-12"
                />

                <Dropdown
                  style={[
                    styles.dropdown,
                    yearFocus && { borderColor: "blue" },
                  ]}
                  data={year}
                  labelField="year"
                  valueField="yearId"
                  placeholder={!yearFocus ? "Select Year of Birth" : "..."}
                  value={yearId}
                  onFocus={() => setYearFocus(true)}
                  onBlur={() => setYearFocus(false)}
                  onChange={(item) => {
                    setYearId(item.yearId);
                    setYearFocus(false);
                  }}
                />
              </View>
              <View style={{ padding: 10 }}>
                {" "}
                {yearId == 1 && (
                  <Text
                    style={{
                      color: "#223e4b",

                      fontWeight: "bold",
                    }}
                  >
                    Your Age is Less than six. Need to submit 3R size Lab Print
                    (gray Background) Picture while Enrolment{" "}
                  </Text>
                )}
                {yearId == 2 && (
                  <Text
                    style={{
                      color: "#223e4b",

                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Your Age is greater than six but less than 18 . Need to
                    submit BRC while Enrolment{" "}
                  </Text>
                )}
                {yearId == 3 && (
                  <Text
                    style={{
                      color: "#223e4b",

                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Your Age is greater than 18 but less than 20 . Need to
                    submit BRC or NID while Enrolment{" "}
                  </Text>
                )}
                {yearId >= 4 && (
                  <Text
                    style={{
                      color: "#223e4b",

                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Your Age is greater than 18 . Need to submit NID while
                    Enrolment{" "}
                  </Text>
                )}
              </View>
            </View>

            <Text
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
                padding: 10,
              }}
            >
              {" "}
              Select Type of Citizenship (জাতীয়তা)
            </Text>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                padding: 10,
              }}
            >
              <View>
                {" "}
                <Dropdown
                  style={[
                    styles.dropdown,
                    citizenshipFocus && { borderColor: "blue" },
                  ]}
                  data={citizenship}
                  labelField="citizenship"
                  valueField="citizenshipId"
                  placeholder={
                    !citizenshipFocus ? "Select your Citizenship" : "..."
                  }
                  value={citizenshipId}
                  onFocus={() => setCitizenshipFocus(true)}
                  onBlur={() => setCitizenshipFocus(false)}
                  onChange={(item) => {
                    setCitizenshipId(item.citizenshipId);
                    setCitizenshipFocus(false);
                  }}
                />{" "}
              </View>
              <View>
                {" "}
                {citizenshipId == 3 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      padding: 20,
                      marginBottom: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Need to provide Certification for Migration{" "}
                  </Text>
                )}{" "}
              </View>
            </View>
            {/* <View style={{
              width: "40%",
              flexDirection: 'row',
              padding: 10
            }} >

              <View>  <Dropdown
                style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={gender}
                labelField="gender"
                valueField="value2"
                placeholder={!isFocus2 ? 'Select your Gender' : '...'}
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={item => {
                  setValue2(item.value2);
                  setIsFocus2(false);
                }}
              /> </View>
              <View>  {value2 == 3 && <Text style={{
                color: "#223e4b",
                padding: 20,
                marginBottom: 16,
                fontWeight: "bold",
              }}>Need to provide Certification for  Other Gender   </Text>} </View>

            </View> */}
          </View>

          <Button
            label="Save and Continue"
            onPress={() => navigation.navigate("AddressInfo",yearId)}
          />
        </View>
        <Text>test data: {yearId}</Text>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sidemenu: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10,
  },
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
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
