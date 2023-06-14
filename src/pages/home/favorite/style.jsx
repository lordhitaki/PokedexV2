import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgrounds.main};
  border-top-width: 1px;
  border-color: #f2f2f2;
`;

export const BoxImg = styled.View`
  bottom: 40px;
`;

export const BoxText = styled.View`
  width: 80%;
  gap: 15px;
`;

export const Info = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colorText.main};
`;

export const BoxButton = styled.View`
  width: 90%;
  margin-top: 20px;
`;

export const SubInfo = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  text-align: center;
`;
