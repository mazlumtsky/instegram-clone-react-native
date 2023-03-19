import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import ProfileData from "../data/ProfileData"
function ProfileStrories() {
    return (
        <ScrollView style={styles.stories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {ProfileData.map((item, index) => (
                    <View key={index} style={styles.story}>
                        <LinearGradient style={styles.cover} colors={['#dadada', "#dadada", "#dadada"]}>
                            <Image style={styles.avatar} source={{ uri: item.url }} />
                        </LinearGradient>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    )
}

export default ProfileStrories

const styles = StyleSheet.create({
    stories: {
        paddingVertical: 5,
        marginTop: 15
    },
    story: {
        width: 67,
        marginHorizontal: 10,
    },
    cover: {
        width: 67,
        height: 67,
        borderRadius: 33.5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5

    },
    avatar: {
        width: 62,
        height: 62,
        borderWidth: .5,
        borderRadius: 60
    },
    username: {
        fontSize: 12
    }
})