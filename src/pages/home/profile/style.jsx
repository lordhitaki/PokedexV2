import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
`;
export const Header = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  border-bottom-width: 1px;
  border-color: #f2f2f2;
  top: 0px;
  width: 100%;
  height: 200px;
  justify-content: center;
`;
export const HeaderOn = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  border-bottom-width: 1px;
  border-color: #f2f2f2;
  top: 0px;
  width: 100%;
  height: 67px;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;
export const ProfilePic = styled.View`
  width: 14%;
  height: 80%;
  border-radius: 50px;
  left: 10px;
  align-items: center;
  justify-content: center;
  border-width: 0.5px;
`;
export const TextHeader = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${(props) => props.theme.colorText.sub};
  width: 55%;
`;
export const BoxButton = styled.View`
  width: 90%;
  margin-top: 20px;
  left: 18px;
`;
export const BoxHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const BoxImgHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: -30px;
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

export const Modal = styled.Modal`
  background-color: ${(props) => props.theme.backgrounds.main};
`;

export const BoxModal = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
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

export const Teste = styled.TouchableOpacity`
  background-color: red;
  width: 40px;
  height: 40px;
`;
