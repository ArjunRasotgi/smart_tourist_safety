// File: app/(protected)/home.tsx

import { View, Text, Button, StyleSheet } from "react-native";
import { useSupabase } from "@/hooks/useSupabase";

export default function HomeScreen() {
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    // Call the correct signOut method from supabase.auth
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Home</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    }
});