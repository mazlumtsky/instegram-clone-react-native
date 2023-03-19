import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchBoxData from '../data/SearchBoxData'

function SearchContent() {

    return (
        <View >
            {SearchBoxData.map((data, i) => (
                <View key={i} >
                    {data.id == 0 ? (
                        <View style={styles.content}>
                            {data.images.map((imagedate, index) => (
                                <TouchableOpacity key={index} style={{ padding: 2 }}>
                                    <Image source={imagedate} style={{ width:130, height: 150 }} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    ) : null
                    }
                </View>
            ))}
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
})