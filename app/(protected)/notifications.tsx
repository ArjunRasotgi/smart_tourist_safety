// File: app/(protected)/notifications.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const NotificationItem = ({ title, body, date }: { title: string; body: string; date: string }) => (
  <View style={styles.notificationCard}>
    <Text style={styles.notificationTitle}>{title}</Text>
    <Text style={styles.notificationBody}>{body}</Text>
    <Text style={styles.notificationDate}>{date}</Text>
  </View>
);

export default function Notifications() {
  const notifications = [
    { id: '1', title: 'Security Alert', body: 'Potential protest near downtown area. Please avoid the vicinity.', date: '2025-09-15' },
    { id: '2', title: 'COVID-19 Advisory', body: 'New health guidelines have been issued. Check government sources.', date: '2025-09-10' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your Alerts</Text>
        {notifications.map((notif) => (
          <NotificationItem key={notif.id} title={notif.title} body={notif.body} date={notif.date} />
        ))}
      </View>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>Notification Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f2f5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  notificationCard: { backgroundColor: '#fafafa', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#eee' },
  notificationTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  notificationBody: { color: '#555', marginBottom: 5 },
  notificationDate: { fontSize: 12, color: '#999', textAlign: 'right' },
  settingsButton: { backgroundColor: '#ccc', padding: 15, borderRadius: 5, alignItems: 'center' },
  settingsButtonText: { fontWeight: 'bold' },
});