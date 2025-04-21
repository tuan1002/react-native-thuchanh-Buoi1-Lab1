import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function Project7() {
  const [name, setName] = useState('');

  const handlePress = () => {
    if (name.trim()) {
      alert(`Hello, ${name}!`);
      setName('');
    } else {
      alert('Bạn chưa nhập tên');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập tên bạn:</Text>
      <TextInput
        style={styles.input}
        placeholder="What is your name ?"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#888"
      />
      <Button title="Say Hello" onPress={handlePress} color="#2196F3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 50,
  },
});
