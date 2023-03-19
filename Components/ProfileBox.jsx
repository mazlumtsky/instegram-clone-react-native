import React from 'react'
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { SearchBoxIcon, SearchBoxIconFilled } from '../Icons'

function ProfileBox() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.userProfileData}>
                    <Image style={styles.profile}
                        source={{ uri: "https://pbs.twimg.com/profile_images/1616714788561633283/qcrX2F9X_400x400.jpg" }} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.userNumber}>10</Text>
                    <Text>Gönderi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userProfileData}>
                    <Text style={styles.userNumber}>250</Text>
                    <Text>Takipçi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userProfileData}>
                    <Text style={styles.userNumber}>251</Text>
                    <Text>Takip</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "500" }}>Mazlum</Text>
                <Text>İstanbul</Text>
                <Text>KSÜ</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity><Text style={[styles.buttons, { marginRight: 8 }]}>Profili Düzenle</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.buttons}>Profili paylaş</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{ marginTop: 15 }} > <SearchBoxIconFilled size={32} /></Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProfileBox

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        alignItems: "center",

    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 90,
        borderWidth: 2,

    },
    userProfileData: {
        justifyContent: "center",
        alignItems: "center"
    },
    userNumber: {
        fontWeight: "bold",
        fontSize: 17,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    buttons: {
        width: 170,
        height: 32,
        backgroundColor: "#efefef",
        textAlign: "center",
        lineHeight: 27,
        borderRadius: 6,
        fontWeight: "600",
        marginTop: 15,

    }
})