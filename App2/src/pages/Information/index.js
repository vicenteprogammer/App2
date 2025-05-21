import React  from "react";
import { View, Text } from "react-native";

export default function Information({ route }){
    return(
        <View>
            <Text>Informações dos contatos</Text>
            <Text>Nome: {route.params?.nome} </Text>
            <Text>Telefone: {route.params?.telefone} </Text>
            <Text>Endereço: {route.params?.endereco} </Text>
            <Text>N°: {route.params?.numero} </Text>
            <Text>Email: {route.params?.email} </Text>
        </View>
    )
}