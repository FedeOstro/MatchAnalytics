import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PartidoProps {
  numero: string;
  fecha: string;
  puntos: string;
  equipos: string;
}

const Partido: React.FC<PartidoProps> = ({ numero, fecha, puntos, equipos }) => {
  return (
    <View style={styles.partidoContainer}>
      <Text style={styles.partidoText}>Partido #{numero}</Text>
      <Text style={styles.fechaText}>Fecha: {fecha}</Text>
      <Text style={styles.puntosText}>Puntos: {puntos}</Text>
      <Text style={styles.equiposText}>{equipos}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  partidoContainer: {
    backgroundColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Partido;
