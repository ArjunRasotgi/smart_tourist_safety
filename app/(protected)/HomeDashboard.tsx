import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeDashboard() {
  const [riskScore] = useState(20); // Example risk score (0-100)

  const getStatusInfo = () => {
    if (riskScore < 30) return { text: 'Safe', color: '#4CAF50' };
    if (riskScore < 70) return { text: 'Caution', color: '#FFC107' };
    return { text: 'Alert', color: '#F44336' };
  };

  const statusInfo = getStatusInfo();

  // Define the menu buttons
  const menuItems = [
    { href: '/DigitalIdentity', label: 'Identity' },
    { href: '/IncidentReporting', label: 'Report' },
    { href: '/Notifications', label: 'Alerts' },
    { href: '/Settings', label: 'Settings' },
    { href: '/ItineraryScanner', label: 'Itinerary' },
    { href: '/DigitalSafe', label: 'Digital Safe' },
    { href: '/SafetyRatings', label: 'Safety Ratings' },
    { href: '/GuideTaxiDetector', label: 'Detector' },
  ];

  return (
    <View style={styles.container}>
      {/* Top Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>Status: {statusInfo.text}</Text>
        <View style={[styles.statusIndicator, { backgroundColor: statusInfo.color }]} />
      </View>

      {/* Map Area */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholderText}>Interactive Map Area</Text>
        <Text style={styles.mapPlaceholderSubText}>Safe zones and restricted areas</Text>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Button Grid */}
      <View style={styles.buttonContainer}>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href as any} asChild>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>{item.label}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapPlaceholderText: {
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold',
  },
  mapPlaceholderSubText: {
    fontSize: 14,
    color: '#888',
  },
  sosButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sosButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  menuButton: {
    width: '22%', // Adjust for 4 items per row with spacing
    aspectRatio: 1, // Make it a square
    backgroundColor: '#2196F3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5%',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});