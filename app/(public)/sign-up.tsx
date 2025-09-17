// File: app/(public)/sign-up.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, Text } from 'react-native';
import { useSignUpWithProfile } from '@/hooks/useSignUpWithProfile';
import * as ImagePicker from 'expo-image-picker';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [contact, setContact] = useState('');
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const { signUp, loading } = useSignUpWithProfile();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera access is required to take a photo.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setImageBase64(result.assets[0].base64 || null);
    }
  };

  const handleSignUp = async () => {
    if (!imageBase64) {
        Alert.alert('Photo Required', 'Please take a photo to complete sign up.');
        return;
    }

    const { error } = await signUp(email, password, {
        fullName: fullName,
        aadharNumber: aadhar,
        contactNumber: contact,
        avatarBase64: imageBase64,
    });

    if (error) {
      Alert.alert('Sign Up Error', error.message);
    } else {
      Alert.alert('Success!', 'Please check your email to verify your account.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an Account</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Aadhar Number" value={aadhar} onChangeText={setAadhar} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Contact Number" value={contact} onChangeText={setContact} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
        <Text style={styles.photoButtonText}>Take Photo</Text>
      </TouchableOpacity>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}
      <Button title={loading ? 'Creating Account...' : 'Sign Up'} onPress={handleSignUp} disabled={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24, color: '#333' },
  input: { height: 50, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, marginBottom: 16, paddingHorizontal: 15, backgroundColor: '#fff', fontSize: 16 },
  photoButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  photoButtonText: { color: 'white', fontWeight: 'bold' },
  imagePreview: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginBottom: 16 },
});