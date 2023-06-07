import React from 'react';

import { Button, TextButton } from './styles';

export default function Botao({ name, onPress, backgroundColor, color, disabled }) {
  return (
    <Button onPress={onPress} backgroundColor={backgroundColor} disabled={!disabled}>
      <TextButton color={color}>{name}</TextButton>
    </Button>
  );
}
