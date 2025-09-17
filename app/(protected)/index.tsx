import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function HomeDashboard() {
  const [riskScore] = useState(20);

  const getStatusInfo = () => {
    if (riskScore < 30) return { text: 'Safe', color: '#4CAF50' };
    if (riskScore < 70) return { text: 'Caution', color: '#FFC107' };
    return { text: 'Alert', color: '#F44336' };
  };

  const statusInfo = getStatusInfo();

  const menuItems = [
    { href: "/digital-identity", label: "Identity" },
    { href: "/incident-reporting", label: "Report" },
    { href: "/notifications", label: "Alerts" },
    { href: "/settings", label: "Settings" },
    { href: "/itinerary-scanner", label: "Itinerary" },
    { href: "/digital-safe", label: "Digital Safe" },
    { href: "/safety-ratings", label: "Ratings" },
    { href: "/guide-taxi-detector", label: "Detector" },
  ] as const;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusText}>Status: {statusInfo.text}</Text>
          <View style={[styles.statusIndicator, { backgroundColor: statusInfo.color }]} />
        </View>

        {/* Map Area */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapPlaceholderText}>Interactive Map Area</Text>
          <TouchableOpacity style={styles.sosButton}>
            <Text style={styles.sosButtonText}>SOS</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Button Grid */}
        <ScrollView contentContainerStyle={styles.buttonContainer}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <TouchableOpacity style={styles.menuButton}>
                <Text style={styles.menuButtonText}>{item.label}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1 },
  statusBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
  statusText: { fontSize: 18, fontWeight: 'bold' },
  statusIndicator: { width: 20, height: 20, borderRadius: 10 },
  mapContainer: { flex: 1, backgroundColor: '#e0e0e0', alignItems: 'center', justifyContent: 'center', position: 'relative' },
  mapPlaceholderText: { fontSize: 20, color: '#666', fontWeight: 'bold' },
  sosButton: { position: 'absolute', bottom: 20, right: 20, width: 70, height: 70, borderRadius: 35, backgroundColor: '#F44336', alignItems: 'center', justifyContent: 'center', elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 },
  sosButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingVertical: 10, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#eee' },
  menuButton: { width: '22%', aspectRatio: 1, backgroundColor: '#2196F3', borderRadius: 10, alignItems: 'center', justifyContent: 'center', margin: '1.5%' },
  menuButtonText: { color: 'white', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
});