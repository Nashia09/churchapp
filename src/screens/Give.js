import { View, Text } from 'react-native'
import React from 'react'
import GiveCards from '../../components/GiveCards'

export default function Give() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GiveCards />
    </View>
  )
}