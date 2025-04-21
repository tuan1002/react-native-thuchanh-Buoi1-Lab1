import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Project1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});
