import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
  align-items: center;
`;

export const BoxBack = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const Touch = styled.TouchableOpacity``;

export const Icone = styled(Icon)`
  font-size: 30px;
  color: ${(props) => props.theme.colorText.text};
`;

export const BoxTextHeader = styled.View`
  top: 20px;
`;

export const TextCreate = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: ${(props) => props.theme.colorText.text};
`;

export const BoxText = styled.View`
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const Text02 = styled.Text`
  font-size: 30px;
  font-family: 'Poppins-Regular';
  color: ${(props) => props.theme.colorText.sub};
  text-align: center;
`;

export const Text01 = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.colorText.text};
`;

export const BoxInputs = styled.View`
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
`;

export const Email = styled.View`
  align-items: center;
  width: 90%;
  margin-top: 10px;
`;

export const TextInput = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${(props) => props.theme.colorText.sub};
  bottom: 5px;
`;

export const Forgot = styled.TouchableOpacity`
  top: 40px;
`;

export const TextForgot = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: ${(props) => props.theme.colorButton.azul};
`;

export const BoxButtons = styled.View`
  position: absolute;
  width: 90%;
  gap: 10px;
  bottom: 30px;
  left: 5%;
`;

export const ErrorMsg = styled.Text`
  color: red;
  bottom: 10px;
`;
export const ErrorMsg01 = styled.Text`
  color: red;
  bottom: 18px;
`;
