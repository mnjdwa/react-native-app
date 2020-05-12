import React from 'react'
import { View, Text } from 'react-native'
import { Astroid, Storetype } from '../types/types'
import { connect } from 'react-redux'
import styles from '../styles/globals'

type Props = {
  astroid: Astroid
}
const AstroidView = ({astroid}: Props) => {
  return(
    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Text style={styles.lablel}>Name</Text>
        <Text style={styles.details}>: {astroid.name}</Text>
      </View>
      <View style={styles.cardSection}>
      <Text style={styles.lablel}>Astroid nasa jpl url</Text>
      <Text style={styles.details}>: {astroid.nasa_jpl_url}</Text>
      </View>
      <View style={styles.cardSection}>
      <Text style={styles.lablel}>Astroid is potentially hazardous Asteroid</Text>
      <Text style={styles.details}>: {astroid.is_potentially_hazardous_asteroid.toString()}</Text>
      </View>
    </View>
  )
}
const mapStateToProps = (state: Storetype) => ({
  astroid: state.astroidState.astroid
})

export default connect(mapStateToProps)(AstroidView)