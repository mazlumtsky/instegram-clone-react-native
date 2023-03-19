
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import { Logo, Heart, Message, } from '../../../Icons'
import { Link, NavigationContainer, useLinkTo } from '@react-navigation/native';
import { Button } from '@react-native-material/core';



function HeartScreen() {
    return (
        <View>
            <Text>buarası Heart</Text>
        </View>
    )
}


function Header({ navigation }) {
    const linkTo = useLinkTo();
    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.actions}>
                <TouchableOpacity activeOpacity=".6" >
                    <Heart style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity=".6" >
                    <Message style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 44,
        width: 410,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        paddingBottom: 2,
    },
    actions: {
        flexDirection: "row"
    },
    button: {
        marginRight: 20,

    }
})