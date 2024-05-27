import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react'
import { createNativeWind, NativeWindStyleSheet as StyleSheet } from 'nativewind';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
    return (
        <ScrollView className="flex-1 bg-white p-4">
            <View className="flex-row justify-between items-center mt-4">
                <Text className="text-xl font-bold">Good Morning, Mary</Text>
                <Image
                    source={{ uri: 'https://plus.unsplash.com/premium_photo-1708110770188-3e4216b93119?q=80&w=3093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dplaceholder.com/150' }}
                    className="w-12 h-12 rounded-full"
                />
            </View>

            <Text className="text-3xl font-bold mt-4">Week plan</Text>

            <View className="flex-row mt-4 items-center">
                <Text className="text-base">Morning workout</Text>
                <View className="flex-row ml-4">
                    <FontAwesome name="globe" size={24} color="black" className="mx-2" />
                    <FontAwesome name="heart" size={24} color="black" className="mx-2" />
                </View>
            </View>

            <Text className="text-xl font-bold mt-6">Recommended today</Text>

            <View className="flex-row flex-wrap justify-between mt-4">
                <WorkoutCard
                    image="https://images.unsplash.com/photo-1609899464726-209befaac5bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                    duration="30 min"
                    title="Upper body"
                    type="Exercise"
                    bgColor="bg-purple-500"
                />
                <WorkoutCard
                    image="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                    duration="65 min"
                    title="With rope"
                    type="Exercise"
                    bgColor="bg-green-500"
                />
                <WorkoutCard
                    image="https://plus.unsplash.com/premium_photo-1672784163451-1d826800c66e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                    duration="54 min"
                    title="Stretching"
                    type="Yoga"
                    bgColor="bg-blue-500"
                />
                <WorkoutCard
                    image="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bSUyMGFlcm9keW5hbWljc3xlbnwwfHwwfHx8MA%3D%3D"
                    duration="45 min"
                    title="Aerodynamics"
                    type="Fitness"
                    bgColor="bg-red-500"
                />
            </View>
        </ScrollView>
    )
}

const WorkoutCard = ({ image, duration, title, type, bgColor }) => (
    <View className={`w-1/2 p-2`}>
        <View className={`${bgColor} p-4 rounded-lg`}>
            <Image
                source={{ uri: image }}
                className="w-full h-24 rounded-lg"
            />
            <Text className="text-white mt-2">{duration}</Text>
            <Text className="text-white font-bold">{title}</Text>
            <Text className="text-white">{type}</Text>
        </View>
    </View>
);

export default Home