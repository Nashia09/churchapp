import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import DecisionScreen from "../screens/DecisionScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screens/Home";
import Devotional from "../screens/Devotional";
import Give from "../screens/Give";
import Profile from "../screens/Profile";
import LoginScreen from "../screens/LoginScreen";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#3e2465"
    inactiveColor="#ffb300"
    barStyle={{ backgroundColor: 'black' }}
    >
    <Tab.Screen name="Home" component={Home} options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Give" component={Give} options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="wallet" color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Devotional" component={Devotional} options={{
       
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="book-open-variant" color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen  name="Home" component={HomeScreen}  /> */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen  name="Decision" component={DecisionScreen}  />
        <Stack.Screen  name="Register" component={Register}  />
        <Stack.Screen  name="Login" component={LoginScreen}  />
        <Stack.Screen  name="Home" component={Home}  />
        <Stack.Screen  name="Main" component={MainTabNavigator}  />

      
      
      </Stack.Navigator>

 
    </NavigationContainer>
  );
}
