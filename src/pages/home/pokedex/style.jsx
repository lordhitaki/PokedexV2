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
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const BoxTypeFilter = styled.View`
  flex-direction: row;
  width: 100%;
`;
