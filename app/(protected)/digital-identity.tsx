// File: app/(protected)/digital-identity.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

// Simple component for a detail row
const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

export default function DigitalIdentity() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Verifiable Credential</Text>
        <View style={styles.qrPlaceholder}>
          <Text style={styles.qrPlaceholderText}>QR Code Placeholder</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Generating QR Code...')}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Credential Details</Text>
        <DetailRow label="Name:" value="John Smith" />
        <DetailRow label="Nationality:" value="American" />
        <DetailRow label="Issued By:" value="Tourism Department" />
        <DetailRow label="Issued Date:" value="2025-09-01" />
        <DetailRow label="Expiry Date:" value="2025-12-31" />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Verified by Tourism Dept</Text>
          <View style={styles.statusIndicator} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  qrPlaceholder: {
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  qrPlaceholderText: {
    color: '#666',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  detailValue: {
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusText: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statusIndicator: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#4CAF50',
  },
});