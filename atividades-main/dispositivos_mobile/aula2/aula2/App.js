import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroProdutoScreen from './components/Cadastro';
import { CadastroScreen, PerfilScreen, HomeScreen } from './components/Screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="CADASTRO_PRODUTO" component={CadastroProdutoScreen} options={{ title: 'Cadastro de Produto' }} />
        <Stack.Screen name="CADASTRO" component={CadastroScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="PERFIL" component={PerfilScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
