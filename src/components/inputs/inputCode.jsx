import React, { useRef, useState, useEffect } from 'react';
import { InpCode } from './styles';

const ConfirmationCodeInput = ({ numFields = 6, onCodeFilled }) => {
  const codeInputs = Array.from({ length: numFields }, () => useRef(null)); // ver oque é o Array.from
  const [confirmationCode, setConfirmationCode] = useState(Array(numFields).fill(''));

  const handleCodeChange = (index, value) => {
    if (value.length === 1 && index < numFields - 1) {
      codeInputs[index + 1].current.focus();
    }

    const updatedCode = [...confirmationCode];
    updatedCode[index] = value;
    setConfirmationCode(updatedCode);
  };

  useEffect(() => {
    const code = confirmationCode.join(''); //join
    onCodeFilled(code);
  }, [confirmationCode, onCodeFilled]);

  useEffect(() => {
    // Limpa o código de confirmação quando o número de campos é alterado
    setConfirmationCode(Array(numFields).fill(''));
  }, [numFields]);

  return (
    <>
      {codeInputs.map((ref, index) => (
        <InpCode
          key={index}
          ref={ref}
          maxLength={1}
          keyboardType="numeric"
          value={confirmationCode[index]}
          onChangeText={(value) => handleCodeChange(index, value)}
        />
      ))}
    </>
  );
};

export default ConfirmationCodeInput;
