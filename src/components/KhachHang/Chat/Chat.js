


import React, { Component, useState, useEffect } from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, ScrollView, Image, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { URL } from '../../../../Ip';

 var URL_DV= URL.localhost+"/App_API/dichvu.php";
//var URL_ChitietDV= URL.localhost+"/App_API/ChiTietDV.php";
 var URL_ChitietDV= URL.localhost+"/App_API/LoaiVeDV.php";
var URL_PT=  URL.localhost+"/App_API/nhanvien.php";


const Chat= ({route,navigation}) => {

    const [id_KhachHang, setid_KhachHang] = useState('');
  // };

  const [bio, setBio] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('id_KhachHang').then(responseJson => {
      setid_KhachHang(responseJson);
    });
  }, []);


  const danhsach= (id) =>{
    console.log(id);
 // values.roleId = 4;
//  let req = JSON.stringify({id_KhachHang:id});
 fetch(URL.localhost+"/App_API/Chat/DanhSachChat.php", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id_KhachHang":id,      
  })
}) 
 

  .then((response) => response.json())
  .then((json) => {
 console.log({data:json});
    // navigation.navigate('DanhSachLH',{
    //   data:json
    // })
    setBio(data);

  
  
    
  })
  }
  danhsach(id_KhachHang);



    const {
      image, text, flatlist, body,item,title,
  } = styles;
  
    return (

      //  <View style={styles.body}>
      <ScrollView>
     
        <View style={{flex: 1}}>

        <View style={styles.header}>

          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> Tin nhan</Text>
          </View>
        </View>
        </View>

        <Text> { danhsach(id_KhachHang)}</Text>
        <Text>{bio.id_LichHen}</Text>

        {/* <Text>{id_KhachHang}</Text>
        <Button 
             onPress={()=>danhsach(id_KhachHang)}
            title='nut'
        /> */}

       

        {/* <FlatList
          data={setBio()}
          keyExtractor={({id_Chat}, index) => id_Chat}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
            >
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.id_Chat}</Text>
                
                         
             
              </View>
  
            </TouchableOpacity>
          )}
        /> */}
          
      </ScrollView>
    );
 // }

}

const styles = StyleSheet.create({
  


  body: {
    flex: 70,
    //justifyContent: 'center',
  },

  header:{
    flexDirection:'row',
   // flex:1,
   backgroundColor:'#a50000',
    height:60,
  },



  baoTitle:{
   // flex:6,
    justifyContent:'center',
    alignItems:'center',
   // marginRight: 200,
    backgroundColor:'#a50000',
    marginLeft:150
  },

  titleHeader:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
  },

  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  coverImage: {
      // width: 120,
      // height: 120,
      // borderRadius: 8
      width: 120,
      height: 120,
      borderRadius: 200 / 2
    },

 

})


export default Chat;







