import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import SerachBox from '../Components/SearchBox'
import SearchContent from '../Components/SearchContent'
import Ionicons from '@expo/vector-icons/Ionicons';

function Search() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 12 }}>
        <SerachBox />
      </View>
      <SearchContent />
      <TouchableOpacity style={styles.Refresh}>
        <Ionicons name="refresh" size={32} color="#000" />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Refresh:{
    margin:25,
    justifyContent:"center",
    alignItems:"center"
  }
})