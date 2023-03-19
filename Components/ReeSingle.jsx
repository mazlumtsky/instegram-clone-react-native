import React, { useRef } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import Video from "react-native-video"



function ReeSingle() {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const videoRef = useRef(null)
    const onBuffer = buffer => {
        console.log("buffer", buffer);
    }
    const onError = error => {
        console.log("error", error);
    }
    return (
        <View style={{ width: windowWidth, height: windowHeight }}>
            <Text style={{ color: "#fff" }}>mazlum</Text>
            <TouchableOpacity>
                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="cover"
                    paused={false}
                    source={video}
                    style={{ width: "100%", height: "100%" }}

                />
            </TouchableOpacity>
        </View>
    )
}

export default ReeSingle