import { useSupabase } from "@/hooks/useSupabase";

export const signUpUser = async (supabase: any, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) console.error("Sign-up error:", error.message);
  return { data, error };
};

export const signInUser = async (supabase: any, email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) console.error("Sign-in error:", error.message);
  return { data, error };
};
