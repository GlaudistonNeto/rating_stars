import React from 'react';
import { StyleSheet, View } from 'react-native';
import Rating from './Rating';

export default function App() {
  return (
    <View style={styles.container}>
      <Rating  rating={5} numStars={5} starColor='#cfd318' />
    </View>

    // Not obligate to have numStars or starColor because it cab be the value from the class
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
