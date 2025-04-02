import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PesoIdeal = ({ altura }) => {
  const alturaMetros = parseFloat(altura) / 100;

  if (!alturaMetros || alturaMetros <= 0) {
    return <Text style={styles.error}>Altura inválida para calcular o peso ideal.</Text>;
  }

  const pesoIdealMin = (alturaMetros * alturaMetros * 18.5).toFixed(2);
  const pesoIdealMax = (alturaMetros * alturaMetros * 24.9).toFixed(2);

  return (
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