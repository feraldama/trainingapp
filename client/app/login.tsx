import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { theme } = useTheme();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
    // Aquí iría la lógica real de autenticación
    router.replace("/");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Iniciar sesión
        </ThemedText>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: Colors[theme].background,
              color: Colors[theme].text,
              borderColor: Colors[theme].icon,
            },
          ]}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={Colors[theme].icon}
        />
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: Colors[theme].background,
              color: Colors[theme].text,
              borderColor: Colors[theme].icon,
            },
          ]}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={Colors[theme].icon}
        />
        <Pressable style={styles.button} onPress={handleLogin}>
          <ThemedText
            type="defaultSemiBold"
            style={{ color: "#fff", textAlign: "center" }}
          >
            Iniciar sesión
          </ThemedText>
        </Pressable>
        <Pressable
          onPress={() => router.push("/register")}
          style={({ pressed }) => [
            { marginTop: 16, opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <ThemedText type="link" style={{ textAlign: "center" }}>
            ¿No tienes cuenta? Regístrate
          </ThemedText>
        </Pressable>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
  },
});
