import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Square = ({ text, bgColor }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default function Project6() {
  const data = Array.from({ length: 15 }, (_, i) => `Square ${i + 1}`);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <Square key={index} text={item} bgColor="#7ce0f9" />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  box: {
    width: 120,
    height: 120,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
