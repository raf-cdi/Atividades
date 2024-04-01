import { useState, createContext, useContext } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View>
      <Text>Tema: {theme}</Text>
      <Pressable onPress={toggleTheme} title='Alterar tema'/>
    </View>
  );
};

const Counter = () =>{
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Valor: {count}</Text>
      <Pressable onPress={()=>setCount(count+1)} title='Incrementar'/>
    </View>
  );
}

const PressableCallback = () =>{
  return (
    <View>
      <Pressable onPress={() => console.log('Botão clicado!')} title='Press'>
        <Text>Press</Text>
      </Pressable>
    </View>
  )
}

const StateController = () =>{
  const [inputValue, setValue] = useState('');
  const changeText = (e)=>{
    setValue(e);
  }

  return(
    <View>
      <Text>{inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={changeText}
        placeholder="escreva..."
      />
      
    </View>
  )
}


export default function Atividade1({ navigation }) {
  
  return (

    <View style={styles.container}>
      <ThemeProvider>
        <Counter/>
        <ThemeComponent/>
        <PressableCallback/>
        <StateController/>
        <Pressable title="Ir para Tela 2" onPress={() => navigation.navigate('Screen2')}>
        <Text>Ir para Tela 2</Text>
      </Pressable>
      </ThemeProvider>
    </View>
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
