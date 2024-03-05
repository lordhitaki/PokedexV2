import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Flat = styled.FlatList`
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
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
  width: 90%;
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
  object-fit: contain;
`;

export const Types = styled(Image)`
  width: 90px;
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

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const PaginationButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colorPrimary};
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
`;

export const PaginationText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colorText.button};
`;

export const LoadMoreButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colorPrimary};
  padding: 10px 20px;
  align-self: center;
  margin-top: 10px;
  border-radius: 5px;
`;

export const LoadMoreText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colorText.button};
`;
