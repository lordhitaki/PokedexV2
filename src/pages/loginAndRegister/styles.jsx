import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
  align-items: center;
  justify-content: center;
`;

export const BoxSkip = styled.View`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 80px;
`;

export const Touch = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SkipText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 20px;
  color: ${(props) => props.theme.colorText.text};
`;

export const Skip = styled(Icon)`
  color: ${(props) => props.theme.colorText.text};
  font-size: 20px;
`;

export const BoxImg = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const BoxTitle = styled.View`
  top: 10px;
`;

export const TextTitle = styled.Text`
  font-size: 30px;
  line-height: 39px;
  text-align: center;
  font-family: 'Poppins-Medium';
  color: ${(props) => props.theme.colorText.text};
`;

export const BoxText = styled.View`
  width: 70%;
  top: 35px;
`;

export const Desc = styled.Text`
  text-align: center;
  font-family: 'Poppins-Regular';
  color: ${(props) => props.theme.colorText.text};
  font-size: 16px;
`;

export const BoxButton = styled.View`
  width: 90%;
  height: 56px;
  top: 50px;
`;

export const BoxLogin = styled.View`
  top: 80px;
`;

export const ButtonLogin = styled.TouchableOpacity``;

export const TextLogin = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  text-align: center;
  color: ${(props) => props.theme.colorButton.azul};
  line-height: 27px;
`;
