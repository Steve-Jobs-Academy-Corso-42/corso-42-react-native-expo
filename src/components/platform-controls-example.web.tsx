import { useState } from 'react';
import { Button, Switch, View } from 'react-native';

// Sul web mostriamo gli stessi concetti con componenti React Native compatibili con il browser.
export default function PlatformControlsExample() {
  const [isOn, setIsOn] = useState(false);

  return (
    <View style={{ gap: 12 }}>
      <Button title="Pulsante web" onPress={() => setIsOn((value) => !value)} />
      <Switch accessibilityLabel="Esempio di switch web" value={isOn} onValueChange={setIsOn} />
    </View>
  );
}
