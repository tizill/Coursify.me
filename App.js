import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/views/HomeScreen';
import { ContentPage } from './components/views/Content';

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
   // backgroundColor: '#fff',
   // alignItems: 'center',
//justifyContent: 'center',
  },
});
export default App;

