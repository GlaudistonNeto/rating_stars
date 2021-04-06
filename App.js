import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Star />
      </View>
    );
  }
}

class Star extends React.Component {
  render() {
    return (
      <FontAwesome
      style={{ marginHorizontal: 6 }}
        name='star'
        size={32}
        color='red'
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
