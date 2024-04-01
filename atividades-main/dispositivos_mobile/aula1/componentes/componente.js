import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const FlexboxExample = ({ navigation }) => {
  const [color1, setColor1] = useState('#d3d3d3');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor1(randomColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.item, { backgroundColor: color1 }]}>
        <Text>Elemento 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Elemento 2</Text>
      </View>
      <Pressable title="Alterar Cor" style={styles.Pressable} onPress={changeColor}>
      </Pressable>
      <Pressable title="Voltar para Tela 1" onPress={() => navigation.navigate('Screen1')} />
      <Pressable title="Ir Para flexExemplo" onPress={() => navigation.navigate('Screen3', {
        imageUrl:'https://img.elo7.com.br/product/zoom/1F17541/adesivo-de-parede-infantil-colorido-bolinhas-circulos-quarto-bebe.jpg', 
        boxColors:['red', 'green', 'blue']
      })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  item: {
    padding: 10,
    borderRadius: 5,
  },
  Pressable: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  PressableText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default FlexboxExample;
