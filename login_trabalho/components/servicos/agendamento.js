import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'
import firebase from 'firebase'

export default function Agendamento({navigation}){
  
  return(
    <>
      <View>
        <Text>Alinhamento</Text>
        <Text>Balanceamento</Text>
        <Text>Troca de Oleo</Text>
        <Text>Pintuta</Text>
        <Div style={estilos.option}>
          <Text>Data Entrada: </Text>
          <TextInput/>
          <TextInput/>
        </Div>
      </View>
    </>
  )
}