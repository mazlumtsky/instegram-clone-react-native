import React, { useRef, useState } from 'react'

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import ReelsContentData from "../data/ReelsBox"
// import ReeSingle from './ReeSingle';
import Video from "react-native-video"
import { Dimensions, TouchableOpacity, View } from 'react-native';
function ReelsContent() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handelChangeIndexValue = ({ index }) => {
        setCurrentIndex(index)
    }
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

            {ReelsContentData.map((item, index) => (
                <TouchableOpacity>
                   
                </TouchableOpacity>
            ))}


        </View>
    )
}

export default ReelsContent