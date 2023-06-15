import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
`;

export const Texto = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colorText.text};
`;
