


import React, { Component, useState } from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import { URL } from '../../../../Ip';

var URL_DV= URL.localhost+"/App_API/dichvu.php";
//var URL_ChitietDV= URL.localhost+"/App_API/ChiTietDV.php";
 var URL_ChitietDV= URL.localhost+"/App_API/LoaiVeDV.php";
var URL_PT=  URL.localhost+"/App_API/nhanvien.php";

export default class TrangChu extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      mang: [],
     data:[],
     nhanvien:[]
      
    }   
    this.pushView = this.pushView.bind(this);
    
  }

  componentDidMount(){
    fetch(URL_DV)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.setState({
        mang:responseJSON
      });
    })
    .catch((e)=>{console.log(e)});

    fetch(URL_PT)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.setState({
       nhanvien:responseJSON

      });
    })
    .catch((e)=>{console.log(e)});

  }


  renderItem(item) {
    return(
    // <TouchableOpacity  onPress={()=>{this.pushView(item.id_DichVu)}} >
    // this.props.navigation.navigate('VD',{
    //   MaSV:1,
    //   TenSV:'tuong',
    // })

    <TouchableOpacity  onPress={()=>{this.pushView(item.id_DichVu, item.TenDichVu) }} >
    <View style={styles.item}>

      <ImageBackground
        source={{uri: item.HinhAnh_DV}}
        style={styles.image}
        resizeMode="cover">
        <Text style={styles.titleDV}>{item.TenDichVu}</Text>
      </ImageBackground>

    </View>
    </TouchableOpacity>
    );
  }


  pushView(id, name){
   
    fetch(URL_ChitietDV,{
      method:"POST",
      headers:{
        "Accept": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
        id_DichVu:id
       
       })
      
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
   // console.log({mang:responseJson});
   console.log(responseJson);
    this.props.navigation.navigate('LoaiDV',{
      
      tenDV:name,
      data:responseJson
    })
    
    })
    .done() 
    
  }

  render() { 
    const {
      image, text, flatlist, body,item,title,
  } = styles;

  const {navigation} = this.props;
  
    return (
      //  <View style={styles.body}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{flex: 30, height: 200}}>
            <ImageBackground
              source={require('../../../images/background_khachhang.png')}
              resizeMode="cover"
              style={{flex: 30}}>
              {/* <Text style={title}>THỂ DỤC VÀ DINH DƯỠNG TRỰC TUYẾN</Text> */}
            </ImageBackground>
          </View>
          <View style={styles.coverImage}>
          <Icon name="user-circle" color="#334d4d" size={30} />
          </View>
          

          <Text style={styles.text}>Dịch vụ </Text>

          <SafeAreaView style={styles.container}>
            <FlatList
              style={styles.flatlist}
              horizontal
              data={this.state.mang}
              keyExtractor={({id_DichVu}, index) => id_DichVu}
              // renderItem={({item}) => (
              //   <TouchableOpacity  onPress={() => {this.pushView(item.id_DichVu)}} >
              //   <View style={styles.item}>
              //     <Text>{item.id_DichVu}</Text>

              //     <ImageBackground
              //       source={{uri: item.HinhAnh_DV}}
              //       style={styles.image}
              //       resizeMode="cover">
              //       <Text style={styles.title}>{item.TenDichVu}</Text>
              //     </ImageBackground>

              //   </View>
              //   </TouchableOpacity>

              // )}

              renderItem={({item}) => this.renderItem(item)}
            />
          </SafeAreaView>
        </View>

        <View style={styles.body}>
          <Text style={styles.text}>Đội ngũ PT</Text>

          <SafeAreaView style={styles.container}>
            <FlatList
              style={styles.flatlist}
              horizontal
              data={this.state.nhanvien}
              keyExtractor={({id_NhanVien}, index) => id_NhanVien}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ThongTinNV', {
                      Ten: item.TenNV,
                      email: item.Email,
                      sdt: item.SoDienThoai,
                      anh: item.AnhDaiDien,
                      gioitinh: item.GioiTinh,
                      diachi: item.DiaChi,
                      date: item.NgaySinh,
                      kinhnghiem: item.KinhNghiem,
                    });
                  }}>
                  <View style={styles.item}>
                    <Image
                      source={{uri: item.AnhDaiDien}}
                      style={styles.image}
                      resizeMode="cover"></Image>
                    <Text style={styles.textPT}>{item.TenNV}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    );
  }

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


  text: {
    fontSize: 20,
    color: '#a50000',
    fontWeight: 'bold',
    marginTop: 10,
   // fontFamily:'PlayfairDisplay-Regular'
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
  // title: {
  //   fontWeight: 'bold',
  //   color: 'white',
  //   textAlign: 'center',
  //   fontStyle: 'italic',
  //   fontWeight: 'bold',
  //    marginTop:30,
  //   fontSize: 18,
  // },
})










