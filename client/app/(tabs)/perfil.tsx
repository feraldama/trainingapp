import { Pressable, StyleSheet, Alert } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const router = useRouter();
  const handleLogout = () => {
    Alert.alert("Sesión cerrada", "Has cerrado sesión correctamente.", [
      {
        text: "OK",
        onPress: () => router.replace("../login"),
      },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Dashboard
      </ThemedText>
      <ThemedText style={styles.text}>
        ¡Bienvenido a tu panel de usuario!
      </ThemedText>
      <Pressable style={styles.button} onPress={handleLogout}>
        <ThemedText
          type="defaultSemiBold"
          style={{ color: "#fff", textAlign: "center" }}
        >
          Cerrar sesión
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    marginBottom: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
    minWidth: 180,
  },
});
