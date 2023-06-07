import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  color: ${(props) => props.theme.colorText.main};
`;

export const Bti = styled.TouchableOpacity``;
export const BoxDados = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.View``;

export const TextInformations = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: ${(props) => props.theme.colorText.main};
`;
export const TextDados = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${(props) => props.theme.colorText.main};
`;

export const Modal = styled.Modal``;

export const BoxModal = styled.View`
  background-color: ${(props) => props.theme.colorText.main};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TrocarTheme = styled.Switch`
  justify-content: flex-end;
`;

export const BoxInfos = styled.View`
  width: 80%;
`;
