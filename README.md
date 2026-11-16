# Corso 42 · React Native ed Expo

Progetto didattico per esplorare React Native, Expo ed Expo Router con esempi
interattivi eseguibili su iOS, Android e web.

## Avvio

```bash
npm install
npx expo start
```

Segui le istruzioni nel terminale per aprire l'app su un simulatore o dispositivo.
Per il web, avvia `npx expo start --web`.

## Schermate e navigazione

Le schermate si trovano in `src/app/`:

- `index.tsx` è la schermata Home (`/`).
- `explore.tsx` è la pagina Explore (`/explore`) e raccoglie gli esempi UI.
- `_layout.tsx` configura il layout condiviso e la navigazione.

Le tab native sono configurate in `src/components/app-tabs.tsx`.

## Esempi nella pagina Explore

La pagina mostra componenti React Native di base e interazioni con lo state:

- layout con `View`, testo con `Text` e immagini locali con `Image`;
- input controllato con `TextInput`;
- pulsanti personalizzati con `Pressable` e interruttori con `Switch`;
- stato di caricamento con `ActivityIndicator`;
- liste orizzontali con `FlatList`;
- finestre informative con `Modal`.

La sezione dei componenti specifici di piattaforma usa file risolti
automaticamente da Metro:

- `.ios.tsx`: componenti SwiftUI tramite `@expo/ui/swift-ui`;
- `.android.tsx`: componenti Jetpack Compose tramite `@expo/ui/jetpack-compose`;
- `.web.tsx`: componenti React Native compatibili con il browser;
- `.tsx`: variante di fallback.

I commenti nel codice spiegano i concetti mostrati; gli esempi di caricamento sono
dimostrativi e non effettuano richieste di rete.
