import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

export default function App() {
    return (
        // <View className=" flex-1 items-center justify-center">
        //     <Text className="text-4xl font-bold">Fitness</Text>
        //     <StatusBar style='auto' />
        //     <Link href="/home" className='text-2xl text-blue-600'>
        //         Log In!
        //     </Link>
        // </View>
        <SafeAreaView className=" bg-blue-950 h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="flex-1 items-center justify-center">
                    <Text className="text-3xl font-bold text-white">Fitness</Text>
                    <StatusBar style='auto' />
                    <TouchableOpacity className="bg-green-100 rounded-md  justify-center items-center">
                        <Link href="/home" className='text-lg text-blue-600 font-semibold'>
                            Log In!
                        </Link>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    )
}

