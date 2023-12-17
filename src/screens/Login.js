// LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import registerImage from "../../assets/images/w.webp";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const handleLogin = () => {
    // console.log('Login Data:', { email, password });
    navigation.navigate("Main");
  };
  return (
    <View className="flex-1 items-center justify-center  bg-gray-800">
      <Image source={registerImage} className="w-full h-30 top-[-70]" />
      <View className="w-80">
        <Text className="text-2xl m-5  text-start font-extrabold text-gray-100">
          Feed your soul
        </Text>
        <TextInput
          className="border-b-2 rounded p-2 mb-2 w-full text-gray-400 border-gray-400"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          className={`border-b-2 rounded p-2 mb-2 w-full text-gray-400 border-gray-400`}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className=" bg-gray-600 border-white p-5 w-52 rounded-md top-10 m-2"
        onPress={() => handleLogin()}
      >
        <Text className="text-white text-center">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="  border-white p-5 rounded-md top-10 m-2"
        onPress={() => navigation.navigate("Register")}
      >
        <Text className="text-white text-center">
          Don't have an account?{" "}
          <Text className="text-amber-600">Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
