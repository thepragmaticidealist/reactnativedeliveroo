import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react';

import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

import {
  XMarkIcon
} from 'react-native-heroicons/solid';

import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';


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
            <View>
            <Text className="text-md text-gray-400 mt-5">Your order at {restaurant.title} is being prepared</Text>
          </View>
          </View>
        </SafeAreaView>
        <MapView
            initialRegion={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
            mapType="mutedStandard"
            className="z-0 flex-1 -mt-10"
          >
          <Marker 
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor='#00CCBB'

          />
          </MapView>
          <SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
            <Image source={{uri: "https://links.papareact.com/wru"}} className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"/>
            <View className="flex-1">
              <Text className="text-lg">Mabishi Wakio</Text>
              <Text className="text-gray-400">Your Rider</Text>
            </View>
            <Text className="text-[#00CCBB] font-bold mr-5 text-lg">Call</Text>
          </SafeAreaView>
        </View>

    )
}

export default DeliveryScreen;