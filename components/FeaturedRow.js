import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import {
    ArrowRightIcon
} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

import sanityClient from '../sanity';

const FeaturedRow = ({id, title, description, featuredCategory}) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "featured" && _id == $id] {
                ...,
                restaurants[] -> {
                ...,
                dishes[] ->, 
                    type -> {
                    name
                    }
                }
            }[0]`,{id}).then(data => setRestaurants(data?.restaurants))
    }, [])

    console.log(restaurants)

    return (
    <View>
        <View className="mt-4 flex-row justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>  
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle = {{
                    paddingHorizontal: 15
                }}
                className="pt-4"
            >
            {/* RestaurantCards */}
            {/* <RestaurantCard 
                id ={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                short_description="Fresh sushi, daily." 
                rating={4.5} 
                genre="Japanese" 
                address="123 Main Street" 
                dishes={[]} 
                long={20} 
                lat={0}
            />
            <RestaurantCard 
                id ={2}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                short_description="Fresh sushi, daily." 
                rating={4.5} 
                genre="Japanese" 
                address="123 Main Street" 
                dishes={[]} 
                long={20} 
                lat={0}
            />
            <RestaurantCard 
                id ={3}
                imgUrl="https://links.papareact.com/gn7"
                title="Yo! Sushi"
                short_description="Fresh sushi, daily." 
                rating={4.5} 
                genre="Japanese" 
                address="123 Main Street" 
                dishes={[]} 
                long={20} 
                lat={0}
            /> */}

            {
                restaurants?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant._id} 
                        id ={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        short_description={restaurant.short_description}
                        rating={restaurant.rating} 
                        genre={restaurant.type?.name} 
                        address={restaurant.address}
                        dishes={restaurant.dishes}
                        long={restaurant.long} 
                        lat={restaurant.lat}
                    />  
                ))
            }
            </ScrollView>
    </View>
    )
}

export default FeaturedRow