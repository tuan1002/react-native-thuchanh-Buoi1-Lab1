import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function Project2() {
  return (
    <View style={styles.container}>
      <Button
        title="Nhấn vào đây"
        color="#4CAF50"
        onPress={() => Alert.alert('Hello')}
      />
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
});
