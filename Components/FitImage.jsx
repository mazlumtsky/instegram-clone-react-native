
import { Dimensions, Image, View } from 'react-native'

function FitImage({ src }) {
    // 1077 * 720
    const width = Dimensions.get("window").width
    const radio = 1077 / width
    const height = 720 / radio

    return (
        <View >
            <Image style={{ height, width }} source={{ uri: src }} />
        </View>
    )
}

export default FitImage

