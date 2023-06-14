import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colorButton.disable
      : props.theme.colorButton[props.backgroundColor]};
  width: 100%;
  height: 58px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${(props) =>
    props.disabled ? props.theme.colorText.disable : props.theme.colorText[props.color]};
  text-align: center;
  font-family: 'Poppins-SemiBold';
`;

export const ButtonSocial = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${(props) => props.theme.borderButton[props.borderColor]};
  gap: 30px;
  background-color: ${(props) => props.theme.colorButton[props.backgroundColor]};
`;

export const TextSocial = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colorText[props.color]};
  font-family: 'Poppins-SemiBold';
`;
