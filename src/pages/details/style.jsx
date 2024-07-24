import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const BoxHeader = styled.View`
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

export const ImgHeader = styled(Image)`
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
`;

export const ImgPoke = styled(Image)`
  position: absolute;
  width: 280px;
  height: 255px;
  bottom: 50px;
  object-fit: contain;
`;

export const Back = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Touch = styled.TouchableOpacity``;

export const Icone = styled(Icon)`
  font-size: 40px;
  color: ${(props) => props.theme.colorText.button};
`;

export const BoxFavorite = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Body = styled.View`
  width: 90%;
  align-items: center;
`;

export const BoxDescr = styled.View`
  width: 100%;
  bottom: 40px;
  margin-left: 40px;
`;

export const Name = styled.Text`
  font-size: 37px;
  color: ${(props) => props.theme.colorText.text};
  font-family: 'Poppins-Medium';
`;
export const Num = styled.Text`
  font-size: 22px;
  color: ${(props) => props.theme.colorText.sub};
  font-family: 'Poppins-Medium';
`;

export const BoxType = styled.View`
  flex-direction: row;
  width: 100%;
  margin-left: 20px;
`;

export const ImgType = styled(Image)`
  object-fit: contain;
  width: 140px;
  height: 40px;
`;

export const BoxHis = styled.View`
  width: 100%;
  height: 140px;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.colorText.sub};
  margin-top: 20px;
  margin-left: 30px;
  align-items: center;
`;

export const TextHis = styled.Text`
  text-align: left;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${(props) => props.theme.colorText.sub};
`;

export const TitleStats = styled.Text`
  font-size: 22px;
  font-family: 'Poppins-Bold';
  color: ${(props) => props.theme.colorText.text};
  text-align: left;
`;

export const BoxStats = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 150px;
  margin-left: 30px;
`;
export const TextStats = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colorText.text};
  font-family: 'Poppins-Medium';
`;

export const BoxGeralStats = styled.View`
  gap: 10px;
  width: 95%;
  flex-direction: row;
  justify-content: center;
  margin-left: 30px;
`;

export const BoxInfoStats = styled.View`
  width: 50%;
  height: 50px;
  border-radius: 20px;
  border-width: 0.5px;
  border-color: ${(props) => props.theme.colorText.text};
  justify-content: center;
  align-items: center;
`;

export const BoxWeak = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin-left: 30px;
`;

export const ImgWeak = styled(Image)`
  width: 100px;
  height: 45px;
  object-fit: contain;
`;

export const BoxEvo = styled.View`
  width: 95%;
  border-radius: 15px;
  min-height: 10%;
  border-width: 2px;
  align-items: center;
  max-height: 1500px;
  border-color: ${(props) => props.theme.borderButton.claro};
  margin-left: 30px;
`;

export const BoxPokeEvo = styled.View`
  align-items: center;
  width: 90%;
`;

export const BodyPokeEvo = styled.View`
  flex-direction: row;
  width: 100%;
  border-width: 2px;
  border-color: ${(props) => props.theme.borderButton.claro};
  height: 76px;
  border-radius: 90px;
`;

export const Card = styled.View`
  width: 37%;
  border-radius: 90px;
  align-items: center;
  flex-direction: row;
`;

export const ImgPokeEvo = styled(Image)`
  position: absolute;
  object-fit: contain;
  width: 55px;
  height: 55px;
  left: 15px;
`;

export const BoxEvoInfos = styled.View`
  width: 70%;
  margin-left: 10px;
`;

export const NameEvo = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-family: 'Poppins-Medium';
  color: ${(props) => props.theme.colorText.text};
`;

export const NumEvo = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-family: 'Poppins-Regular';
  color: ${(props) => props.theme.colorText.text};
`;

export const BoxEvoType = styled.View`
  width: 80%;
  flex-direction: row;
  right: 8px;
`;

export const LvlEvo = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const IconEvo = styled(Icon)`
  font-size: 30px;
  color: ${(props) => props.theme.colorText.azul};
`;
export const TextEvo = styled.Text`
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.theme.colorText.azul};
`;

export const EvoType = styled(Image)`
  object-fit: contain;
  width: 60px;
  height: 60px;
  bottom: 20px;
`;

export const ImgCard = styled(Image)`
  object-fit: contain;
  width: 92px;
  height: 74px;
  right: 2px;
`;
