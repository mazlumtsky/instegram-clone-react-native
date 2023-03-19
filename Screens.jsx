import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/Home';
import ProfileScreen from './screens/Profile';
import ReelScreen from './screens/Reel';
import SerachScreen from './screens/Search';
import CameraScreen from './screens/Camera';

import { Home, HomeFilled, Plas, Reels, ReelsFilled, Search, SearchFilled } from './Icons';
import { Image, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

function Screens() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: "#262626",
            tabBarInactiveTintColor: "#000",


        }} >
            <Tab.Screen name="home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'home',
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <HomeFilled fill={color} size={25} />
                        return <Home fill={color} size={25} />
                    },
                }} />

            <Tab.Screen name="search"
                component={SerachScreen}
                options={{
                    tabBarLabel: 'search',
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <Search fill={color} size={25} />
                        return <SearchFilled fill={color} size={25} />
                    },
                }} />
            <Tab.Screen name="plas"
                component={CameraScreen}
                options={{
                    tabBarLabel: 'plas',
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <Plas fill={color} size={25} />
                        return <Plas fill={color} size={25} />
                    },
                }}
            />
            <Tab.Screen name="reel"
                component={ReelScreen}
                options={{
                    tabBarLabel: 'reel',
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <Reels fill={color} size={25} />
                        return <ReelsFilled fill={color} size={25} />
                    },
                }} />
            <Tab.Screen name="profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'profile',
                    tabBarIcon: ({ focused }) => {
                        return <Image style={[styles.avatar, { borderColor: focused ? "#000" : "#fff" }]} source={{ uri: "https://pbs.twimg.com/profile_images/1616714788561633283/qcrX2F9X_400x400.jpg" }} />

                    },
                }} />
        </Tab.Navigator>
    )
}

export default Screens
const styles = StyleSheet.create({
    avatar: {
        width: 26,
        height: 26,
        borderRadius: 21,
        borderWidth: 2,
    }
})