import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import ApplicationPage from "./screens/ApplicationPage";
import PassportType from "./screens/PassportType";
import PersonalInfo from "./screens/PersonalInfo";
import AddressInfo from "./screens/AddressInfo";
import IdDoc from "./screens/IdDoc";
import ParentalInfo from "./screens/ParentalInfo";
import SpouseInfo from "./screens/SpouseInfo";
import EmergencyContact from "./screens/EmergencyContact";
import PassportOption from "./screens/PassportOption";
import DelevaryOption from "./screens/DelevaryOption";
import ApplicationSummary from "./screens/ApplicationSummary";
import StatusCheck from "./screens/StatusCheck";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Application" component={ApplicationPage} />
        <Stack.Screen name="PassportType" component={PassportType} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="AddressInfo" component={AddressInfo} />
        <Stack.Screen name="IdDoc" component={IdDoc} />
        <Stack.Screen name="ParentalInfo" component={ParentalInfo} />
        <Stack.Screen name="SpouseInfo" component={SpouseInfo} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
        <Stack.Screen name="PassportOption" component={PassportOption} />
        <Stack.Screen name="DelevaryOption" component={DelevaryOption} />
        <Stack.Screen name="ApplicationSummary" component={ApplicationSummary} />
        <Stack.Screen name="StatusCheck" component={StatusCheck} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
