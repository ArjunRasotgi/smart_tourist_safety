// File: hooks/useSignUp.ts

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { AuthError, User } from '@supabase/supabase-js';

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string): Promise<{ data: { user: User | null } | null; error: AuthError | null }> => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    return { data, error };
  };

  return { loading, signUp };
};