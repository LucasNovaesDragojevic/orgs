import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, FlatList, View, Image, Text } from 'react-native'
import Basket from './components/Basket'
import Topo from '../../componentes/Topo'
import useTextos from '../../hooks/useTextos'
import topo from '../../assets/produtores/topo.png'

export default function Producer() {
	const route = useRoute()
    const { tituloProdutor, tituloCestas } = useTextos()
    const { nome, imagem, cestas } = route.params
    const ListHeader = () => {
        return <>
            <Topo titulo={tituloProdutor}
                imagem={topo}
                altura={150}
            />
            <View style={styles.conteudo}>
                <View style={styles.logo}>
                    <Image source={imagem} style={styles.produtorImage}/>
                    <Text style={styles.produtor}>{nome}</Text>
                </View>
                <Text style={styles.cestas}>{tituloCestas}</Text>
            </View>
        </>
    }

	return <FlatList
        ListHeaderComponent={ListHeader}
        data={cestas}
        renderItem={({item}) => <Basket {...item} produtor={{nome, imagem}}/>}
        style={styles.lista}
    />
}

const styles = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
