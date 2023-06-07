import React, { useState } from 'react';
import { BoxInp, Icone, Inp, ToggleButton, ToggleIcon, Touch, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

export default function InputPass({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  errors,
  control,
  name,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
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
              secureTextEntry={!isPasswordVisible}
            />
          </BoxInp>
        )}
      />

      <Touch onPress={togglePasswordVisibility}>
        <Icone name={isPasswordVisible ? 'eye' : 'eye-slash'} />
      </Touch>
    </>
  );
}
