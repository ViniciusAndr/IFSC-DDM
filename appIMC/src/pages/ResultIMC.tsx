import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface ResultProps{
    IMC: number
}

export function ResultIMC(){
    const navigation = useNavigation();
    const route = useRoute();
    const { IMC } = route.params as ResultProps;

    function calcularIMC(){
        let desc = '';

        if(IMC < 18.5)
            desc = "Abaixo do peso";
        else if(IMC >= 18.6 && IMC <=24.9)
            desc = "Peso ideal";
        else if(IMC >= 25 && IMC <=249.9)
            desc = "Levemente acima do peso";
        else if(IMC >= 30 && IMC <=34.9)
            desc = "Obesidade grau 1";
        else if(IMC >= 35 && IMC <=39.9)
            desc = "Obesidade grau 2";
        else if(IMC >= 40)
            desc = "Obesidade grau 3";


        return desc;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}> IMC: {IMC}  </Text>
            <Text style={styles.formLabel}> { calcularIMC() } </Text>
            <Button
                onPress={() => {navigation.navigate('Infos');} }
                title="Voltar"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    },
  
    formLabel: {
      fontSize: 20,
      color: '#000',
      marginBottom: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  });