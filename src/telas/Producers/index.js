import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Produtores({ melhoresProdutores }) {
  const [ showMessage, setShowMessage ] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const lista = useProdutores(melhoresProdutores)
  const { tituloProdutores, purchaseMessage } = useTextos()
  const purchaseName = route.params?.compra.nome
  const purchaseTimestamp = route.params?.compra.timestamp
  const fullMessage = purchaseMessage?.replace('$NAME', purchaseName)

  useEffect(() => {
    setShowMessage(!!purchaseName)
    let timeout
    if (!!purchaseName) {
      timeout = setTimeout(() => {
        setShowMessage(false)
      }, 3000) 
    }
    return () => clearTimeout(timeout)
  }, [purchaseTimestamp])

  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      { showMessage && <Text style={estilos.purchase}>{fullMessage}</Text> }
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item} aoPressionar={() => {navigation.navigate('Producer', item)}} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  purchase: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26
  }
})
