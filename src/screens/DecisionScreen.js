import { View, Text, Image,TouchableOpacity, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import Animated, {
  BounceInDown,
  BounceInLeft,
  BounceInUp,
  BounceOutDown,
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { loadFonts } from "../../Fonts";

export default function DecisionScreen() {
  useEffect(() => {
    const loadApp = async () => {
      await loadFonts();
      // Continue with the rest of your app setup
    };

    loadApp();
  }, []);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black justify-center items-center">
      {/* <StatusBar  /> */}
        <Animated.Image
        entering={FadeInUp.delay(400).duration(1000).springify()}

        className="w-full h-30 top-[-70]"
        source={require('../../assets/images/w.webp')} />
       <View className="w-4/5" >  

        <Animated.Text
        style={{fontFamily: 'poppins-bold'}}
        entering={BounceInDown.delay(200).duration(1000).springify()}
        
        className="left-[-20] m-2  text-3xl font-extrabold text-white ">Join this stream </Animated.Text>
        <Animated.Text
        style={{fontFamily: 'poppins-mi'}}

        entering={BounceInDown.delay(200).duration(1000).springify()}
        
        className="left-[-20] m-2 text-3xl font-extrabold text-white ">flowing to God </Animated.Text>

        <Animated.Text 
        style={{fontFamily: 'poppins-regular'}}
        
        entering={BounceInDown.delay(200).duration(1000).springify()}
        
        className="text-left  text-1xl font-bold text-orange-200 ">Play live messages anywhere 
and download seamlessly</Animated.Text>
<Animated.View
        entering={BounceInUp.delay(200).duration(1000).springify()}
        exiting={BounceOutDown}
>

<TouchableOpacity
        
        className='bg-amber-600 p-5 rounded-md top-10 m-2'
        onPress={() => navigation.navigate("Login") }
        >
          <Text className='text-white text-center'>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className=' bg-gray-600 border-white p-5 rounded-md top-10 m-2'
          onPress={() => navigation.navigate("Register")}
          >
          <Text className='text-white text-center'>Register</Text>
        </TouchableOpacity>
          </Animated.View>
       </View>
    </View>
  )
}


