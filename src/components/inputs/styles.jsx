import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Inp = styled.TextInput`
  width: 90%;
  border-width: 1.5px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.inputs.main};
  background-color: ${(props) => props.theme.backgrounds.main};
  color: ${(props) => props.placeholderTextColor};
  padding-left: 10px;
  font-family: 'Poppins-Regular';
  justify-content: center;
`;

export const Icone = styled(Icon)`
  font-size: 20px;
  color: ${(props) => props.theme.colorText.main};
  position: absolute;
  bottom: 25px;
  left: 150px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Touch = styled.TouchableOpacity``;

export const BoxInp = styled.View`
  width: 100%;
  align-items: center;
`;
export const InpCode = styled.TextInput`
  width: 40px;
  height: 40px;
  border-width: 1px;
  border-color: gray;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  margin-right: 5px;
`;
