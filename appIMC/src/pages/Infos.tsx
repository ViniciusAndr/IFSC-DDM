import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export function Infos(){
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const navigation = useNavigation();

    function handleNavigateToResultIMC(){
        var imc = peso/Math.pow(altura, 2);
        navigation.navigate('ResultIMC', {IMC: imc.toPrecision(4)});
    }

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.formLabel}> Peso  </Text>
                <TextInput 
                    placeholder="Peso" 
                    onChangeText={text => setPeso(text)}
                    style={styles.inputStyle} 
                    keyboardType= "numeric"
                />
                <Text style={styles.formLabel}> Altura </Text>
                <TextInput
                    placeholder="Altura"
                    onChangeText={text => setAltura(text)}
                    style={styles.inputStyle}
                    keyboardType= "numeric"
                />
            </View>
                <Button
                onPress={handleNavigateToResultIMC}
                title="Calcular IMC"
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
    },
    inputStyle: {
      marginBottom: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: '#DCDCDC',
    },
    formText: {
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  });