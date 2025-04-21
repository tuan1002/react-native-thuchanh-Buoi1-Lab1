import React from 'react';
import { SectionList, Text, View, StyleSheet, SafeAreaView } from 'react-native';

const PEOPLE = [
  { name: { first: "Maeva", last: "Scott" } },
  { name: { first: "Maëlle", last: "Henry" } },
  { name: { first: "Mohamoud", last: "Faaij" } },
];

const groupPeopleByLastName = (data) => {
  const grouped = data.reduce((acc, item) => {
    const group = item.name.last[0].toUpperCase();
    if (!acc[group]) {
      acc[group] = { title: group, data: [] };
    }
    acc[group].data.push(item);
    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => (a.title > b.title ? 1 : -1));
};

export default function Project8() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item, index) => item.name.first + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name.first} {item.name.last}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    backgroundColor: '#ccc',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#999',
  },
});
