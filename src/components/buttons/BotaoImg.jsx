import React from 'react';
import { View } from 'react-native';
import { ButtonSocial, TextSocial } from './styles';

export default function BotaoImg({ name, onPress, image, backgroundColor }) {
  return (
    <ButtonSocial onPress={onPress} backgroundColor={backgroundColor}>
      {image}
      <TextSocial>{name}</TextSocial>
    </ButtonSocial>
  );
}
