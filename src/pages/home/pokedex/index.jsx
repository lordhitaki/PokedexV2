import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './style';

import CardList from '../../../components/cardList';
import FilterType from '../../../components/filterTypes';
import FilterOrder from '../../../components/filterOrder';

export default function Pokedex() {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [onFilter, onSetFilter] = useState('');

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
      <CardList searchText={searchText} tipo={tipoSelecionado} filtro={onFilter} />
    </Styled.Container>
  );
}
