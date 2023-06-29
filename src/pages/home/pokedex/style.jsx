import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.backgrounds.main};
`;

export const SearchInp = styled.TextInput.attrs((props) => ({
  placeholderTextColor: '#999',
}))`
  width: 90%;
  height: 50px;
  border-radius: 30px;
  border-width: 1px;
  font-size: 16px;
  padding-left: 40px;
  border-color: ${(props) => props.theme.borderButton.main};
  color: ${(props) => props.theme.borderButton.main};
  margin-top: 20px;
`;

export const BoxIcone = styled.View`
  position: absolute;
  left: 35px;
  top: 13px;
  margin-top: 20px;
`;

export const Icone = styled(Icon)`
  font-size: 20px;
  color: ${(props) => props.theme.borderButton.main};
`;

export const BoxFilters = styled.View`
  width: 100%;
  align-items: center;
  top: 30px;
  right: 90px;
  flex-direction: row;
`;
export const BoxTypeFilter = styled.View`
  z-index: 1;
  width: 100%;
`;
export const BoxTypeFilter1 = styled.View`
  position: absolute;
  width: 100%;
  left: 180px;
`;
