import React from 'react'
import { StyleSheet, Text, View, ScrollView, RefreshControl, } from 'react-native'
import Header from './components/Header'
import Stories from './components/Stories'
import Post from '../../data/Post'
import Posts from '../../Components/Posts'

function Home() {

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]} contentContainerStyle={styles.scrollView}
>
      <Header />
      <Stories />
      {Post.map((item, key) => (
        <Posts key={key} item={item} />
      ))}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

})