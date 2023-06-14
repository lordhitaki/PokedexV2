import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
  align-items: center;
  justify-content: center;
`;
export const BoxImg = styled.View`
  position: absolute;
  top: 10px;
  width: 100%;
`;
export const BoxCenterImg = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 380px;
  width: 100%;
`;
export const Img = styled(Image)`
  object-fit: contain;
`;

export const BoxText = styled.View`
  width: 80%;
`;

export const Msg = styled.Text`
  text-align: center;
  font-family: 'Poppins-Medium';
  font-size: 26px;
  color: ${(props) => props.theme.colorText.main};
  margin-bottom: 10px;
`;

export const SubMsg = styled.Text`
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${(props) => props.theme.colorText.sub};
  margin-top: 10px;
`;
export const BoxButton = styled.View`
  width: 90%;
  bottom: 20px;
  left: 20px;
`;
