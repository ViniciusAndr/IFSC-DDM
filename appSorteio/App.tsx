import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secundValue, setSecondValue] = useState(0);
  const [numeroGerado, setNumeroGerado] = useState(0);

  function sortRandomNumber(){
    let max = 0;
    let min = 0;

    if(firstValue > secundValue){
      max = Number(firstValue);
      min = Number(secundValue);
    }
    else{
      max = Number(secundValue);
      min = Number(firstValue);
    }

    setNumeroGerado(Math.floor(Math.random() * (max - min) + min));

    setFirstValue(0);
    setSecondValue(0);
  }

  return (
    <View
      style={styles.container}>
        <View style={styles.numberContainer}>
          <Text style={styles.text} >
            Preencha com o primeiro número.
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setFirstValue(Number(text))}
            keyboardType = 'numeric'
            value={firstValue.toString()}
          />
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.text}>
            Preencha com o segundo número.
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType = 'numeric'
            onChangeText={text => setSecondValue(Number(text))}
            value={secundValue.toString()}
          />
        </View>
        <Button
          onPress={sortRandomNumber}
          title="Sortear"
          color="#841584"
          
          accessibilityLabel="Sortear"
          />
          <Text style={styles.textSorteado}>
            Número sorteado: {numeroGerado}
          </Text>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
  },
  numberContainer: {
    marginBottom: 15
  },
  textSorteado: { 
    fontSize: 20,
    position: 'relative',
    marginTop: 50,
    fontWeight: 'bold'
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1 , 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 17
  }
});
