import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

// Ogni file dentro src/app è una schermata: index.tsx corrisponde al percorso "/".
export default function HomeScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title">Ciao!</ThemedText>
        <ThemedText themeColor="textSecondary">
          Questa è la schermata iniziale della tua app.
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // flex: 1 fa occupare allo schermo tutto lo spazio disponibile.
  screen: {
    flex: 1,
  },
  // SafeAreaView evita che il contenuto finisca sotto notch o indicatori di sistema.
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.four,
    gap: Spacing.two,
  },
});
