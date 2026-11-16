import { useState } from 'react';
import { Button, Switch, View } from 'react-native';

// Fallback per piattaforme senza una variante dedicata.
export default function PlatformControlsExample() {
  const [isOn, setIsOn] = useState(false);

  return (
    <View style={{ gap: 12 }}>
      <Button title="Pulsante" onPress={() => setIsOn((value) => !value)} />
      <Switch accessibilityLabel="Esempio di switch" value={isOn} onValueChange={setIsOn} />
    </View>
  );
}
