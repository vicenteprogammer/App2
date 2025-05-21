import React from "react"
import { View, Text } from "react-native"

export default function Contacts({ navigation }) {
    return (
        <View>
            <View>
                <Text>Vicente</Text>
                <Text>Telefone: (89) 98473-9585</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                        {
                            nome: 'Vicente Junior',
                            telefone: '(89) 98473-9585',
                            endereco: 'Rua 2',
                            numero: '34',
                            email: 'vicente@gmail.com'
                        }
                    )}
                >Informação...</Text>
            </View>
            <View>
                <Text>Davi</Text>
                <Text>Telefone: (89) 98983-950985</Text>
                <Text
                    onPress={() => navigation.navigate('Information')}
                >Informação...</Text>
            </View>

        </View>



    )
}