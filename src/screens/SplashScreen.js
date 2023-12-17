// SplashScreen.js
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
// import { wind } from 'react-native-wind';
import Animated, {
  BounceOutDown,
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate("Decision"), 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Animated.Image
        entering={FadeInUp.delay(400).duration(1000).springify()}
        //exiting={BounceOutDown.delay(400).duration(1000).springify()}
        source={require("../../assets/images/lot1.png")}
        className="w-80 h-80 animate-spin"
      />

      <Animated.Text
        // style={{fontFamily: 'poppins-regular'}}
        entering={FadeInUp.delay(400).duration(1000).springify()}
        className="text-right  text-3xl font-extrabold text-white "
      >
        Jesus Revealed,
      </Animated.Text>
      <Animated.Text
        entering={FadeInUp.delay(400).duration(1000).springify()}
        className="text-left   text-3xl font-extrabold text-white "
      >
        Jesus Glorified
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
