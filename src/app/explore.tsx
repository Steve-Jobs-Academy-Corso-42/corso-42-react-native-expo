import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PlatformControlsExample from '@/components/platform-controls-example';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const exampleItems = [
  { id: '1', title: 'View', detail: 'Contenitore' },
  { id: '2', title: 'Text', detail: 'Testo' },
  { id: '3', title: 'Image', detail: 'Immagine' },
  { id: '4', title: 'Pressable', detail: 'Tocco' },
];

export default function ExploreScreen() {
  const [count, setCount] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const theme = useTheme();

  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <ThemedText type="smallBold" style={styles.eyebrow}>
              PLAYGROUND
            </ThemedText>
            <ThemedText type="title" style={styles.pageTitle}>
              Esempi UI
            </ThemedText>
            <ThemedText themeColor="textSecondary" style={styles.description}>
              Piccoli componenti interattivi e differenze tra piattaforme.
            </ThemedText>
          </View>

          {/* View organizza il layout, Text mostra testo e Image visualizza l'asset locale d'esempio. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                01 · MATTONCINI BASE
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                View, Text e Image
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                View crea contenitori, Text mostra parole e Image visualizza immagini.
              </ThemedText>
            </View>

            <View style={styles.profileRow}>
              <View style={[styles.imageFrame, { backgroundColor: theme.backgroundSelected }]}>
                <Image
                  accessibilityLabel="Logo React"
                  source={require('@/assets/images/react-logo.png')}
                  style={styles.reactLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.profileText}>
                <ThemedText type="smallBold">Un’immagine locale</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Inclusa nell’app, non scaricata da internet.
                </ThemedText>
              </View>
            </View>

            {/* flexDirection: 'row' dispone le tre View una accanto all'altra. */}
            <View style={[styles.layoutExample, { backgroundColor: theme.backgroundSelected }]}>
              <View style={[styles.layoutBlock, styles.layoutBlockOne]} />
              <View style={[styles.layoutBlock, styles.layoutBlockTwo]} />
              <View style={[styles.layoutBlock, styles.layoutBlockThree]} />
              <ThemedText type="small">Tre View in una riga</ThemedText>
            </View>
          </ThemedView>

          {/* TextInput controllato: onChangeText aggiorna lo state e il saluto viene renderizzato di nuovo. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                02 · INPUT
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                TextInput
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                Scrivi qualcosa: onChangeText aggiorna lo state e la schermata reagisce.
              </ThemedText>
            </View>
            <TextInput
              accessibilityLabel="Il tuo nome"
              autoCapitalize="words"
              onChangeText={setName}
              placeholder="Per esempio, Alex"
              placeholderTextColor={theme.textSecondary}
              returnKeyType="done"
              style={[
                styles.input,
                {
                  color: theme.text,
                  backgroundColor: theme.background,
                  borderColor: theme.backgroundSelected,
                },
              ]}
              value={name}
            />
            <ThemedText type="smallBold">
              {name.trim() ? `Ciao, ${name.trim()}!` : 'Il saluto apparirà qui.'}
            </ThemedText>
          </ThemedView>

          {/* Pressable crea un pulsante personalizzabile e applica un feedback visivo mentre lo premi. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                03 · AZIONI
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Pressable e Switch
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                Premi il pulsante o attiva l’interruttore: entrambi aggiornano lo state.
              </ThemedText>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Contatore, premuto ${count} ${count === 1 ? 'volta' : 'volte'}`}
              onPress={() => setCount((value) => value + 1)}
              style={({ pressed }) => [
                styles.button,
                styles.primaryButton,
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold" style={styles.primaryButtonText}>
                Premuto {count} {count === 1 ? 'volta' : 'volte'}
              </ThemedText>
            </Pressable>

            <View style={[styles.row, { borderTopColor: theme.backgroundSelected }]}>
              <View style={styles.rowText}>
                <ThemedText type="smallBold">Notifiche</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Ricevi aggiornamenti importanti
                </ThemedText>
              </View>
              <Switch
                accessibilityLabel="Attiva le notifiche"
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            </View>
          </ThemedView>

          {/* ActivityIndicator mostra un'attesa; il pulsante simula il cambio di stato, senza rete. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                04 · STATO
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                ActivityIndicator
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                Mostra visivamente un caricamento o un’attesa.
              </ThemedText>
            </View>
            <View style={styles.loadingRow}>
              {isLoading ? (
                <ActivityIndicator color="#087EE1" />
              ) : (
                <View style={[styles.doneMark, { backgroundColor: theme.backgroundSelected }]}>
                  <ThemedText type="smallBold">✓</ThemedText>
                </View>
              )}
              <ThemedText type="small">
                {isLoading ? 'Caricamento in corso…' : 'Caricamento completato'}
              </ThemedText>
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={() => setIsLoading((value) => !value)}
              style={({ pressed }) => [
                styles.secondaryButton,
                { backgroundColor: theme.backgroundSelected },
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold">
                {isLoading ? 'Simula il completamento' : 'Avvia di nuovo'}
              </ThemedText>
            </Pressable>
          </ThemedView>

          {/* FlatList virtualizza le liste lunghe, evitando di montare tutte le righe insieme. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                05 · LISTE
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                FlatList
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                Scorri in orizzontale. Per tanti elementi, FlatList renderizza solo quelli necessari.
              </ThemedText>
            </View>
            <FlatList
              contentContainerStyle={styles.listContent}
              data={exampleItems}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.listItem,
                    { backgroundColor: theme.backgroundSelected },
                  ]}>
                  <ThemedText type="smallBold">{item.title}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {item.detail}
                  </ThemedText>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </ThemedView>

          {/* Modal mostra una finestra sopra la schermata corrente, senza navigare a un'altra route. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                06 · FINESTRE
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Modal
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                Una finestra temporanea per conferme o informazioni.
              </ThemedText>
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={() => setIsModalVisible(true)}
              style={({ pressed }) => [
                styles.secondaryButton,
                { backgroundColor: theme.backgroundSelected },
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold">Apri la finestra</ThemedText>
            </Pressable>
          </ThemedView>

          <Modal
            animationType="fade"
            onRequestClose={() => setIsModalVisible(false)}
            transparent
            visible={isModalVisible}>
            <View style={styles.modalBackdrop}>
              <ThemedView type="backgroundElement" style={styles.modalCard}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                  Ciao!
                </ThemedText>
                <ThemedText themeColor="textSecondary">
                  Questa finestra è un componente Modal di React Native.
                </ThemedText>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setIsModalVisible(false)}
                  style={({ pressed }) => [
                    styles.button,
                    styles.primaryButton,
                    pressed && styles.pressed,
                  ]}>
                  <ThemedText type="smallBold" style={styles.primaryButtonText}>
                    Chiudi
                  </ThemedText>
                </Pressable>
              </ThemedView>
            </View>
          </Modal>

          {/* Questa sezione carica controlli nativi diversi su iOS e Android. */}
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.cardHeader}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                07 · COMPONENTI NATIVI
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                UI specifica
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                SwiftUI su iOS e Jetpack Compose su Android. Sul web, controlli React Native.
              </ThemedText>
            </View>
            {/* Metro sceglie la variante .ios, .android o .web; il file base è il fallback. */}
            <PlatformControlsExample />
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.four,
    paddingBottom: 120,
    gap: Spacing.four,
  },
  header: {
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  eyebrow: {
    color: '#087EE1',
    letterSpacing: 1,
    fontSize: 12,
  },
  pageTitle: {
    fontSize: 36,
    lineHeight: 42,
  },
  description: {
    fontSize: 16,
    lineHeight: 23,
  },
  card: {
    padding: Spacing.three,
    borderRadius: 22,
    gap: Spacing.two,
  },
  cardHeader: {
    gap: Spacing.one,
    marginBottom: Spacing.one,
  },
  sectionTitle: {
    fontSize: 21,
    lineHeight: 27,
  },
  button: {
    minHeight: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
  },
  primaryButton: {
    backgroundColor: '#087EE1',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 64,
    paddingTop: Spacing.two,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  rowText: {
    flex: 1,
    gap: Spacing.one,
    paddingRight: Spacing.two,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  imageFrame: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    width: 48,
    height: 48,
  },
  profileText: {
    flex: 1,
    gap: Spacing.one,
  },
  layoutExample: {
    minHeight: 64,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.two,
  },
  layoutBlock: {
    width: 18,
    height: 18,
    borderRadius: 6,
  },
  layoutBlockOne: {
    backgroundColor: '#087EE1',
  },
  layoutBlockTwo: {
    backgroundColor: '#6A5AE0',
  },
  layoutBlockThree: {
    backgroundColor: '#18A878',
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: Spacing.three,
    fontSize: 16,
  },
  loadingRow: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  doneMark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    minHeight: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.three,
  },
  listContent: {
    gap: Spacing.two,
  },
  listItem: {
    width: 116,
    minHeight: 76,
    borderRadius: 14,
    padding: Spacing.two,
    justifyContent: 'center',
    gap: Spacing.one,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    padding: Spacing.three,
  },
  modalCard: {
    borderRadius: 22,
    padding: Spacing.four,
    gap: Spacing.three,
  },
});
