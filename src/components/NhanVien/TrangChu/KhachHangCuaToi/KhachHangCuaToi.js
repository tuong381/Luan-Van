import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../../../../../Ip';

const KhachHangCuaToi= ({route,navigation}) => {

  const {data}=route.params;

  const [token, settoken] = useState('');
  const [id_NhanVien, setid_NhanVien] = useState('');
  const [bio, setBio] = useState({});
  useEffect(() => {

    AsyncStorage.getItem('token').then(responseJson => {
      settoken(responseJson);
    });

    // lay id
    AsyncStorage.getItem('id_NhanVien').then(responseJSON => {
      setid_NhanVien(responseJSON);
    });
  }, []);




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
            <Text style={styles.titleHeader}> Khách hàng của tôi</Text>
          </View>
        </View>

        <FlatList
           data={data}
           keyExtractor={({id_LichHen}, index) => id_LichHen}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
              onPress={()=>navigation.navigate('ThongTinKH',{
                  idKH: item.id_KhachHang,
                  gioitinh: item.GioiTinh,
                  Ten: item.TenKH,
                  anh: item.HinhAnh,
                  sdt: item.SoDienThoai,
                  email: item.Email,
                  diachi: item.DiaChi,
                  ngay:item.NgaySinh,
                  cannang: item.CanNang,
                  chieucao: item.ChieuCao

              })
              }
             
            >
              <Image
                source={{uri: item.HinhAnh}}
                style={styles.coverImage}
              />
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.TenKH}</Text>
                <Text style={styles.text}>Số điện thoại: {item.SoDienThoai}</Text>
                <Text style={styles.text}>Ngày đăng ký: {item.NgayDK} </Text>
                         
             
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
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    coverImage: {
        width: 80,
        height: 80,
        borderRadius: 8
        // width: 120,
        // height: 120,
        // borderRadius: 200 / 2
      },
      metaInfo: {
        marginLeft: 30,
        
      },
    metaInfo: {
      marginLeft: 30,
    },
  
    container: {
      flex: 1,
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
        marginLeft:100
      },
    
      titleHeader:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
       
      },

      backButton:{
        //flex:5,
        justifyContent:'center',
        backgroundColor:'#a50000',
     //   marginLeft:10,
        margin:12
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

      item: {
        //  borderWidth:0.5,
        padding: 3,
        borderRadius: 10,
        justifyContent: 'center',
       
      },

      text: {
        fontSize: 15,
        color: '#8c8c8c',
        marginTop: 10,
      },
  
      textTen:{
        fontWeight: 'bold',
        color:'black'
      },

      btnHuy:{
        justifyContent:'center',
        marginLeft:110,
        flexDirection:'row',
        marginTop:10
       
      },
  });

export default KhachHangCuaToi;