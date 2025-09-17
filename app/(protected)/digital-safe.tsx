// File: app/(protected)/digital-safe.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const DocumentCard = ({ name, uploaded }: { name: string; uploaded: boolean }) => (
  <View style={styles.documentCard}>
    <View>
      <Text style={styles.documentName}>{name}</Text>
      <Text style={styles.documentStatus}>{uploaded ? 'Uploaded' : 'Not Uploaded'}</Text>
    </View>
    <TouchableOpacity style={[styles.uploadButton, !uploaded && styles.notUploadedButton]} onPress={() => Alert.alert('Upload Document')}>
      <Text style={styles.uploadButtonText}>{uploaded ? 'View' : 'Upload'}</Text>
    </TouchableOpacity>
  </View>
);

export default function DigitalSafe() {
  const [documents] = useState([
    { id: '1', name: 'Passport', uploaded: true },
    { id: '2', name: 'Visa', uploaded: true },
    { id: '3', name: 'Travel Insurance', uploaded: false },
    { id: '4', name: 'Hotel Booking', uploaded: false },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>My Documents</Text>
        {documents.map((doc) => (
          <DocumentCard key={doc.id} name={doc.name} uploaded={doc.uploaded} />
        ))}
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Actions</Text>
        <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Documents shared with Embassy')}>
          <Text style={styles.actionButtonText}>Share with Embassy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Documents sent to email')}>
          <Text style={styles.actionButtonText}>Send to My Email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  documentCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  documentName: { fontWeight: 'bold' },
  documentStatus: { fontSize: 12, color: '#666' },
  uploadButton: { backgroundColor: '#2196F3', padding: 8, borderRadius: 5 },
  notUploadedButton: { backgroundColor: '#FFC107' },
  uploadButtonText: { color: 'white', fontWeight: 'bold' },
  actionButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center', marginVertical: 5 },
  actionButtonText: { color: 'white', fontWeight: 'bold' },
});