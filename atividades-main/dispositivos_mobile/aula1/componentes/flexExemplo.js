import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const FlexExemplo = ({ boxColors }) => {
  const [secondBoxColor, setSecondBoxColor] = useState('blue');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.listContainer}>
        {boxColors.map((color, index) => (
          <View key={index} style={[styles.box, { backgroundColor: color }]}>
            <Text>Caixa {index + 1}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default FlexExemplo;
