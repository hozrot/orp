import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// npm install --save accordion-collapse-react-native
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function CollapseBlock(props) {
  return (
    <View style={styles.Collapseblock}>
      <Collapse>
        <CollapseHeader>
          <View style={styles.blockHead}>
            <Text>
              {" "}
              Urgent Application {" \n"}
              Super Express{" "}
            </Text>
            <MaterialCommunityIcons name={"clock"} size={100} color={"green"} />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>only previously passport users will be able to apply</Text>

          <Text> 2 working days from Agargaon RPO </Text>

          <Text>
            Fees : {"\n"}
            {"\u2022"} 48/5 : 8625 taka {"\u2022"} 48/10 : 10350 Taka {"\u2022"}
            64/5 : 12075 Taka {"\u2022"} 64/10 : 13800 Taka
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
}
const styles = StyleSheet.create({
  blockHead: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  CollapseBlock: {
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
export default CollapseBlock;
