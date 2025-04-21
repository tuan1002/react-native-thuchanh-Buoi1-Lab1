import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function Project3() {
  const handleSayHello = () => {
    alert('Hello!');
  };

  const handleSayGoodbye = () => {
    alert('Goodbye!');
  };

  return (
    <View style={styles.container}>
      <Button
        text="Say Hello"
        onPress={handleSayHello}
        buttonStyle={styles.helloButton}
      />
      <Button
        text="Say Goodbye"
        onPress={handleSayGoodbye}
        buttonStyle={styles.goodbyeButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  helloButton: {
    backgroundColor: '#4CAF50', // Xanh lá cho Say Hello
  },
  goodbyeButton: {
    backgroundColor: '#F44336', // Đỏ cho Say Goodbye
  },
});
