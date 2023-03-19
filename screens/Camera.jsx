import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function Cameraa() {
  const [type, setType] = useState(CameraType.back);



  return (
    <View>
      <Camera style={{ height: "100%" }} type={type}>
        <View >
          <TouchableOpacity >
            <Text >Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

export default Cameraa