
import React from "react";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {View , Text, FlatList, Image, Button,
         StyleSheet, TouchableOpacity} from 'react-native';
      
import { URL } from "../../../../../Ip";


const BaiViet= ({route,navigation}) => {


  const {
    image, text, flatlist, body,item,title,
} = styles;
     const {tenDM}= route.params;
    // const {id_DichVu}= route.params; style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    const {data}=route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
            <Icon name="angle-left" color="#eee" size={30} />
          </TouchableOpacity>
          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> {tenDM}</Text>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={({id_BaiViet}, index) => id_BaiViet}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.listItem}
           
                onPress={()=>{navigation.navigate("ChiTietBV",{
                    Ten:item.TenBaiViet,
                    anh: item.HinhAnh,
                    noidung: item.NoiDungBaiViet
                   
                  })}}>
                <Image source={{uri: URL.localhost +'/LuanVan/public/upload/baiviet/'+item.HinhAnh}}
                      style={styles.image} />
              
            
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]}>
                  {item.TenBaiViet}
                </Text>
              </View>
              
            </TouchableOpacity>
            
          )}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
 
    listItem: {
      marginTop: 10,
      marginLeft:10,
      marginRight:10,
      paddingVertical: 5,
      paddingHorizontal:5,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },

    metaInfo: {
      marginLeft: 30,
      
    },

    container: {
      flex:1
    },

    header:{
      flexDirection:'row',
     // flex:1,
      backgroundColor:'#a50000',
      height:60,
      
    },

    backButton:{
      //flex:5,
      justifyContent:'center',
      backgroundColor:'#a50000',
      marginLeft:10
    },

    baoTitle:{
     // flex:6,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#a50000',
      marginLeft:140
    },

    titleHeader:{
      color:'white',
      fontSize:22,

    },

    title: {
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginTop:40,
      fontSize: 16,
    },
  
    text: {
      fontSize: 15,
      color: 'black',
      marginTop: 20,
      marginLeft:25
    },

  
    image: {
      //  marginTop:5,
      height: 70,
      width: 70,
      borderRadius:10

    }, 
  
    item: {
      //  borderWidth:0.5,
      padding: 3,
      borderRadius: 10,
      justifyContent: 'center',

    },
  
    body: {
      flex: 70,
      //justifyContent: 'center',
    },
    
  })
  
  export default BaiViet;
