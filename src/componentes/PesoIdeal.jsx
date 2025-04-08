import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PesoIdeal = ({ altura }) => { // inicalização com arrow function
  const alturaMetros = parseFloat(altura) / 100 ; // transforma a altura de CM para Metros e atribuí o valor para a variavel alturaMetros

  if (isNaN(alturaMetros) || alturaMetros <= 0) { // caso  alturaMetros tiver valor que não seja número ou for <= 0 então retornará a mensagem
    return <Text style={styles.error}>Altura inválida para calcular o peso ideal.</Text>;
  }
  // cálculo e atibuição para as variáveis dos pesos ideias
  const pesoIdealMin = (alturaMetros * alturaMetros * 18.5).toFixed(2);
  const pesoIdealMax = (alturaMetros * alturaMetros * 24.9).toFixed(2); 
  return ( // retorna os valores das variáveis de pesos ideais 
    <Text style={styles.pesoIdeal}>
      Peso Ideal Mínimo: {pesoIdealMin} kg{'\n'}
      Peso Ideal Máximo: {pesoIdealMax} kg
    </Text>
  );
};

const styles = StyleSheet.create({
  pesoIdeal: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
  error: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
});

export default PesoIdeal;
