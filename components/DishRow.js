import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'

import { urlFor } from '../sanity';

import {
    PlusCircleIcon,
    MinusCircleIcon
} from 'react-native-heroicons/solid';

import { formatCurrency } from "react-native-format-currency";


const DishRow = ({
    id, name, short_description, image, price
}) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <>
        <TouchableOpacity className="bg-white border p-4 border-gray-200" onPress={() => setIsPressed(!isPressed)}>
            <View className="flex-row">
                <View className="flex-1">
                    {/* Dish title, narration,price  */}
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400 mt-2 pb-2">{short_description}</Text>
                    <Text className=" text-lg pb-2">{formatCurrency({amount: price, code: "EUR"})} </Text>
                </View>
                <View>
                {/* Dish image */}
                <Image source={{uri: urlFor(image).url()}} className="w-20 h-20 bg-gray-300 p-4"/>
                </View>
            </View>
        </TouchableOpacity>

        {
            isPressed && 
                (
                    <View className="bg-white">
                    <TouchableOpacity className="flex-row space-x-2 items-center pb-3 pl-3">
                    {/* Increment or decrement */}
                        <TouchableOpacity><MinusCircleIcon size={30} color="#00CCBB" /></TouchableOpacity>
                        <Text>3</Text>
                        <TouchableOpacity><PlusCircleIcon size={30} color="#00CCBB" /></TouchableOpacity>
                    </TouchableOpacity>
                </View>
                )
        }
        </>
    )
}

export default DishRow