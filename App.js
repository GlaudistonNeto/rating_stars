import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const numStars = 5;

export default class App extends React.Component {
  state = {
    rating: 1,
    animation: new Animated.Value(1),
  };

  
  rate = star => {
    this.setState({ rating: star })
  }
  
  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      this.state.animation.setValue(1);
    })
  }
  render() {
    let stars = [];

    const animateScale = this.state.animation.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 1.4, 1]
    });

    const animateOpacity = this.state.animation.interpolate({
      inputRange: [1, 1.2, 2],
      outputRange: [1, 0.5, 1]
    })

    const animationStyle = {
      transform: [{ scale: animateScale }]
    }

    for (let x = 1; x <= numStars; x++) {
      stars.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x), this.animate();
          }}
        >
          <Animated.View style={animationStyle}>
            <Star filled={x <= this.state.rating ? true : false} />
          </Animated.View>
        </TouchableWithoutFeedback>
      )
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {stars}
        </View>
      </View>
    );
  }
}

class Star extends React.Component {
  render() {
    return (
      <FontAwesome
      style={{ marginHorizontal: 6 }}
        name={this.props.filled === true ? 'star' : 'star-o'}
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
