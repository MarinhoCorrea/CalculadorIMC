import { View, TextInput,Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FormIMC from './Form';
import {imcCalculado} from './Form';
const [classificacao, setClassificacao] = useState(null);
    const ClassificarIMC = (imcCalculado) => {
        if (imcCalculado < 18.5) {
        setClassificacao('Abaixo do peso');
        } else if (imcCalculado < 24.9) {
        setClassificacao('Peso normal');
        } else if (imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
        } else if (imcCalculado < 34.9) {
        setClassificacao('Obesidade grau 1');
        } else if (imcCalculado < 39.9) {
        setClassificacao('Obesidade grau 2');
        } else {
        setClassificacao('Obesidade Morbida');
        }
    };
    export default ClassificarIMC;