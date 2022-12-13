import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import success from '../../assets/success.png'
import VoltarSVG from '../../assets/voltar.svg'
import useTextos from '../../hooks/useTextos'

export default function Summary() {
    const {
        purchaseMessage,
        topBarPurchaseSummary,
        titlePurchaseSummary,
        toHomeButton,
        toProducerButton
    } = useTextos()

    const navigation = useNavigation()
    const route = useRoute()

    const purchase = route.params.compra;
    const message = purchaseMessage?.replace('$NAME', purchase.nome);

    return <View style={styles.screen}>
        <View style={styles.topbar}>
            <TouchableOpacity
                style={styles.topoVoltar}
                onPress={() => navigation.goBack()}>
            <VoltarSVG />
            </TouchableOpacity>

            <Text style={styles.topoTexto}>{topBarPurchaseSummary}</Text>
        </View>

        <View style={styles.conteudo}>
            <Image source={success} style={styles.sucesso} />

            <View style={styles.textos}>
                <Text style={styles.titulo}>{titlePurchaseSummary}</Text>
                <Text style={styles.mensagem}>{message}</Text>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.popToTop()}>
                    <Text style={styles.textoBotao}>{toHomeButton}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botao, styles.botaoProdutor]}
                    onPress={() => navigation.pop(2)}>
                    <Text style={[styles.textoBotao, styles.textoBotaoProdutor ]}>{toProducerButton}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    topbar: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: 58,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingVertical: 16,
        paddingHorizontal: 40
    },
    topoTexto: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    topoVoltar: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 16,
        top: 17
    },
    conteudo: {
        zIndex: 0
    },
    sucesso: {
        width: "100%",
        height: undefined,
        aspectRatio: 360 / 351
    },
    textos: {
        paddingHorizontal: 16
    },
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646"
    },
    mensagem: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
    botaoProdutor: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ECECEC"
    },
    textoBotaoProdutor: {
        color: "#464646"
    }
})