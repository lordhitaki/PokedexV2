import styled from 'styled-components/native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  flex: 1;
`;
export const ContainerOff = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  flex: 1;
  margin-left: 12px;
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
export const Scroll = styled.ScrollView`
  flex: 1;
  height: 100%;
  min-height: 90%;
  margin-left: 12px;
`;
export const HeaderOn = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colorText.sub};
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
  align-items: center;
  justify-content: center;
  border-width: 0.5px;
  object-fit: contain;
`;

export const ImageStyled = styled(Image)`
  width: 50px;
  height: 50px;
  object-fit: contain;
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
  left: 12px;
`;
export const BoxHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  left: 10px;
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
  color: ${(props) => props.theme.colorText.text};
  margin-top: 15px;
`;

export const Bti = styled.TouchableOpacity``;
export const BoxDados = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.View``;
export const BoxTerms = styled.View`
  align-items: center;
`;
export const BoxAbout = styled.View`
  width: 100%;
  align-items: center;
`;

export const TextInformations = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: ${(props) => props.theme.colorText.text};
`;
export const TextDados = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${(props) => props.theme.colorText.text};
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
  flex: 1;
  width: 80%;
  margin-top: 7px;
`;

export const Teste = styled.TouchableOpacity``;

export const TextLogout = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${(props) => props.theme.colorText.erro};
`;

export const Icone = styled(Icon)`
  color: ${(props) => props.theme.colorText.text};
  left: 60px;
`;

export const BoxIcone = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BoxTermos = styled.View``;

export const ModalTermosBox = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  flex: 1;
  align-items: center;
`;
export const ModalAboutBox = styled.View`
  background-color: ${(props) => props.theme.backgrounds.main};
  flex: 1;
  align-items: center;
`;

export const TitleTermos = styled.Text`
  color: ${(props) => props.theme.colorText.text};
  font-size: 30px;
  text-align: center;
`;
export const TextTermos = styled.Text`
  color: ${(props) => props.theme.colorText.text};
  font-size: 18px;
`;

export const ButtonTerms = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
`;
export const ScrollTerms = styled.ScrollView`
  max-height: 92%;
`;
export const ScrollAbout = styled.ScrollView`
  max-height: 92%;
`;

export const TextAbout = styled.Text`
  color: ${(props) => props.theme.colorText.text};
  font-size: 18px;
  text-align: center;
`;

export const BtModal = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colorButton.azul};
  height: 40px;
  justify-content: center;
  border-radius: 50px;
  width: 50%;
  align-items: center;
  position: absolute;
  bottom: 10px;
`;
