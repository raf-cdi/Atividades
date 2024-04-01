
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Atividade1 from './componentes/atividade1';
import FlexboxExample from './componentes/componente';
import FlexboxExample2 from './componentes/flexExemplo';

const Stack = createStackNavigator();


export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Atividade1} />
          <Stack.Screen name="Screen2" component={FlexboxExample} />
          <Stack.Screen name="Screen3" component={FlexboxExample2}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
