import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BoxModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.Modal``;

export const ModalView = styled.View`
  width: 90%;
  border-radius: 20px;
  padding: 35px;
  background-color: ${(props) => props.theme.backgrounds.main};
`;

export const Scroll = styled.ScrollView``;

export const TouchFilter = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
`;

export const FilterText = styled.Text`
  color: ${(props) => props.theme.colorText.filter};
  font-size: 18px;
  text-align: center;
  font-family: 'Poppins-SemiBold';
  right: 5px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
`;

export const ButtonOpen = styled(Button)`
  width: 90%;
  background-color: ${(props) => props.theme.colorButton[props.backgroundColor]};
  height: 45px;
  border-radius: 50px;
  left: 10px;
`;

export const BoxIcone = styled.View`
  position: absolute;
  right: 5px;
  top: 11px;
`;
export const Icone = styled(Icon)`
  font-size: 25px;
  color: ${(props) => props.theme.colorText.filter};
`;
