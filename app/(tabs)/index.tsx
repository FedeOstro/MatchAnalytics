import React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, Button } from 'react-native';
import Equipo from '@/components/Equipo';
import Partido from '@/components/Partido';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import verEquipo from '../../components/navigation/verEquipo.tsx'
import { useNavigation } from 'expo-router';
//const Stack = NavigationContainer();



const app = () => {
  const navigationHook = useNavigation();
  const pasarAquipo = () => {
  //navigationHook.navigate('verEquipo')
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={require('../../assets/images/log.png')} style={styles.logo} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcome}>Bienvenido Federico!!</Text>
        
        <Text style={styles.sectionTitle}>Equipos</Text>
        <View style={styles.equiposContainer}>
          <Equipo nombre="Equipo 1" />
          <Equipo nombre="Equipo 2" />
          <Equipo nombre="Equipo 3" />
        </View>
        <View style={styles.addButton}>
          <Button
          title='Añadir Nuevo'
          />
        </View>
        
        <Text style={styles.sectionTitle}>Partidos</Text>
        <View style={styles.partidosContainer}>
          <Partido numero="1" fecha="24/4" puntos="34-12" equipos="Equipo 3 vs As.Ingenieros" />
          <Partido numero="2" fecha="20/3" puntos="3-1" equipos="Equipo 1 vs Dep.Tortugas" />
          <Partido numero="3" fecha="12/2" puntos="92-80" equipos="Equipo 2 vs Dep.Puerrreydon" />
        </View>
        <View style={styles.addButton}>
          <Button 
            title="Anotar"
          />
        </View>
      </ScrollView>
    </View>
  );
}  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc66',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  equiposContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
  partidosContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default app
