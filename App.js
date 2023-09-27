import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./NavigationTab";

export default function App(){
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  )
}