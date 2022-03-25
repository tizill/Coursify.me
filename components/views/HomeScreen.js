import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView  } from 'react-native';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { NavigationContainer,  useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Head } from '../Head';
import { Footer } from '../Footer';
import { Post } from '../Post';
import { ContentPage } from './Content';

const HomeScreen = ({ navigation }) => {
    return (
        <>
          <Head />
          <ScrollView>
          <Post categori={82} navigation={navigation} />
          <Post categori={234} navigation={navigation} />
          <Post categori={1288} navigation={navigation} />
          <Footer/>
          </ScrollView>
        </>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
     // alignItems: 'center',
  //justifyContent: 'center',
    },
    header: {
      backgroundColor: '#FAFAFA',
      position: 'relative',
      width: '100%',
      height: 100,
      left: 0,
      top: 0,
      shadowColor: '#000',
      shadowOffset: { height: 4},
      shadowOpacity: 0.25,
      shadowRadius: 10
    },
  
    Logo: {
      width: 128,
      height: 35,
      left: 16,
      top: '40%'
    },
  
  });
export {HomeScreen};