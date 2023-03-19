import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Search, SearchFilled, SearchBoxIcon } from '../Icons'

function SearchBox() {
    return (
        <View style={stles.box}>
            <View style={stles.content}>
                <SearchFilled style={stles.serachIcon} size={18} fill="#000" />
                <TextInput placeholder='Ara' placeholderTextColor="#909090" style={stles.Input} />
            </View>
            <View style={{ paddingRight: 15 }}><SearchBoxIcon size={22} /></View>
        </View>
    )
}

export default SearchBox
const stles = StyleSheet.create({
    box: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    content: {
        justifyContent: 'center',
        alignItems: "center",
        width: "86%",
        paddingVertical: 5,
        flexDirection: "row",
        backgroundColor: "#ebebeb",
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    serachIcon: {
        paddingLeft: 25
    },
    Input: {
        width: "94%",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 15,
        fontSize: 16

    }
})