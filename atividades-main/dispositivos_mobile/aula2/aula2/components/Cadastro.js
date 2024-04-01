import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';

const CadastroProdutoScreen = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');

  const handleCadastro = () => {
    // Lógica para enviar os dados do formulário para o servidor
    console.log('Nome do produto:', nomeProduto);
    console.log('Preço do produto:', precoProduto);
    // Lógica adicional de envio do formulário
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        placeholder="Preço do produto"
        value={precoProduto}
        onChangeText={setPrecoProduto}
        keyboardType="numeric"
      />
      <Pressable text="Cadastrar" onPress={handleCadastro}><Text>Cadastrar</Text></Pressable>
    </View>
  );
};

export default CadastroProdutoScreen;