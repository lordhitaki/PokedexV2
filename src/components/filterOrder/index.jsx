import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import But from '../buttons/but';
import * as Styled from './styles';

export default function FilterType({ onFilterSelected, defaultFilter }) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(defaultFilter);
  const [button, setButton] = useState({ name: 'Ordem crescente', filtro: defaultFilter });

  const handlePress = (value, name) => {
    setFilter(value);
    setModalVisible(false);
    onFilterSelected(value);
    setButton({ name: name });
  };

  return (
    <Styled.BoxModal>
      <Styled.Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Styled.BoxModal>
          <Styled.ModalView>
            <Styled.Scroll showsVerticalScrollIndicator={false}>
              <But
                name={t('Ordem Crescente')}
                backgroundColor={'filter'}
                color={'filter'}
                onPress={() => handlePress('Menor', 'Ordem Crescente')}
              />
              <But
                name={t('Ordem Decrescente')}
                backgroundColor={'filter'}
                color={'filter'}
                onPress={() => handlePress('Maior', 'Ordem Decrescente')}
              />
              <But
                name={'A - Z'}
                backgroundColor={'filter'}
                color={'filter'}
                onPress={() => handlePress('A-Z', 'A - Z')}
              />
              <But
                name={'Z - A'}
                backgroundColor={'filter'}
                color={'filter'}
                onPress={() => handlePress('Z-A', 'Z - A')}
              />
            </Styled.Scroll>
          </Styled.ModalView>
        </Styled.BoxModal>
      </Styled.Modal>
      <Styled.ButtonOpen
        onPress={() => setModalVisible(true)}
        backgroundColor={'filter'}
        color={'filter'}
      >
        <Styled.FilterText>{t(button.name)}</Styled.FilterText>
        <Styled.BoxIcone>
          <Styled.Icone name="angle-down" />
        </Styled.BoxIcone>
      </Styled.ButtonOpen>
    </Styled.BoxModal>
  );
}
