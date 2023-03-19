import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProfilePost from '../data/ProfilePost'
function Post() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                {ProfilePost.map((item, index) => (
                    <TouchableOpacity>
                        <Image style={styles.avatar} source={{ uri: item.url }} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default Post
const styles = StyleSheet.create({
    avatar: {
        width: 124,
        height: 150,
        marginTop: 5
    },
    content: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
})