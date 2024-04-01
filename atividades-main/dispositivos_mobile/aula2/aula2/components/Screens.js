import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Tela 'CADASTRO'
const CadastroScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Botão de retorno para a tela inicial ('HOME') */}
      <Pressable text="Voltar para HOME" onPress={() => navigation.navigate('HOME')}><Text>Home</Text></Pressable>
      {/* Restante do conteúdo da tela de cadastro */}
    </View>
  );
};

// Tela 'PERFIL'
const PerfilScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Botão de retorno para a tela inicial ('HOME') */}
      <Pressable text="Voltar para HOME" onPress={() => navigation.navigate('HOME')}><Text>Home</Text></Pressable>
      {/* Restante do conteúdo da tela de perfil */}
    </View>
  );
};

// Tela inicial ('HOME')
const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Pressable text='Perfil' onPress={() => navigation.navigate('PERFIL')}><Text>Perfil</Text></Pressable>
      <Pressable text='Cadastro' onPress={() => navigation.navigate('CADASTRO')}><Text>Cadastro</Text></Pressable>
      <Pressable text='Cadastro Produto' onPress={() => navigation.navigate('CADASTRO_PRODUTO')}><Text>Cadastro Produto</Text></Pressable>
    </View>
  );
};

export { CadastroScreen, PerfilScreen, HomeScreen };