import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import But from '../buttons/but';
import * as Styled from './styles';

export default function FilterType({ onTipoSelected }) {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [tipo, setTipo] = useState('');
  const [button, setButton] = useState({
    name: 'Todos os tipos',
    type: 'All',
    backgroundColor: 'filter',
    color: 'filter',
  });

  const handlePress = (type, name, backgroundColor, color) => {
    setTipo(type);
    setModalVisible(false);
    onTipoSelected(type);
    setButton({ name: name, type: type, color: color, backgroundColor: backgroundColor });
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
                name={t('Todos os tipos')}
                backgroundColor={'filter'}
                color={'filter'}
                onPress={() => handlePress('', 'Todos os tipos', 'filter', 'filter')}
              />
              <But
                name={t('Água')}
                backgroundColor={'Agua'}
                color={'button2'}
                onPress={() => handlePress('water', 'Água', 'Agua', 'button2')}
              />
              <But
                name={t('Dragão')}
                backgroundColor={'Dragao'}
                color={'button'}
                onPress={() => handlePress('dragon', 'Dragão', 'Dragao', 'button')}
              />
              <But
                name={t('Elétrico')}
                backgroundColor={'Elétrico'}
                color={'button2'}
                onPress={() => handlePress('electric', 'Elétrico', 'Elétrico', 'button2')}
              />
              <But
                name={t('Fada')}
                backgroundColor={'Fada'}
                color={'button2'}
                onPress={() => handlePress('fairy', 'Fada', 'Fada', 'button2')}
              />
              <But
                name={t('Fantasma')}
                backgroundColor={'Fantasma'}
                color={'button'}
                onPress={() => handlePress('ghost', 'Fantasma', 'Fantasma', 'button')}
              />
              <But
                name={t('Fogo')}
                backgroundColor={'Fogo'}
                color={'button2'}
                onPress={() => handlePress('fire', 'Fogo', 'Fogo', 'button2')}
              />
              <But
                name={t('Gelo')}
                backgroundColor={'Gelo'}
                color={'button2'}
                onPress={() => handlePress('ice', 'Gelo', 'Gelo', 'button2')}
              />
              <But
                name={t('Grama')}
                backgroundColor={'Grama'}
                color={'button2'}
                onPress={() => handlePress('grass', 'Grama', 'Grama', 'button2')}
              />
              <But
                name={t('Inseto')}
                backgroundColor={'Inseto'}
                color={'button2'}
                onPress={() => handlePress('bug', 'Inseto', 'Inseto', 'button2')}
              />
              <But
                name={t('Lutador')}
                backgroundColor={'Lutador'}
                color={'button'}
                onPress={() => handlePress('fighting', 'Lutador', 'Lutador', 'button')}
              />
              <But
                name={t('Normal')}
                backgroundColor={'Normal'}
                color={'button2'}
                onPress={() => handlePress('normal', 'Normal', 'Normal', 'button2')}
              />
              <But
                name={t('Noturno')}
                backgroundColor={'Noturno'}
                color={'button2'}
                onPress={() => handlePress('dark', 'Noturno', 'Noturno', 'button2')}
              />
              <But
                name={t('Metal')}
                backgroundColor={'Metal'}
                color={'button2'}
                onPress={() => handlePress('steel', 'Metal', 'Metal', 'button2')}
              />
              <But
                name={t('Pedra')}
                backgroundColor={'Pedra'}
                color={'button2'}
                onPress={() => handlePress('rock', 'Pedra', 'Pedra', 'button2')}
              />
              <But
                name={t('Psíquico')}
                backgroundColor={'Psiquico'}
                color={'button2'}
                onPress={() => handlePress('psychic', 'Psíquico', 'Psiquico', 'button2')}
              />
              <But
                name={t('Terreste')}
                backgroundColor={'Terrestre'}
                color={'button2'}
                onPress={() => handlePress('ground', 'Terreste', 'Terrestre', 'button2')}
              />
              <But
                name={t('Venenoso')}
                backgroundColor={'Venenoso'}
                color={'button2'}
                onPress={() => handlePress('poison', 'Venenoso', 'Venenoso', 'button2')}
              />
              <But
                name={t('Voador')}
                backgroundColor={'Voador'}
                color={'button2'}
                onPress={() => handlePress('flying', 'Voador', 'Voador', 'button2')}
              />
            </Styled.Scroll>
          </Styled.ModalView>
        </Styled.BoxModal>
      </Styled.Modal>
      <Styled.ButtonOpen
        onPress={() => setModalVisible(true)}
        backgroundColor={button.backgroundColor}
        color={button.color}
      >
        <Styled.FilterText>{t(button.name)}</Styled.FilterText>
        <Styled.BoxIcone>
          <Styled.Icone name="angle-down" />
        </Styled.BoxIcone>
      </Styled.ButtonOpen>
    </Styled.BoxModal>
  );
}
