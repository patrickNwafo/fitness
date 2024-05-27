import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const TabsLayout = () => {
    return (
        <>
            <SafeAreaView>

            </SafeAreaView>
            <Tabs>
                <Tabs.Screen name='home'
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={24} />,
                    }} />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome name="bookmark" color={color} size={24} />,
                    }} />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome name="user" color={color} size={24} />,
                    }} />
                <Tabs.Screen
                    name='calendar'
                    options={{
                        title: "Calendar",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome name="calendar" color={color} size={24} />,
                    }} />
            </Tabs>
        </>
    )
}

export default TabsLayout