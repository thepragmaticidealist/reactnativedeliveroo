import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native'

import { formatCurrency } from "react-native-format-currency";



const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="flex-row mx-5 items-center space-x-1 p-4 rounded-lg bg-[#00CCBB]">
        <Text className="text-lg font-extrabold text-white py-1 px-2 bg-[#01A296]">{items.length}</Text>
        <Text className="flex-1 text-lg font-extrabold text-white text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">{formatCurrency({amount: basketTotal, code: "EUR"})}</Text>

      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon