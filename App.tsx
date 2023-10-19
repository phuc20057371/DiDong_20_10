import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import  Home  from './src/Home'
import  Screen1  from './src/screen1/Screen1'
import  Screen2  from './src/screen2/Screen2'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen 
          name='Screen1'
          component={Screen1}
          options={{title:'Chat'}}
        />
        <Stack.Screen 
          name='Screen2'
          component={Screen2}
          options={{title:'Search'}}
        />
          
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
