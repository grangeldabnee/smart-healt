import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { menuTimes } from '../db/db';

export default function TablaCronometros() {
  const datos = menuTimes;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Cronómetros registrados</Text>
      <View style={styles.header}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Tiempo (s)</Text>
      </View>
      <FlatList
        data={datos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.time} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 6,
    marginBottom: 6,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  cell: {
    flex: 1,
    fontSize: 15,
  },
});