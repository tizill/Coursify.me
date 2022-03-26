import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableHighlight, Linking, TouchableOpacity  } from 'react-native';
import logo from "../../assets/logoFooter.png";

const Footer = () => {
    return (
      <View style={style.container}>
          <Image style={style.logoFooter} source={logo}></Image>
          <View>
              <Text style={style.Texto}>O Coursify.me é uma plataforma de ensino a distancia, onde qual quer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.</Text>
              <TouchableOpacity style={style.button} onPress={() => {Linking.openURL('https://coursify.me/')}} underlayColor='#fff'>
                   <Text style={[ style.textButton]}>Quero Conhecer a plataforma !</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
};

const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: 428,
    height: 222,
    backgroundColor: "#1ABC9C",
    opacity: 1,
    alignItems: 'center',
    flex: 1
  },
  Texto:{
      textAlign: 'center',
      top: 30,
      left: -10,
      fontStyle: 'normal',
      width: 350,
      height:50,
      fontFamily: 'Roboto',
      letterSpacing: 0,
      color:'#FFFFFF',
      opacity:1
  },
  logoFooter: {
     top: 20,
     left: -10
  },
  button:{
      top: 40,
      marginRight: 40,
      marginLeft: 30,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#FFA900',
      borderRadius: 60,
      borderWidth: 1,
      borderColor: '#FFA900',
      opacity: 2,
  },
  textButton:{
    color: '#fff',
    textAlign: 'center',
  }
})

export { Footer }