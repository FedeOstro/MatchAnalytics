import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homeScreen from '../../components/navigation/homeScreen';
import verEquipo from '../../components/navigation/verEquipo'


const Stack = createNativeStackNavigator();

function MyStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={homeScreen}
        />
        <Stack.Screen 
          name="verEquipo" 
          component={verEquipo} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack


