import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface EquipoProps {
  nombre: string;
}

const Equipo: React.FC<EquipoProps> = ({ nombre }) => {
  return (
    <View style={styles.equipoContainer}>
      <Image source={require('../assets/images/football.png')} style={styles.image} />
      <Text style={styles.nombre}>{nombre}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  equipoContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  nombre: {
    fontSize: 16,
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Equipo;
