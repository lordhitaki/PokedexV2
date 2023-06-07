import React from 'react';

import { Button, TextButton } from './stylesDisable';

export default function But({ name, onPress, backgroundColor, color }) {
  return (
    <Button onPress={onPress} backgroundColor={backgroundColor}>
      <TextButton color={color}>{name}</TextButton>
    </Button>
  );
}
