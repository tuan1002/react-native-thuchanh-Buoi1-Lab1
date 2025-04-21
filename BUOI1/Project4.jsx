import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function Project4() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Số lần nhấn: {count}</Text>
      <Button title="Nhấn" onPress={() => setCount(count + 1)} color="#2196F3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
});
