import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import MainHeader from '../../components/MainHeader'
import CarouselCards from '../../components/CarouselCards'
import MessagesCards from '../../components/MessagesCards'

export default function Home() {
  return (
    <View style={styles.container}>
    {/* <MainHeader title="Church App" /> */}

    <CarouselCards />
    <MessagesCards />
  </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#000"
    }
})