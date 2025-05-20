import React from "react"
import { View, Text } from "react-native"

export default function Contacts({navigation}){
    return(
        <View>
            <Text>Vicente</Text>
            <Text
            onPress={()=> navigation.navigate('Information')}
            >Informação...</Text>
        </View>
    )
}