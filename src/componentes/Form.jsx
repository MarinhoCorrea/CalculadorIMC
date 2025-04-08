import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Result from './Result';
import ClassificarIMC from './ClassificarImc';
import PesoIdeal from './PesoIdeal';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
       if (isNaN(alturaMetros) || alturaMetros <= 0) {
        alert('Por favor, insira uma altura válida.');
        return;
        }
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && <Result imc={imc} />}
      {imc && <ClassificarIMC imc={imc} />}
      {altura && <PesoIdeal altura={altura} />}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default FormIMC;
