import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface EquipoProps {
  nombre: string;
}

const Equipo: React.FC<EquipoProps> = ({ nombre }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.equipoContainer}>
      <Image source={require('../assets/images/football.png')} style={styles.image} />
      <Text style={styles.nombre}>{nombre}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver más"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  equipoContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    width: 100, // Ajusta según tus necesidades
  },
  image: {
    width: 50,
    height: 50,
  },
  nombre: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Equipo;
