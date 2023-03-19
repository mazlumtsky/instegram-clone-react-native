import React from 'react'
import { Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Post from '../Components/Post';
import Reels from './Reels';
import Search from './Search';
import { Home, Profile, ReelsFilled, Shipment } from '../Icons';

const Tab = createMaterialTopTabNavigator();
function ProfilePosts() {

    return (
        <Tab.Navigator style={{ marginTop: 20 }} screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#000",
            tabBarInactiveTintColor: "#c4c4c4",
            tabBarIndicatorStyle: {
                backgroundColor: "#000",
                height: 1.3
            }
        }}>
            <Tab.Screen name="Post" component={Post}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <Shipment fill={color} size={25} />
                        return <Shipment fill={color} size={25} />
                    },
                }} />
            <Tab.Screen name="Reels" component={Reels}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ReelsFilled fill={color} size={25} />
                        return <ReelsFilled fill={color} size={25} />
                    },
                }} />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <Profile fill={color} size={25} />
                        return <Profile fill={color} size={25} />
                    },
                }} />
        </Tab.Navigator>
    )
}

export default ProfilePosts

