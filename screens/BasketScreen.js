import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems, removeFromBasket } from '../features/basketSlice';


import { urlFor } from '../sanity';


import {
    XCircleIcon,
} from 'react-native-heroicons/solid';

import { formatCurrency } from "react-native-format-currency";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setgroupedItemsInBasket] = useState([])

    console.log(restaurant);
    // console.log(groupedItemsInBasket);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id]  = results[item.id] || []).push(item);
            return results
        }, {});
        setgroupedItemsInBasket(groupedItems)
    }, [items])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="flex-row pt-10 border-b border-[#00CCBB] bg-white shadow-xs pb-5">
            <View className="flex-1 items-center">
                <Text className="text-lg font-bold text-center">Basket</Text>
                <Text className="text-center text-gray-400">{restaurant.title}</Text>
            </View>
            <TouchableOpacity>
                <XCircleIcon className="rounded full bg-gray-100 absolute top-3 right-5" onPress={navigation.goBack} height={50} width={50} color="#00CCBB"  />
            </TouchableOpacity>
            </View>

            <View className="flex-row items-centre space-x-4 px-4 py-3 bg-white my-5">
                <Image source="https://links.papareact.com/wru" className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
                <Text className="flex-1">Deliver in 30-45 min</Text>
                <TouchableOpacity><Text className="text-[#00CCBB]">Change</Text></TouchableOpacity>
            </View>

            <ScrollView className="divide-y divide-gray-200">
                {
                    Object.entries(groupedItemsInBasket).map(([key, items]) =>  (
                        <View key={key} className="flex-row p-4 space-x-2 items-center bg-white">
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image source={{uri: urlFor(items[0]?.image).url()}} className="h-12 w-12 rounded-full" /> 
                            <Text className="flex-1 ">{items[0]?.name}</Text>
                            <Text className="text-gray-600">{formatCurrency({amount:items[0]?.price , code: "EUR"})}</Text>

                            <TouchableOpacity>
                                <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({id: key}))}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    ))
                }
            </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen