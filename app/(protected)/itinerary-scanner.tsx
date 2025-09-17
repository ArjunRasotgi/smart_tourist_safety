// File: app/(protected)/itinerary-scanner.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ItineraryScanner() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Scan Itinerary</Text>
        <Text style={styles.description}>Scan your flight, hotel, or tour booking confirmations to automatically add them to your itinerary.</Text>
        <TouchableOpacity style={styles.scanButton} onPress={() => Alert.alert('Scanning document...')}>
          <Text style={styles.scanButtonText}>Open Scanner</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Upcoming Trips</Text>
        <Text style={styles.noTripsText}>No upcoming trips found.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  description: { color: '#666', marginBottom: 20 },
  scanButton: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5, alignItems: 'center' },
  scanButtonText: { color: 'white', fontWeight: 'bold' },
  noTripsText: { textAlign: 'center', color: '#888', fontStyle: 'italic' },
});