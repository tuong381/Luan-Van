import React, {useEffect, useState, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native';
import { URL } from '../../../../../Ip';

 import ImagePicker from 'react-native-image-crop-picker';



//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const HoSoNV = ({route, navigation}) => {


  // const options = {
  // customButtons: [
  //   {name: 'fb', title: 'Choose Photo from Facebook'},
  // ],
  // storageOptions: {
  //   skipBackup: true,
  //   path: 'images'
  // }
  // };

//  const show = () => {
//   ImagePicker . openPicker ( { 
//     multiple : true 
//   } ) . then ( images  =>  { 
//     console . log ( images ) ; 
//   } ) ;
//   }

const show = () => {
    
  
    name:'Choose from Gallery',
   
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        freeStyleCropEnabled:true,
      }).then(image => {
        console.log(image);
      });

    
  }



    const {data}=route.params;
  
 


  return (
    <View style={{backgroundColor:'white'}}>
      <FlatList
        data={data}
        keyExtractor={({id_NhanVien}, index) => id_NhanVien}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
              <ImageBackground
                source={require('../../../../images/background_taikhoanNV.jpg')}
                resizeMode="cover"
                style={{flex: 30}}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => {
                    navigation.pop();
                  }}>
                  <Icon name="angle-left" color="white" size={30} />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <TouchableOpacity onPress={()=>show()}>
            <Image  source={{uri: URL.localhost +'/LuanVan/public/upload/nhanvien/'+item.AnhDaiDien}}
                    style={styles.coverImage} />
            </TouchableOpacity>
                    

            <Text style={styles.textTen}>{item.TenNV}</Text>

            <TouchableOpacity 
                style={{flexDirection: 'row', marginLeft: 120, marginTop: 10}}
                onPress={() =>navigation.navigate('SuaThongTinNV',{
                    ten:item.TenNV,
                    email:item.Email,
                    diachi:item.DiaChi,
                    sdt:item.SoDienThoai,
                    kinhnghiem:item.KinhNghiem,
                    id:item.id_NhanVien,
                    gioitinh:item.GioiTinh
                })}
                >
                <Text style={styles.textSua}>Thông tin chi tiết  </Text>
                <Icon name="edit" size={22} color='black'/>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 20}}>
              <Icon name="envelope" size={22} />
              <Text style={styles.text}>{item.Email}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="phone" size={22} />
              <Text style={styles.text}>{item.SoDienThoai}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="map-marker" size={22} />
              <Text style={styles.text}>{item.DiaChi}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="user" size={22} />
              <Text style={styles.text}>{item.GioiTinh}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="globe" size={22} />
              <Text style={styles.text}>Kinh nghiệm: {item.KinhNghiem} năm</Text>
             
            </View>

            <View
              style={{
                marginTop: 20,
                width: 150,
                marginLeft: 130,
                marginBottom: 15,
                
              }}>
              <Button
                 style={{color: 'red', borderRadius: 20, fontWeight: 'bold'}}
                onPress={() => {
                  navigation.navigate('DoiMatKhauNV', {
                    id:item.id_NhanVien,
                    matkhau:item.MatKhau
                  });
                }}
                title="đổi mật khẩu"
                // disabled={true}
                color="#a50000"
              />
            </View>
            <View
              style={{
               // marginTop: 20,
                width: 150,
                marginLeft: 130,
                marginBottom: 70,
                
              }}>
              <Button
                 style={{color: 'red', borderRadius: 20, fontWeight: 'bold'}}
                onPress={() => {
                  navigation.navigate('Home', {});
                }}
                title="Đăng xuất"
                // disabled={true}
                color="#a50000"
              />
            </View>
            </TouchableOpacity>
          // </View> 
        )}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
 
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    coverImage: {
      borderWidth:5,
      borderColor:'white',
      width: 150,
      height: 150,
      borderRadius: 200 / 2,
      marginLeft:135,
      marginTop:-50,
      
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
     // backgroundColor:'#a50000',
      height:200,
    },
  
    backButton:{
      //flex:5,
      justifyContent:'center',
     // backgroundColor:'#a50000',
      marginLeft:10,
      
    },
  
    baoTitle:{
     // flex:6,
      justifyContent:'center',
      alignItems:'center',
     // marginRight: 200,
    //  backgroundColor:'#a50000',
      marginLeft:105
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
      fontSize: 18,
     color:'#404040',
     marginLeft:20
    },
  
    textTen:{
      fontWeight: 'bold',
      color:'#a50000',
      textAlign:'center',
      fontSize:22
    },

    textSua: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        flexDirection:'row'
      },
  
    image: {
      //  marginTop:5,
      height: 140,
      width: 140,
      borderRadius:10
    
   
    },
  
    
  })

export default HoSoNV;
