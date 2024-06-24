import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface PartidoProps {
  numero: string;
  fecha: string;
  puntos: string;
  equipos: string;
}

const Partido: React.FC<PartidoProps> = ({ numero, fecha, puntos, equipos }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.partidoContainer}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/images/football.png')} style={styles.icon} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.partidoText}>Partido #{numero}</Text>
        <Text style={styles.fechaText}>Fecha: {fecha}</Text>
        <Text style={styles.puntosText}>Puntos: {puntos}</Text>
        <Text style={styles.equiposText}>{equipos}</Text>
      </View>
    </View>
  );
};
//onPress={() => navigation.navigate('VerPartido')}
const styles = StyleSheet.create({
  partidoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  partidoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fechaText: {
    fontSize: 14,
  },
  puntosText: {
    fontSize: 14,
  },
  equiposText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});

export default Partido;
