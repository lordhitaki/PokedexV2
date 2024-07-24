import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';

import * as Styled from './style';

import CardList from '../../../components/cardList';
import FilterType from '../../../components/filterTypes';
import FilterOrder from '../../../components/filterOrder';

export default function Pokedex() {
  const route = useRoute();

  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [onFilter, onSetFilter] = useState('');
  const limit = route.params?.limit;

  return (
    <Styled.Container>
      <Styled.SearchInp
        placeholder={t('Procurar Pokemon')}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Styled.BoxIcone>
        <Styled.Icone name="search" />
      </Styled.BoxIcone>
      <Styled.BoxFilters>
        <Styled.BoxTypeFilter>
          <FilterType onTipoSelected={(tipo) => setTipoSelecionado(tipo)} />
          <FilterOrder onFilterSelected={(filtro) => onSetFilter(filtro)} />
        </Styled.BoxTypeFilter>
      </Styled.BoxFilters>
      <CardList searchText={searchText} tipo={tipoSelecionado} filtro={onFilter} limit={limit} />
    </Styled.Container>
  );
}
