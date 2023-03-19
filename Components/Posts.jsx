import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Comment, Dots, Heart, Message, Save } from "../Icons"
import FitImage from "./FitImage"
import ReadMore from '@fawazahmed/react-native-read-more';


function Posts({ item}) {
    return (
        <View key={item.id}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image style={styles.avatar} source={{ uri: item.user.avatar }} />
                    <Text style={styles.title}>{item.user.name}</Text>
                </View>
                <Text><Dots /></Text>
            </View>
            <FitImage src={item.image} />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftactions}>
                        <TouchableOpacity style={styles.action}><Heart /></TouchableOpacity>
                        <TouchableOpacity style={styles.action}><Comment /></TouchableOpacity>
                        <TouchableOpacity style={styles.action}><Message /></TouchableOpacity>
                    </View>
                    <TouchableOpacity><Save /></TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.likes}>{item.likes} beğenme</Text>
                </View>
                <ReadMore numberOfLines={2} seeMoreStyle={{ color: "#999" }} seeMoreText="devamı" expandOnly={true} >
                    <Text style={styles.user}>{item.user.name}</Text>
                    {"  "}
                    {item.description}
                </ReadMore>
                <View>
                    <Text style={styles.date}>{item.date} gün önce</Text>
                </View>
            </View>

        </View>
    )
}

export default Posts

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 49,
        paddingHorizontal: 15,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10
    },
    username: {
        flexDirection: "row",
        alignItems: "center",

    },
    title: {
        fontSize: 16,
        fontWeight: "600",

    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    leftactions: {
        flexDirection: "row",
        alignItems: "center",
    },
    action: {
        marginRight: 12,
    },
    content: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    likes: {
        fontWeight: "bold"
    },
    user: {
        fontWeight: "600"
    },
    date: {
        fontSize: 12,
        opacity: .7
    }
})