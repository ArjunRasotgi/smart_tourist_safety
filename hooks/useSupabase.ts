// File: hooks/useSupabase.ts

import { useAuth } from '@/providers/AuthContext';
import { supabase } from '../lib/supabase';

export const useSupabase = () => {
  const { session, loading } = useAuth();
  return { session, loading, supabase };
};