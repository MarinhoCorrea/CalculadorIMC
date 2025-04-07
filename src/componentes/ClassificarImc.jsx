import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ClassificarIMC = ({ imc }) => { // recebe o valor do imc,compara ele com os niveis de IMC e classifica ele 
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade grau 1';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade grau 2';
  } else {
    classificacao = 'Obesidade mórbida';
  }

  return <Text style={styles.classificacao}>{classificacao}</Text>; // retorna um texto falando a classificação
};

const styles = StyleSheet.create({
    classificacao: {
      marginTop: 20,
      fontSize: 24,
      textAlign: 'center',
      color: '#333',
    },
});
    export default ClassificarIMC;
