import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
  align-items: center;
  justify-content: center;
`;

export const BoxBack = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const Touch = styled.TouchableOpacity``;

export const Icone = styled(Icon)`
  font-size: 30px;
  color: ${(props) => props.theme.colorText.main};
`;

export const BoxTextHeader = styled.View`
  top: 20px;
  position: absolute;
`;
export const BoxImg = styled.View``;

export const TextCreate = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: ${(props) => props.theme.colorText.main};
`;

export const BoxTextCenter = styled.View`
  top: 20px;
  width: 90%;
`;

export const TextCenter = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 30px;
  text-align: center;
  color: ${(props) => props.theme.colorText.main};
`;

export const BoxDescrition = styled.View`
  top: 40px;
`;

export const TextDescrition = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colorText.main};
`;

export const BoxButtons = styled.View`
  width: 90%;
  gap: 10px;
  top: 80px;
`;
