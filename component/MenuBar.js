import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function MenuBar({ navigation }) {
  return (
    <View style={styles.MenuBar}>
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text style={styles.menuText}>Home </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{
        backgroundColor: 'gray',
      }}>
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
  )
}

const styles = StyleSheet.create({
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

})