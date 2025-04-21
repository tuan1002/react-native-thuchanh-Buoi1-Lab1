import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ text, bgColor }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default function Project5() {
  return (
    <View style={styles.container}>
      <Square text="Square 1" bgColor="#7ce0f9" />
      <Square text="Square 2" bgColor="#4dc2c2" />
      <Square text="Square 3" bgColor="#ff637c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
