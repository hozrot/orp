import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SideMenu({navigation}) {
  return (
   <View>
        <TouchableOpacity onPress={() => navigation.navigate("PassportType")} >
          <Text style={styles.sidemenu}>Passport Type </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'gray',
        }} onPress={() => navigation.navigate("PersonalInfo")}>
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
  )
}

const styles = StyleSheet.create({
    sidemenu: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10
  },})