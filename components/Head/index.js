import React from 'react';
import { Text, View, Image, StyleSheet  } from 'react-native'
import logo from "../../assets/logo.png"

const Head = () => {
    return (
      <View style={style.container}>
          <Image source={logo} style={style.logo} /> 
          <View>
            <View style={style.iconBackground}>
              <View style={style.icon} />
              <View style={style.icon} />
              <View style={style.icon} />
            </View>
          </View>
      </View>
    );
};

const style = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 17,
    elevation: 5,
    shadowColor: "#00000080",
  },
  logo:{
    top:20,
    width: 169,
    height: 50,
  },
  iconBackground: {
    top:20,
    backgroundColor: "#3CC6AA",
    width: 37,
    height: 37,
    borderRadius: 50,
    padding: 8,
  },
  icon : {
    resizeMode: 'repeat',
    backgroundColor: "#FFF",
    width: 21,
    height: 3,
    borderRadius: 30,
    marginTop: 3
  }
})

export { Head }