import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native'
import { urlFor } from '../sanity';


import {
    ArrowLeftCircleIcon,
    StarIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
    ChevronRightIcon
} from 'react-native-heroicons/solid';

import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

import { formatCurrency } from "react-native-format-currency";



const  RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[]);
    

  const {
    params: {
        id, 
        imgUrl, 
        title, 
        short_description, 
        rating, 
        genre, 
        address, 
        dishes, 
        long, 
        lat 
    }
  } = useRoute();

//   console.log('Dishes', dishes);

  useEffect(() => {
    dispatch(setRestaurant({id, imgUrl, title, short_description, rating, genre, address, 
      dishes, long, lat}))}, [dispatch])
  

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image source={{uri: urlFor(imgUrl).url()}} className="w-full h-56 bg-gray-300 p-4"/>
          <TouchableOpacity onPress={navigation.goBack}className="absolute top-14 left-5 p-2 bg-grey-100">
              <ArrowLeftCircleIcon size={30} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
                  <View className="flex-row space-x-2 my-1">
                  <View className="flex-row items-center space-x-1">
                          <StarIcon color="green" opacity={0.5} size={22} />
                          <Text className="text-xs text-gray-500">
                              <Text className="text-green-500">{rating}. {genre}</Text>
                          </Text>
                      </View>

                      <View className="flex-row items-center space-x-1">
                          <MapPinIcon color="gray" opacity={0.4} size={22} />
                          <Text className="text-xs text-gray-500">
                              <Text className="text-green-500">Nearby. {address}</Text>
                          </Text>
                      </View>
                  </View>
                  <View>
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                  </View>

                  <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                      <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                      <Text className="pl-2 flex-1 font-bold">Have a food allergy?</Text>
                      <ChevronRightIcon color="#00CCBB" />
                  </TouchableOpacity>

                  <View className="pb-36">
                      <Text className="text-xl font-bold px-4 pt-6 mb-3">
                          Menu
                      </Text>
                      {/* Dishrows */}
                      {
                          dishes.map(dish => (
                              <DishRow
                                  id={dish._id}
                                  key={dish._id}
                                  price={dish.price}
                                  name={dish.name}
                                  short_description={dish.short_description}
                                  image={dish.image}
                              />
                          ))
                      }
                  </View>
                  
          </View>
        </View>
      </ScrollView>
    </>
  )
}
export default RestaurantScreen