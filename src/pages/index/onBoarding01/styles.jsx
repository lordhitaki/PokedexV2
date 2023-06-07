import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.main};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const BoxLogo = styled.View`
  bottom: 20px;
  left: 20px;
`;
export const BoxCenter = styled.View`
  width: 90%;
`;

export const TextCenter = styled.Text`
  font-family: 'Poppins-Medium';
  text-align: center;
  color: ${(props) => props.theme.colorText.main};
  font-size: 32px;
`;
export const BoxText = styled.View`
  align-items: center;
  justify-content: center;
  top: 20px;
  width: 90%;
`;
export const MiniText = styled.Text`
  font-family: 'Poppins-Regular';
  text-align: center;
  color: ${(props) => props.theme.colorText.main};
  font-size: 16px;
`;
export const BoxNext = styled.View`
  background-color: ${(props) => props.theme.colorButton.azul};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 370px;
  height: 58px;
  bottom: 40px;
`;

export const TextButtonNext = styled.Text`
  color: ${(props) => props.theme.colorText.button};
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  line-height: 27px;
`;
