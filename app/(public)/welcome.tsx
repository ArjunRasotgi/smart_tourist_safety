// File: app/(public)/welcome.tsx

import { SafeAreaView, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
      <Button title="Sign Up" onPress={() => router.push("/sign-up")} />
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
    </SafeAreaView>
  );
}