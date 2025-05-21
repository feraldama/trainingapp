import { useState } from "react";
import { StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
    Alert.alert("Registro exitoso", `¡Bienvenido, ${name}!`, [
      {
        text: "OK",
        onPress: () => router.replace("/login"),
      },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Registro
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleRegister}>
        <ThemedText
          type="defaultSemiBold"
          style={{ color: "#fff", textAlign: "center" }}
        >
          Registrarse
        </ThemedText>
      </Pressable>
      <Pressable
        onPress={() => router.push("/login")} // Cambiado a push
        style={({ pressed }) => [{ marginTop: 16, opacity: pressed ? 0.6 : 1 }]}
      >
        <ThemedText type="link" style={{ textAlign: "center" }}>
          ¿Ya tienes cuenta? Inicia sesión
        </ThemedText>
      </Pressable>
    </ThemedView>
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
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
  },
});
