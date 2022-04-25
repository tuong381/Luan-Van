


import React, { Component } from 'react'
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

var data=[
  {name:'Lịch làm việc'},
  {name:'Khách hàng của tôi '}
]

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
      
        <View style={{flex: 1}}>
          <View style={{flex: 2, height: 250, marginBottom:90}}>
            <ImageBackground
              source={require('../../../images/background_nhanvien.jpg')}
              resizeMode="cover"
              style={{flex: 30}}>
              <Text style={title}>THỂ DỤC VÀ DINH DƯỠNG TRỰC TUYẾN</Text>
            </ImageBackground>
          </View>

          <FlatList
          style={{width:300, marginLeft:60}}
          data={data}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <TouchableOpacity 
            onPress={()=>{pushView( item.name, bio.id_KhachHang)}}
             >
              
              
              <View style={{flexDirection:'row'}}>
                <Text style={[styles.text, styles.textTen]} >{item.name}</Text>
               <View style={{marginLeft:15}}>
               <Icon name="angle-right" color="#a50000" size={30} />
               </View>
               
                 
              </View>
              </TouchableOpacity> 

            </View>
          )}
        />

          </View>
    
    );
  }

}

const styles = StyleSheet.create({

 
  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop:80,
    fontSize: 22,
  },

  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    
  },

  text: {
    fontSize: 18,
    color: '#404040',
    marginLeft: 20,
  },

  textTen: {
    fontWeight: 'bold',
    color: '#a50000',
    fontSize: 22,
    width:200
  },
 
})










