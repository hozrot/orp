import React, { useState } from "react";
import { View, StyleSheet, Text, DatePickerIOS, ScrollView, Modal, TouchableOpacity } from "react-native";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TextInput from "../component/TextInput";
//const [chosenDate, setChosenDate] = useState(new Date());
import Button from "../component/Button";

function ApplicationPage({ navigation }) {
    const [open, setOpen] = useState(false)

    function hanldeOnPress() {
        setOpen(!open);
    }
    return (
        <ScrollView>
            <Header />
            <View style={{
                flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between",
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
                    Please fill in all required information step by step in each section
                </Text>
                <View style={{ padding: 32, width: "25%",  }} >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                        Date of Birth:
                    </Text>
                    <TextInput
                        icon="calendar"
                        placeholder="Enter your DoB in dd/mm/yyyy format "
                        returnKeyType="next"
                    />
                    <Text style={{ padding: 10, color: 'red' }} >
                        # If age is less than 2 years , A 3R size photo need to submit during enrolment
                    </Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center',alignItems:'center' }} >
                <View
                    style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "25%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                        NID no:
                    </Text>
                    <TextInput
                        icon="document"
                        placeholder="Enter your NID No. "
                        returnKeyType="next"
                    />
                    <Text style={{ padding: 10, color: 'red' }} >
                        # If age is greater than 18 Years you must have to give NID information {'\n'}
                    </Text>
                </View>
                <View
                    style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "25%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                        Birth Reg. No. :
                    </Text>
                    <TextInput
                        icon="news"
                        placeholder="Enter your BRC No."
                        returnKeyType="next"
                    />
                    <Text style={{ padding: 10, color: 'red' }} >

                        # If age is less or equal  than 18 Years you can give only BRC no.
                    </Text>
                   
                    
                </View>
               
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center',alignItems:'center' }} >
                <View
                     style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "50%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                       First Name 
                    </Text>
                    <TextInput
                        icon="document"
                        placeholder="Enter your First Name  "
                        returnKeyType="next"
                    />
                
                </View>
                <View
                    style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "50%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                       Last Name 
                    </Text>
                    <TextInput
                        icon="news"
                        placeholder="Enter your Last Name"
                        returnKeyType="next"
                    />
                        
                </View>
               
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center',alignItems:'center' }} >
                <View
                     style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "50%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                       Father's  Name 
                    </Text>
                    <TextInput
                        icon="document"
                        placeholder="Enter your Father's Name  "
                        returnKeyType="next"
                    />
                
                </View>
                <View
                    style={{
                        padding: 32,
                        marginBottom: 16,
                        width: "50%",

                    }}
                >
                    <Text style={{ fontWeight: "bold", padding: 10, }} >
                    Mother's Name 
                    </Text>
                    <TextInput
                        icon="news"
                        placeholder="Enter your Mother's Name"
                        returnKeyType="next"
                    />
                        
                </View>
               
                </View>
                
               
                <TouchableOpacity onPress={hanldeOnPress}>
                        <Text>Open </Text>
                    </TouchableOpacity>
                    <Modal animationType='fade'
                        transparent={true}
                        visible={open}>


                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={hanldeOnPress} >
                            <View style={{ alignItems: 'center', backgroundColor: 'yellow', width: '40%', height: '50%', elevation: .5 }}> <Text> This a Modal data </Text>
                            </View>
                        </TouchableOpacity>
                    </Modal>

                    <Button
                        label="Next"
                        onPress={() => navigation.navigate("Application")}
                    />

            </View>

            <Footer />
        </ScrollView>
    );
}
const styles = StyleSheet.create({});
export default ApplicationPage;
