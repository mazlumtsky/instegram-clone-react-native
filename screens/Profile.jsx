import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProfileBox from '../Components/ProfileBox';
import ProfilePosts from '../Components/ProfilePosts';
import ProfileStrories from '../Components/ProfileStrories';
import { Plas, ThreePoints } from '../Icons';

function Profile() {
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <Text style={Styles.username}>mazlumtsky</Text>
        <View style={Styles.col}>
          <Text style={{ marginRight: 20 }}>
            <Plas fill="#000" size={25} />
          </Text>
          <Text>
            <ThreePoints />
          </Text>
        </View>
      </View>
      <View>
        <ProfileBox />
      </View>
      <View>
        <ProfileStrories />
      </View>
      <ProfilePosts />
    </View>
  )
}

export default Profile

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 5,

  },
  username: {
    fontSize: 20,
    fontWeight: "bold",

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  col: {
    flexDirection: "row",
    paddingVertical: 5
  }
});