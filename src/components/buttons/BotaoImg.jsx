import React from 'react';
import { ButtonSocial, TextSocial } from './styles';

export default function BotaoImg({ name, onPress, image, backgroundColor, borderColor, color }) {
  return (
    <ButtonSocial onPress={onPress} backgroundColor={backgroundColor} borderColor={borderColor}>
      {image && image}
      <TextSocial color={color}>{name}</TextSocial>
    </ButtonSocial>
  );
}
