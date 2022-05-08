


import React, { Component, useState, useEffect } from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { URL } from '../../../../Ip';


import SanPhamMoiNhat from './SanPhamMoiNhat';

 var URL_DV= URL.localhost+"/App_API/dichvu.php";
//var URL_ChitietDV= URL.localhost+"/App_API/ChiTietDV.php";
 var URL_ChitietDV= URL.localhost+"/App_API/LoaiVeDV.php";
var URL_PT=  URL.localhost+"/App_API/nhanvien.php";

// export default class TrangChu extends React.Component {
  const TrangChu= ({route,navigation}) => {

    const [token, settoken] = useState('');
  // };

  const [bio, setBio] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('token').then(responseJson => {
      settoken(responseJson);
    });
  }, []);


    const fetchData = async () => {
      const response = await fetch(
        URL.localhost + '/App_API/checkToken.php?token=' + token,
      );
      const data = await response.json();
      // console.log(data);
      setBio(data);
    };
    fetchData();


    const lichhen= (id) =>{
      console.log(id); 
   // values.roleId = 4;
  //  let req = JSON.stringify({id_KhachHang:id});
   fetch(URL.localhost+"/App_API/LichHen.php", {
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
  // console.log({data:json});
      navigation.navigate('DanhSachLH',{
        data:json ,
     //   idKH:id
      })
    })  
    }

    const tinnhan= (id) =>{
      console.log(id);
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
      navigation.navigate('TinNhan',{
        data:json, 
        idKH:id
      }) 
     
   
    })
    }
 
    const thongbao= (id) =>{
      console.log(id);
   fetch(URL.localhost+"/App_API/ThongBao/ListThongBao.php", {
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
   //console.log({data:json});
      navigation.navigate('ListThongBao',{
        data:json
      })
     
  
    })
    }


    const {
      image, text, flatlist, body,item,title,
  } = styles;


  
    return (
      //  <View style={styles.body}>
      <ScrollView>
        <View style={{flex: 1}}>

        <View style={styles.header}>

          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}>BodyFit  Fitness</Text>
            <TouchableOpacity style={{marginLeft:90}}
              onPress= {() => thongbao(bio.id_KhachHang)}
            >
              <Icon name="bell" color="#a50000" size={25} />
            </TouchableOpacity>

          </View>
        </View>

          <View style={{flex: 30, height: 200}}>
            <ImageBackground
              source={require('../../../images/background_khachhang.png')}
              resizeMode="cover"
              style={{flex: 30}}>
            </ImageBackground>
          </View>
          
          <Text style={styles.title}>Tùy chọn </Text>
          
          <View style={{flexDirection:'row', marginLeft:60, marginTop:25, marginBottom:25}}>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('LoaiVe')}        
            >
              <View style={{marginRight:10}}>
              <Icon name="calendar" color="#a50000" size={40} />
              <Text style={styles.text} >Đặt lịch</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('DanhSachNV',{
                idKH:bio.id_KhachHang
              })}          
            >
            <View style={{marginLeft:20}}>
            <Icon name="users" color="#a50000" size={40} />
            <Text style={styles.text} >Nhân viên</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={()=> {lichhen(bio.id_KhachHang)}}          
            >
            <View style={{marginLeft:20}}>
            <Icon name="history" color="#a50000" size={40} />
            <Text style={styles.text} >Lịch hẹn</Text>
            </View>
         
            </TouchableOpacity>


            <TouchableOpacity 
              onPress={()=> {tinnhan(bio.id_KhachHang)}}          
            >
            <View style={{marginLeft:20}}>
            <Icon name="comment" color="#a50000" size={40} />
            <Text style={styles.text} >Tin nhắn</Text>
            </View>
         
            </TouchableOpacity> 
             

          </View>  

          
        </View>

        <View style={styles.body}>
        <Text style={styles.title}>Sản phẩm mới nhất </Text>
        
        <SanPhamMoiNhat navigation={navigation} />

        </View>
      </ScrollView>
    );
 // }

}

const styles = StyleSheet.create({
  textPT:{
    fontSize:16,
    color:'black',
    textAlign:'center'
  },
 
  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop:80,
    fontSize: 22,
  },

  titleDV:{
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop:60,
    fontSize: 20,
  },


  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft:10
   // fontFamily:'PlayfairDisplay-Regular'
  },

  text:{
    fontSize:16,
    color:'black'
  },


  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
    borderRadius:10
 
  },

  flatlist: {
    //  marginTop: 100,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
  },

  container: {
    padding: 8,
  },

  item: {
    //  borderWidth:0.5,
    padding: 3,
    borderRadius: 10,
    justifyContent: 'center',
    // borderColor: 'white',
    // shadowColor: 'white',
   
  },

  body: {
    flex: 70,
    //justifyContent: 'center',
  },

  header:{
    flexDirection:'row',
   // flex:1,
   backgroundColor:'white',
    height:60,
  },



  baoTitle:{
   // flex:6,
    justifyContent:'center',
    alignItems:'center',
   // marginRight: 200,
    backgroundColor:'white',
    marginLeft:100,
    flexDirection:'row'
  },

  titleHeader:{
    color:'#a50000',
    fontSize:22,
    fontWeight:'bold',
  },

 

})


export default TrangChu;







