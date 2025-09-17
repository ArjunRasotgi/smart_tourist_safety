// File: hooks/useSignIn.ts

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    return { error };
  };

  return { signIn, loading };
};