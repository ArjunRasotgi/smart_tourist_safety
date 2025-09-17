// File: app/index.tsx


import { useAuth } from '@/providers/AuthContext';
import { Redirect } from 'expo-router';

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) return null;
  if (!session) return <Redirect href="/sign-in" />;
  return <Redirect href="/" />;
}