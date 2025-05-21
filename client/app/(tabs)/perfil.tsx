import { Pressable, StyleSheet, Alert, Switch, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";

export default function ProfileScreen() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

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
      <View style={styles.switchContainer}>
        <ThemedText style={{ marginRight: 8 }}>Tema oscuro</ThemedText>
        <Switch value={theme === "dark"} onValueChange={toggleTheme} />
      </View>
      <Pressable
        style={[styles.button, { backgroundColor: Colors[theme].tint }]}
        onPress={handleLogout}
      >
        <ThemedText
          type="defaultSemiBold"
          style={{ color: Colors[theme].background, textAlign: "center" }}
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
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
    minWidth: 180,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
});
