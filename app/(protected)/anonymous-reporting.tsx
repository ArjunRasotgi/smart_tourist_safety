// File: app/(protected)/anonymous-reporting.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function AnonymousReporting() {
    const [incidentType, setIncidentType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const incidentTypes = ['Scam', 'Theft', 'Harassment', 'Unsafe Area', 'Other'];

    const handleSubmit = () => {
        if (!incidentType) {
            Alert.alert('Please select an incident type');
            return;
        }
        if (!description.trim()) {
            Alert.alert('Please provide a description');
            return;
        }
        Alert.alert('Report Submitted', 'Thank you for your anonymous report. It will help improve safety analytics for other tourists.');
        setIncidentType('');
        setDescription('');
        setLocation('');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.privacyNotice}>
                <Text style={styles.privacyNoticeText}>🔒 Your identity will not be recorded. Only incident details will be used for safety analytics.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Report Type</Text>
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
                <Text style={styles.sectionTitle}>Details</Text>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Describe the incident..."
                    multiline
                    value={description}
                    onChangeText={setDescription}
                />
                <Text style={styles.label}>Location (optional):</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., street name, landmark"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit Anonymous Report</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
    privacyNotice: { backgroundColor: '#e3f2fd', padding: 15, borderRadius: 10, marginBottom: 15 },
    privacyNoticeText: { textAlign: 'center', color: '#1976d2', fontWeight: 'bold' },
    card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    label: { fontWeight: 'bold', marginVertical: 10, color: '#333' },
    typeContainer: { flexDirection: 'row', flexWrap: 'wrap' },
    typeButton: { backgroundColor: '#e0e0e0', paddingVertical: 10, paddingHorizontal: 15, margin: 5, borderRadius: 20 },
    typeButtonSelected: { backgroundColor: '#2196F3' },
    typeButtonText: { color: '#333' },
    typeButtonTextSelected: { color: 'white' },
    textArea: { width: '100%', borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, minHeight: 100, textAlignVertical: 'top' },
    input: { width: '100%', borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10 },
    submitButton: { backgroundColor: '#F44336', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
    submitButtonText: { color: 'white', fontWeight: 'bold' },
});