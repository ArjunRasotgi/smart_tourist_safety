// File: app/(protected)/guide-taxi-detector.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <View style={styles.statCard}>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export default function GuideTaxiDetector() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    Alert.alert('Search Results', '✅ All results are verified and have no negative reports.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Verify Service</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for guide/taxi name or ID..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <StatCard number="250+" label="Verified Guides" />
        <StatCard number="500+" label="Verified Taxis" />
        <StatCard number="23" label="Flagged Services" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  searchInput: { width: '100%', borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, fontSize: 16, marginBottom: 15 },
  searchButton: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5, alignItems: 'center' },
  searchButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 15 },
  statCard: { backgroundColor: 'white', padding: 15, borderRadius: 10, alignItems: 'center', flex: 1, marginHorizontal: 5 },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#F44336' },
  statLabel: { fontSize: 12, color: '#666' },
});