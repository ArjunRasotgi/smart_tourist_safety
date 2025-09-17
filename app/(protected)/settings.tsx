// File: app/(protected)/settings.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SettingItem = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Text style={styles.settingText}>{title}</Text>
    <Text style={styles.arrow}>❯</Text>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Account</Text>
        <SettingItem title="Edit Profile" onPress={() => Alert.alert('Edit Profile')} />
        <SettingItem title="Change Password" onPress={() => Alert.alert('Change Password')} />
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>App Preferences</Text>
        <SettingItem title="Notifications" onPress={() => Alert.alert('Notifications Settings')} />
        <SettingItem title="Privacy Policy" onPress={() => Alert.alert('Privacy Policy')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  settingText: { fontSize: 16, color: '#333' },
  arrow: { fontSize: 16, color: '#999' },
});