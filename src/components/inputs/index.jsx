import React from 'react';
import { Controller } from 'react-hook-form';

import { BoxInp, ErrorText, Inp } from './styles';

export default function Input({ placeholder, placeholderTextColor, control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <BoxInp>
          <Inp
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChange}
          />
        </BoxInp>
      )}
    />
  );
}
