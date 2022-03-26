import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, FlatList, SafeAreaView, StatusBar, ActivityIndicator, TouchableHighlight, TouchableOpacity } from 'react-native'
import axios from "axios"


const apiMedia = axios.create({baseURL: "https://blog.coursify.me/wp-json/wp/v2/media/"})
const categoriList = {
    82: "Cursos Online",
    234 : "Markenting Digital",
    1288: "Tutorial",
    732: "corporate-training",
    1171: "Educação Online",
}
function PostItem ({id, title, media, content, navigation}) {
    const [img, setImg] = useState("")
    Promise.all([
        apiMedia.get(`?include=${media}`)
    ]).then(data => {
        setImg(data[0].data[0].source_url)
    })
    return(
        
    <TouchableOpacity onPress={() => navigation.navigate("ContentPage", {id, title})}>
      <View style={styles.post}>
         <Image style={styles.postImg} source={{uri: img}} />
          <Text style={styles.postTitle}>
              {`${title}`}
          </Text>
          <Text style={styles.postContent} numberOfLines={4}>
              {`${content}`}
          </Text>
          <Text style={styles.postMore}>
              Leia Mais
          </Text>
      </View>
    </TouchableOpacity>
    )
}

//https://blog.coursify.me/?p=5034
const Post = ({ categori, navigation }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const apiPost = axios.create({baseURL:`https://blog.coursify.me/wp-json/wp/v2/posts?categories=${categori}`})
    useEffect(async () => {
        const response = await apiPost.get();
        if (response.status === 200){
            setData(response.data);
            setLoading(false);
            
        }
    }, [])
    
    const postCurso = ({item}) => {
        const content = item.excerpt.rendered.replace(/<p>/g, "").replace(/&.*/g,"")
        return (
            <PostItem navigation={navigation} id={item.id} title={item.title.rendered} media={item.featured_media} content={content} />
            )
        }
        return (
            
        <SafeAreaView style={styles.container}>
            { loading && <ActivityIndicator color={"#2AB598"} style={styles.Loading}/>}
            { !loading && <Text style={styles.Texto}>{categoriList[categori].toUpperCase()}</Text>}
            { !loading &&  <Text style={styles.VejaMais}>VER MAIS ►</Text> }
            <FlatList data={data} renderItem={postCurso} horizontal={true} />
            <View>
                {loading && !data && <Text>Loading</Text> }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      marginTop: 30,
      marginBottom: 5,
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
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        width: "100%",
        height: 103,
        resizeMode: 'stretch'
    },
    postTitle: {
        fontSize: 17,
        fontFamily: "Roboto",
        color: "#2AB598",
        marginTop: 15,
        paddingLeft: 9,
        paddingRight: 9,
        height: 44
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
    postMore:{
        letterSpacing: 0,
        fontSize: 16,
        color: "#FDA506",
        paddingLeft: 9,
        paddingRight: 9,
        marginTop: 15
    },
    Texto:{
        top: 20,
        left: 38,
        width: 300,
        height: 27,
        textAlign: 'left',
        letterSpacing: 0,
        fontFamily: 'Roboto',
        color: '#2AB598',
        fontSize: 20,
        fontWeight: 'bold',
      },
      VejaMais:{
        top: -7,
        left: 295,
        width: 95,
        height: 22,
        textAlign: 'right',
        letterSpacing: 0,
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontSize: 17,
        color:'#535353',
        opacity: 1
        
      },
      Loading:{
        alignContent:'center', 
        marginBottom: 63
      }
    
  });
export { Post }