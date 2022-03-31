import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Head } from '../components/Head';
import { Footer } from '../components/Footer';
import { Post } from '../components/Post';


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