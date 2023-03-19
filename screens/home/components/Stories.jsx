import React from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import Data from '../../../data/Data'
import { LinearGradient } from 'expo-linear-gradient';
function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {Data.map((story) => (
                    <View key={story.id} style={styles.story}>
                        <LinearGradient
                            style={styles.cover}
                            colors={['#C913B9', '#F9373F', '#FECD00',]}>
                            <Image style={styles.avatar} source={{ uri: story.user.avatar }} />
                        </LinearGradient>
                        <Text style={styles.username} numberOfLines={1}>{story.user.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    )
}

export default Stories

const styles = StyleSheet.create({
    stories: {
        paddingVertical: 5,
        borderBottomWidth: .5,
        borderBottomColor: "#dadada",
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
        borderWidth: 1,
        borderRadius: 60
    },
    username: {
        fontSize: 12
    }
})