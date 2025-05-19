import React from "react"
import { NavigationConatiner } from "@react-navigation/native"
import { createStackNavigation } from "@react-navigation/stack"

import Contacts from "./src/pages/Contacts"
import Information from "./src/pages/Information"

const Stack = createStackNavigation()
export default function App(){
  return(
    <NavigationConatiner>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts} /> 
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationConatiner>
  )
}