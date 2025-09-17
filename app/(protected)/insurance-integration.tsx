import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Active': return '#4CAF50';
      case 'Processing': return '#FFC107';
      default: return '#2196F3';
    }
  };
  return (
    <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
      <Text style={styles.statusBadgeText}>{status}</Text>
    </View>
  );
};

export default function InsuranceIntegration() {
  const [activePolicy] = useState({ provider: 'Global Travel Insurance Co.', coverage: 'Medical, Theft, Accident', startDate: '2025-09-01', endDate: '2025-12-31', status: 'Active' });
  const [claims] = useState([{ id: '1', type: 'Medical Emergency', status: 'Processing', date: '2025-09-05', amount: '$1,250' }]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.policyHeader}>
          <Text style={styles.sectionTitle}>Active Policy</Text>
          <StatusBadge status={activePolicy.status} />
        </View>
        <Text style={styles.providerText}>{activePolicy.provider}</Text>
        <Text style={styles.coverageText}>Coverage: {activePolicy.coverage}</Text>
        <Text style={styles.dateText}>Valid: {activePolicy.startDate} to {activePolicy.endDate}</Text>
        <View style={styles.policyActions}>
          <TouchableOpacity style={styles.detailsButton} onPress={() => Alert.alert('Policy Details', `Provider: ${activePolicy.provider}`)}>
            <Text style={styles.actionButtonText}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton} onPress={() => Alert.alert('Contacting provider...')}>
            <Text style={styles.actionButtonText}>Contact Provider</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.claimsHeader}>
          <Text style={styles.sectionTitle}>Recent Claims</Text>
          <TouchableOpacity style={styles.newClaimButton} onPress={() => Alert.alert('Filing new claim...')}>
            <Text style={styles.newClaimButtonText}>+ New Claim</Text>
          </TouchableOpacity>
        </View>
        {claims.map((claim) => (
          <View key={claim.id} style={styles.claimCard}>
            <View style={styles.claimHeader}>
              <Text style={styles.claimType}>{claim.type}</Text>
              <StatusBadge status={claim.status} />
            </View>
            <Text style={styles.claimDate}>Filed: {claim.date}</Text>
            <Text style={styles.claimAmount}>Amount: {claim.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
    card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    policyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    statusBadge: { paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15 },
    statusBadgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
    providerText: { fontWeight: 'bold', color: '#2196F3', marginBottom: 5 },
    coverageText: { color: '#666', marginBottom: 5 },
    dateText: { color: '#666', marginBottom: 15 },
    policyActions: { flexDirection: 'row' },
    detailsButton: { flex: 1, backgroundColor: '#2196F3', padding: 10, borderRadius: 5, marginRight: 5, alignItems: 'center' },
    contactButton: { flex: 1, backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, marginLeft: 5, alignItems: 'center' },
    actionButtonText: { color: 'white', fontWeight: 'bold' },
    claimsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    newClaimButton: { backgroundColor: '#F44336', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5 },
    newClaimButtonText: { color: 'white', fontWeight: 'bold' },
    claimCard: { backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15, marginBottom: 10 },
    claimHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    claimType: { fontWeight: 'bold', color: '#333' },
    claimDate: { color: '#666', marginBottom: 5 },
    claimAmount: { fontWeight: 'bold', color: '#2196F3' },
});