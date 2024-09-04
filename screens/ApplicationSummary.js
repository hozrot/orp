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
function ApplicationSummary({ navigation ,route}) {

  const {yearofage,statusId} = route.params;
 
  return (
    <ScrollView>
      <Header />

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
          Application Summary
        </Text>

        <View
          style={{
           
            width: "60%",
            backgroundColor: "#E3F2FD",
            padding: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Passport Type:{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                Ordinary passport{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Applicant Name:{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                Md Hozrot Ali{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Date of Birth
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                24 April 1993{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Online Registration ID{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                OID1254587859{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Regional Passport Office{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                Passport Office: Agargaon, Dhaka{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Passport Pages:{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                48 Pages
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Validity:{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                10 Years{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Delivery Service :{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                Regular{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                Payment Type{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Text
                style={{
                  color: "#223e4b",
                  fontSize: 18,

                  fontWeight: "bold",
                }}
              >
                Offline{" "}
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,

              padding: 20,
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "#223e4b",
                fontSize: 18,

                fontWeight: "bold",
              }}
            >
              List of required Document:(According to your Application)
            </Text>
            <Text
              style={{
                color: "#223e4b",
                fontSize: 16,

                fontWeight: "bold",
              }}
            >
              1. Printed Application Summary{" "}
            </Text>
            <Text
              style={{
                color: "#223e4b",
                fontSize: 16,

                fontWeight: "bold",
              }}
            >
              2. Payment Slip{" "}
            </Text>
            <Text
              style={{
                color: "#223e4b",
                fontSize: 16,

                fontWeight: "bold",
              }}
            >
              3.Printed Application form{" "}
            </Text>
            {/* <Text
              style={{
                color: "#223e4b",
                fontSize: 16,

                fontWeight: "bold",
              }}
            >
              4.Identity Document: NID Card{" "}
            </Text> */}
            <View>
                {" "}
                {yearofage == 1 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                   4. Need to submit 3R size Lab Print
                    (gray Background) Picture while Enrolment{" "}
                  </Text>
                )}
                {yearofage == 2 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                  4. Need to
                    submit BRC while Enrolment{" "}
                  </Text>
                )}
                {yearofage == 3 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                   4. Need to
                    submit BRC or NID while Enrolment{" "}
                  </Text>
                )}
                {yearofage >= 4 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                   4. Need to submit NID while
                    Enrolment{" "}
                  </Text>
                )}
              </View>
              <View>

              {statusId == 1 && (
                  <Text
                    style={{
                      color: "#223e4b",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    5. Marriage Certification{" "}
                  </Text>
                )}
           </View>
            <Text
              style={{
                color: "#223e4b",
                fontSize: 20,

                fontWeight: "bold",
              }}
            >
              Passport Price : 6325 Taka (including VAT)
            </Text>
            {/* <Text>{yearofage}</Text> */}
          </View>
         
        </View>

        {/* <Button
          label="Payment"
          onPress={() => navigation.navigate("#")}
        />
        */}
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
});
export default ApplicationSummary;
