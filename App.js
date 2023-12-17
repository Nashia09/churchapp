import React, {useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import AppNavigation from "./src/navigation";
import DecisionScreen from "./src/screens/DecisionScreen";
import { PaperProvider } from 'react-native-paper';

export default function App() {
  
  return (
    <>
      {/* <SplashScreen /> */}
      <PaperProvider>

      <AppNavigation />
      
      </PaperProvider>
      {/* <DecisionScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
