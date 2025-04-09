import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Result from './Result';
import ClassificarIMC from './ClassificarImc';
import PesoIdeal from './PesoIdeal';

const FormIMC = () => {
  // declaraçâo de variaveis
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    // se tem peso e altura transforma altura de cm para Metros e calcula IMC
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    }
    // Validação entrada de dados
    if (isNaN(altura) || altura <= 0) {
      alert('Por favor, insira uma altura válida.');
    }
    if (isNaN(peso) || peso <= 0) {
      alert('Por favor, insira um peso válido.');
    }
  };

  return (
    <View style={styles.formContainer}>
      // Caixas de entradas para Peso e Altura
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
      <Button title="Calcular IMC" onPress={calcularIMC} /> // ao pressionar botão calcula IMC
      {imc && <Result imc={imc} />} // imprime o Result na tela
      {imc && <ClassificarIMC imc={imc} />} // imprime a Clasificação do imc na tela 
      {altura && <PesoIdeal altura={altura} />} imprime o Peso Ideal na tela 
    </View>
  );
};
// Estilização 
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
