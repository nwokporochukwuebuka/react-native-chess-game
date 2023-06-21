import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Row from '../components/Row';


const Background = () => {
  return (
    <View style={styles.container}>
      {
        new Array(8).fill(0).map((_, row) => {
          return (<Row key={row} row={row} />)
        })
      }
    </View>
  )
}

export default Background

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})