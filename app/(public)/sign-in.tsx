// File: app/(public)/sign-in.tsx

import React, { useState } from 'react';
import { Button, TextInput, View, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSignIn } from '@/hooks/useSignIn';
import { Link } from 'expo-router';

export default function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn, loading } = useSignIn();

  const handleSignIn = async () => {
    const { error } = await signIn(email, password);
    if (error) Alert.alert('Sign In Error', error.message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={loading ? 'Signing In...' : 'Sign In'}
        onPress={handleSignIn}
        disabled={loading}
      />
       <Link href="/sign-up" asChild>
         <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
         </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  input: { height: 50, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, marginBottom: 16, paddingHorizontal: 15, backgroundColor: '#fff' },
  linkButton: { marginTop: 15, alignItems: 'center' },
  linkText: { color: '#2196F3' }
});