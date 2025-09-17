// File: app/(protected)/safety-ratings.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function SafetyRatings() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    Alert.alert('Search Results', 'Safety rating for "Museum District" is high. Few incidents reported recently.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Safety Ratings</Text>
        <Text style={styles.description}>Check safety ratings for specific areas or locations based on anonymous reports and official data.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a location (e.g., Downtown, Park St.)"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  description: { color: '#666', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, marginBottom: 10 },
  searchButton: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5, alignItems: 'center' },
  searchButtonText: { color: 'white', fontWeight: 'bold' },
});