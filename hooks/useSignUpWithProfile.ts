// File: hooks/useSignUpWithProfile.ts

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { decode } from 'base64-arraybuffer';

interface ProfileData {
  fullName: string;
  aadharNumber: string;
  contactNumber: string;
  avatarBase64: string | null;
}

export const useSignUpWithProfile = () => {
  const [loading, setLoading] = useState(false);
  
  const signUp = async (email: string, password: string, profile: ProfileData) => {
    setLoading(true);
    
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setLoading(false);
      return { user: null, error: authError };
    }
    if (!authData.user) {
      setLoading(false);
      return { user: null, error: new Error('User not created.') };
    }

    let avatarUrl: string | null = null;
    if (profile.avatarBase64) {
      const filePath = `${authData.user.id}/${new Date().getTime()}.jpg`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, decode(profile.avatarBase64), { contentType: 'image/jpeg' });

      if (!uploadError) {
        const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
        avatarUrl = data.publicUrl;
      }
    }
    
    const { error: profileError } = await supabase
      .from('users_profile')
      .insert([
        { 
          user_id: authData.user.id,
          full_name: profile.fullName,
          aadhar_number: profile.aadharNumber,
          contact_number: profile.contactNumber,
          avatar_url: avatarUrl,
        }
      ]);

    setLoading(false);
    if (profileError) {
      return { user: null, error: profileError };
    }

    return { user: authData.user, error: null };
  };

  return { signUp, loading };
};