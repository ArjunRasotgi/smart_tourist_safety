// File: app/(protected)/incident-reporting.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function IncidentReporting() {
  const [incidentType, setIncidentType] = useState('');
  const incidentTypes = ['Medical', 'Lost/Harassed', 'Accident', 'Theft', 'Other'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Manual Report</Text>
        <Text style={styles.label}>Select Incident Type:</Text>
        <View style={styles.typeContainer}>
          {incidentTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.typeButton, incidentType === type && styles.typeButtonSelected]}
              onPress={() => setIncidentType(type)}
            >
              <Text style={[styles.typeButtonText, incidentType === type && styles.typeButtonTextSelected]}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Description:</Text>
        <TextInput style={styles.textArea} placeholder="Describe the incident..." multiline />
        <Text style={styles.label}>Media (Optional):</Text>
        <TouchableOpacity style={styles.mediaButton}>
          <Text style={styles.mediaButtonText}>Add Photo/Video</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => Alert.alert('Report Submitted')}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  label: { fontWeight: 'bold', marginVertical: 10, color: '#333' },
  typeContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  typeButton: { backgroundColor: '#e0e0e0', paddingVertical: 10, paddingHorizontal: 15, margin: 5, borderRadius: 20 },
  typeButtonSelected: { backgroundColor: '#2196F3' },
  typeButtonText: { color: '#333' },
  typeButtonTextSelected: { color: 'white' },
  textArea: { width: '100%', borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, minHeight: 100, textAlignVertical: 'top' },
  mediaButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
  mediaButtonText: { color: 'white', fontWeight: 'bold' },
  submitButton: { backgroundColor: '#F44336', padding: 15, borderRadius: 5, alignItems: 'center' },
  submitButtonText: { color: 'white', fontWeight: 'bold' },
});