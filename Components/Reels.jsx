import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function Reels() {
  const [first, setfirst] = useState()
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <TouchableOpacity onPress={() => setfirst(!first)}>
        <Text style={{
          width: 100,
          height: 40,
          borderColor: "#efefef",
          backgroundColor: first ? "#efefef": "blue",
          color: first ? null : "#fff",
          borderWidth: first ? 1 : 0,
          lineHeight: 38,
          textAlign: "center",
          borderRadius: 8
        }}>{first ? "Takip" : "Takip et"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Reels