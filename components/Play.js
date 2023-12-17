import React from 'react'
import { View, Text, Image,  StyleSheet, TouchableOpacity } from 'react-native'
// import Slider from '@react-native-community/slider'
const Play = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.albumArt}
          source={{ uri: 'https://www.bootdey.com/image/280x280/EE82EE/000000' }}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.startTime}>0:00</Text>
        {/* <Slider style={styles.slider} /> */}
        <Text style={styles.endTime}>4:20</Text>
      </View>
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>Song Title</Text>
        <Text style={styles.songArtist}>Song Artist</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity>
          <Image
            style={styles.previous}
            source={{ uri: 'https://img.icons8.com/color/70/000000/previous.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.playPause}
            source={{ uri: 'https://img.icons8.com/color/70/000000/pause.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.next}
            source={{ uri: 'https://img.icons8.com/color/70/000000/next.png' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#282828',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  albumArt: {
    width: '100%',
    height: '100%',
  },
  sliderContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  startTime: {
    fontSize: 18,
    color: 'white',
  },
  slider: {
    width: '80%',
  },
  endTime: {
    fontSize: 18,
    color: 'white',
  },
  songInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 18,
    color: 'gray',
  },
  albumInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  albumTitle: {
    fontSize: 18,
    color: 'white',
  },
  albumArtist: {
    fontSize: 14,
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 40,
  },
  previous: {
    width: 36,
    height: 36,
  },
  playPause: {
    width: 48,
    height: 48,
  },
  next: {
    width: 36,
    height: 36,
  },
})

export default Play
