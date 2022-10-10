import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import {
    ArrowRightIcon
} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

// import sanityClient from '../sanity';

// const [restuarants, setRestuarants] = useState([]);


const FeaturedRow = ({id, title, description, featuredCategory}) => {
    // useEffect(() => {
    //     sanityClient.fetch(`
    //     *[_type == "featured" && _id == $id] {
    //         ...,
    //         restaurants[] -> {
    //           ...,
    //           dishes[] ->, 
    //             type -> {
    //               name
    //             }
    //         }
    //       }[0]
    //     `, {id}).then(data => setRestuarants(data?.restuarants))

    // }, [])

    // console.log('Restaurants', restaurants);
    
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
            {/* {
                restuarants?.map(restaurant => (
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
                        long={restaurant.lat}
                        lat={restaurant.long}
                    />
                ))
            } */}
            </ScrollView>
    </View>
  )
}

export default FeaturedRow