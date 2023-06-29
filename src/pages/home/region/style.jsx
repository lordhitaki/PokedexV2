import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const BoxRegion = styled.View`
  width: 100%;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Touch = styled.TouchableOpacity``;

export const BackImg = styled.Image`
  flex: 1;
  border-radius: 15px;
  position: absolute;
  height: 120px;
  width: 100%;
  left: 12px;
`;

export const BoxInfos = styled.View`
  justify-content: space-around;
  flex-direction: row;
  height: 100%;
  width: 77%;
  border-radius: 15px;
  align-items: center;
  left: 12px;
`;

export const BoxText = styled.View`
  background-color: #00000054;
  flex-direction: column;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: absolute;
  left: 0;
`;

export const RegionName = styled.Text`
  color: ${(props) => props.theme.colorText.button};
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  left: 30px;
`;
export const GeneratioName = styled.Text`
  color: ${(props) => props.theme.colorText.button};
  font-family: 'Poppins-Medium';
  font-size: 13px;
  left: 30px;
`;

export const BoxImg = styled.View`
  flex-direction: row;
  left: 70px;
`;
export const PokeImg = styled.Image`
  width: 60px;
  height: 60px;
`;
