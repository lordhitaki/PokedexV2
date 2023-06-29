import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Flat = styled.FlatList`
  width: 90%;
  height: 90%;
  margin-top: 60px;
`;

export const Container = styled.View`
  flex: 1;
`;
export const FullCard = styled.View`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 7px;
  margin-top: 7px;
  flex-direction: row;
  height: 120px;
  background-color: ${(props) => props.backgroundColor || '#eff7ee'};
`;
export const BoxInfos = styled.View`
  width: 50%;
  padding: 15px;
`;

export const Touch = styled.TouchableOpacity``;

export const Num = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${(props) => props.theme.colorText.card};
`;
export const Name = styled.Text`
  font-size: 21px;
  color: ${(props) => props.theme.colorText.card};
`;

export const BoxTypes = styled.View`
  position: absolute;
  flex-direction: row;
  padding: 10px;
  bottom: 0;
`;
export const Bg = styled(Image)`
  width: 126px;
  height: 120px;
  border-radius: 15px;
  position: absolute;
  right: 0;
`;
export const PokeImg = styled(Image)`
  width: 90px;
  height: 85px;
  border-radius: 15px;
  position: absolute;
  right: 20px;
  top: 15px;
`;
export const Types = styled(Image)`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  object-fit: contain;
`;

export const BoxFavorite = styled.View`
  position: absolute;
  right: 2px;
  top: 5px;
`;

export const BtFavorite = styled.TouchableOpacity``;
