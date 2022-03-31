import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/HomeScreen';
import { ContentPage } from './src/views/Content';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
         <Stack.Screen  name='Home' options={{title: null}} component={HomeScreen} />
         <Stack.Screen name='ContentPage' component={ContentPage}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

