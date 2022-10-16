import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native'


const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Basket")
      },3000)

    }, [])
    

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../assets/Deliveroo.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text 
        className="pb-5 pt-5 text-xl text-white font-bold"
        animation="slideInUp"
        iterationCount={1}
    >
      We are processing your order
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen