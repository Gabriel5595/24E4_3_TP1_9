import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Result from './components/Result';

export default function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (input) => {
    setNumber(input);
  };

  const checkNumber = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      setResult(num % 2 === 0 ? 'Par' : 'Ímpar');
    } else {
      setResult('Por favor, insira um número válido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verifique se o número é Par ou Ímpar</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={handleInputChange}
        keyboardType="numeric"
        placeholder="Digite um número"
      />
      <Button title="Verificar" onPress={checkNumber} />
      {result && <Result result={result} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    fontSize: 18,
  },
});
