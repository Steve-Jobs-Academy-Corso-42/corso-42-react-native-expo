import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';

import { Button, Host, Toggle, VStack } from '@expo/ui/swift-ui';
import { buttonStyle, controlSize, frame, toggleStyle } from '@expo/ui/swift-ui/modifiers';

// Su iOS i controlli sono SwiftUI. La larghezza misurata evita che il Toggle esca dalla scheda.
export default function PlatformControlsExample() {
  const [isOn, setIsOn] = useState(false);
  const [hostWidth, setHostWidth] = useState(0);

  function measureHost(event: LayoutChangeEvent) {
    const width = event.nativeEvent.layout.width;
    setHostWidth((currentWidth) => (currentWidth === width ? currentWidth : width));
  }

  return (
    <View onLayout={measureHost} style={{ width: '100%', height: 120 }}>
      <Host alignment="topLeading" style={{ flex: 1 }}>
        <VStack
          spacing={8}
          modifiers={hostWidth > 0 ? [frame({ width: hostWidth, alignment: 'leading' })] : []}>
          <Button
            label="Pulsante SwiftUI"
            modifiers={[buttonStyle('borderedProminent'), controlSize('regular')]}
            onPress={() => setIsOn((value) => !value)}
          />
          <Toggle
            isOn={isOn}
            onIsOnChange={setIsOn}
            label="Esempio di Toggle"
            modifiers={[toggleStyle('switch')]}
          />
        </VStack>
      </Host>
    </View>
  );
}
