// File: app/(protected)/_layout.tsx

import React from 'react';
import { Redirect, Slot } from 'expo-router';
import { useAuth } from '@/providers/AuthContext';

export default function ProtectedLayout() {
  const { session, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}