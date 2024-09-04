import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//npm i react-native-flip-card
import FlipCard from "react-native-flip-card";
function FlipBlock(props) {
  return (
    <View style={styles.Flipblock}>
      <FlipCard>
        {/* Face Side */}

        <View style={styles.block}>
          <MaterialCommunityIcons name={"cash"} size={100} color={"green"} />
          <Text style={styles.menuText}> Passport Fee </Text>
        </View>

        {/* Back Side */}

        <View style={styles.block}>
          <Text style={styles.menuText}>
            Fees : Super Express (2 Days): {" \n"} 48/5 : 8625 taka 48/10 :
            10350 Taka {" \n"}
            64/5 : 12075 Taka 64/10 : 13800 Taka Regular(15 days): {" \n"} 48/5
            : 8625 taka 48/10 : 10350 Taka {" \n"}
            64/5 : 12075 Taka 64/10 : 13800 Taka Express (7 Days): {" \n"} 48/5
            : 8625 taka 48/10 : 10350 Taka {" \n"}
            64/5 : 12075 Taka 64/10 : 13800 Taka
          </Text>
        </View>
      </FlipCard>
    </View>
  );
}
const styles = StyleSheet.create({
  FlipBlock: {},
  block: {
    backgroundColor: "#FFFFFF",
    flex: 0.3,
    height: 350,
    margin: 5,
    padding: 10,
    borderRadius: 35,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FlipBlock;
