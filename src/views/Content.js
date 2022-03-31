import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { Head } from '../components/Head';
import { Footer } from '../components/Footer';
import axios from "axios"




const apiMedia = axios.create({baseURL: "https://blog.coursify.me/wp-json/wp/v2/media/"});

const ContentPage = ({route}) =>{
    const [id, setId] = useState(route.params.id ? route.params.id : null)
    const [title, setTitle] = useState(route.params.title ? route.params.title : null)
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState("")
    
    useEffect(async () => {
        let isSub = true;
        if(id) {
            const apiPost = axios.create({baseURL: `https://blog.coursify.me/wp-json/wp/v2/posts/${id}`})
            const response = await apiPost();
            const apiMedia = axios.create({baseURL: `${response.data._links["wp:featuredmedia"][0].href}` })
            const responseMedia = await apiMedia();
            setImg(responseMedia.data.guid.rendered);
            setDatas(response.data.content.rendered.replace(/<[^>]*>?/gm, "").replace(/&.*/g,""));
            setLoading(false);
        }

       
 
        return () => {
            isSub = false
        }
    }, [])
    
    return (
    <>
      <Head/>
      <ScrollView>
        <View>
          { loading && id && <ActivityIndicator color={"#2AB598"} style={styles.Loading}/>}
          {!loading && id && <Text style={styles.postTitle}>{`${title}`.toUpperCase()}</Text>}
          <Image style={styles.postImg} source={{uri: img}} />
          {!loading && id && <Text style={styles.Texto}>{datas}</Text>}
          {!loading && id && !datas && <Text>Nada para Mostrar</Text>}

        </View>
      <Footer/>
      </ScrollView>
    </>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      marginBottom: 5
    },
    post: {
        top: 0,
        width: 235,
        height: 325,
        margin: 38,
        backgroundColor: "#fff",
        elevation: 2,
        shadowColor: "#00000080",
        borderRadius: 12,
        marginEnd:20
    },
    postImg: {
        borderRadius: 20,
        width: 366,
        height: 180,
        left: 20
    },
    postTitle: {
        marginRight: 10,
        alignContent: 'center',
        left: 20,
        marginBottom: 20,
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: "Roboto",
        color: "#2AB598",
        marginTop: 15,
        paddingLeft: 9,
        paddingRight: 9,
        height: 100,
        letterSpacing: 0,
        textTransform: 'lowercase',
        opacity: 1
    },
    postContent: {
        letterSpacing: 0,
        paddingLeft: 9,
        paddingRight: 9,
        fontSize: 15,
        color: "#868686",
        textAlign: "left",
        marginTop: 16
    },
    Texto:{
        marginBottom: 10,
        top: 26,
        color: '#666666',
        marginLeft: 20,
        marginRight:26,
        alignContent: 'center',
        textAlign: 'left',
        letterSpacing: 1,
        fontFamily: 'Roboto',
        fontSize: 18,
        opacity: 1,
        lineHeight: 27
      },
      Loading:{
        marginTop:"18%",
        height: 500,
        alignItems: 'center',
        alignContent:'center', 
        marginBottom: "0%"
      }
    
  });


export {ContentPage};