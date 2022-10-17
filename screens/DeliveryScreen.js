import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react';

import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

import {
  XMarkIcon
} from 'react-native-heroicons/solid';

import * as Progress from 'react-native-progress';


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
    return (
      <View className="bg-[#00CCBB] flex-1 pt-20">
        <SafeAreaView className="z-50">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.navigate("Home")} className="pl-5" >
              <XMarkIcon color="white" size={30} />
            </TouchableOpacity>
            <TouchableOpacity><Text className="pr-5 font-light font-lg text-white">Order Help</Text></TouchableOpacity>
          </View>

          <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md mt-5">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                <Text className="text-4xl font-bold">45-55 Minutes</Text>
              </View>
              <Image 
                source={{uri: "https://links.papareact.com/fls"}}
                className="h-20 w-20"
              />
            </View>
            <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
          </View>
        </SafeAreaView>
      </View>
    )
}

export default DeliveryScreen;