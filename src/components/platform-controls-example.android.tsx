import { useState } from 'react';

import { Button, Column, Host, Switch, Text } from '@expo/ui/jetpack-compose';
import { fillMaxWidth } from '@expo/ui/jetpack-compose/modifiers';

// Su Android Host ospita i controlli Jetpack Compose dentro il layout React Native.
export default function PlatformControlsExample() {
  const [isOn, setIsOn] = useState(false);

  return (
    <Host style={{ width: '100%', height: 120 }}>
      <Column verticalArrangement={{ spacedBy: 8 }}>
        <Button
          modifiers={[fillMaxWidth()]}
          onClick={() => setIsOn((value) => !value)}>
          <Text>Pulsante Compose</Text>
        </Button>
        <Switch value={isOn} onCheckedChange={setIsOn} />
      </Column>
    </Host>
  );
}
