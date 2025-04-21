import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nguyễn Bá Tuân </Text>
      <Text style={styles.text}>2124802010170</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {[...Array(8)].map((_, index) => (
          <Button
            key={index}
            title={`Bài ${index + 1}`}
            onPress={() => navigation.navigate(`Project${index + 1}`)}
            color="#2196F3"
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center', // Căn giữa văn bản
    marginVertical: 10,  // Thêm một chút khoảng cách giữa các dòng
  },
});
