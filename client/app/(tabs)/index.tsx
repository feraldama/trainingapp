import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const { theme } = useTheme();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.background,
        dark: Colors.dark.background,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView
        style={[
          styles.titleContainer,
          { backgroundColor: Colors[theme].background },
        ]}
      >
        <ThemedText type="title">¡Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Crea tu cuenta</ThemedText>
        <ThemedText>
          Regístrate para guardar tu progreso y acceder a todas las funciones.
          Presiona <ThemedText type="defaultSemiBold">Perfil</ThemedText> en la
          esquina superior derecha para comenzar.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 2: Explora las funciones</ThemedText>
        <ThemedText>
          Navega por las diferentes secciones de la app usando el menú inferior.
          Descubre todo lo que podemos ofrecerte.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Paso 3: Personaliza tu experiencia
        </ThemedText>
        <ThemedText>
          Ve a <ThemedText type="defaultSemiBold">Ajustes</ThemedText> para
          cambiar el tema, notificaciones y preferencias según tus gustos.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 4: Empieza a usar la app</ThemedText>
        <ThemedText>
          ¡Todo listo! Ahora puedes comenzar a disfrutar de la experiencia
          completa. ¿Qué te gustaría hacer primero?
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  registerButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
});
