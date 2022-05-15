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
import moment from 'moment';


export default class TinNhan extends Component {

  constructor(props) {
    super(props);
    this.state={
      dulieu:[], 
     };
    this.nhantin= this.nhantin.bind(this);
  //  this.vd= this.vd.bind(this);
     
  }

  nhantin(idKH, Ten, idNV, anh) {
  //  console.log(idKH,  idNV);
  // setTimeout(() => {
  // clearInterval(
   let timerId= setInterval(()=>{
  //  setTimeout(() => { 
    
      

 fetch(URL.localhost+"/App_API/Chat/NoiDungChat.php", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id_KhachHang":idKH, 
    "id_NhanVien":idNV     
  })
}) 
 

  .then((response) => response.json())
  .then((json) => {
 //console.log({data:json});

 this.setState({
  dulieu:json
});
//console.log(this.state.dulieu);
//this.vd(idKH, Ten, idNV, anh,this.state.dulieu);
 
    this.props.navigation.navigate('Chat',{
      Ten:Ten,
      idNV:idNV,
      idKH:idKH,
      data:json,
      anh:anh
    });
  
    
  })
  


},2000);

setTimeout(() => { clearInterval(timerId);  }, 25000);


  }

  // vd(idKH, Ten, idNV, anh,data){
  // //  console.log(idKH, Ten, idNV, anh,data);
   
  //   this.props.navigation.navigate('ChatVD',{
  //     Ten:Ten,
  //     idNV:idNV,
  //     idKH:idKH,
  //     data1:data,
  //     anh:anh
  //   });

  // }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}


    render(){

    const {data}=this.props.route.params;
    const {idKH}=this.props.route.params;

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          this.props.navigation.pop();
        }}>
        <Icon name="angle-left" color="#eee" size={30} />
      </TouchableOpacity>
      <View style={styles.baoTitle}>
        <Text style={styles.titleHeader}> Tin nhắn</Text>
      </View>
    </View>



      <FlatList
          data={data}
           keyExtractor={({id_Chat}, index) => id_Chat}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem} 
            onPress={()=>this.nhantin(idKH ,item.TenNV, item.id_NhanVien, item.AnhDaiDien)}
              // this.props.navigation.navigate('ChatVD',{
              //           // Ten:Ten,
              //           // idNV:idNV,
              //           // idKH:idKH,
              //         // data:json
              //         Ten:item.TenNV,
              //           idNV:item.id_NhanVien,
              //           idKH:idKH,
              //           anh:item.AnhDaiDien
              //     })}
            //  
            >
                <Image
                source={{uri: item.AnhDaiDien}}
                style={styles.coverImage}
              />
              
              <View style={styles.metaInfo}>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text, styles.textTen]} >{item.TenNV}</Text>
                    <Text style={{margin:10, }}>{moment(item.created_at).format('h:mm DD-MM-YYYY')}</Text>
                </View>
                <Text style={[styles.text, styles.textChat]} >{item.TinNhan}</Text>
                         
             
              </View>
  
            </TouchableOpacity>
          )}
        />
    </View>
    
  );
   }
};

const styles = StyleSheet.create({
  body: {
    flex: 70,
    //justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    // flex:1,
    backgroundColor: '#a50000',
    height: 60,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    backgroundColor: '#a50000',
    marginLeft: 130,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  backButton:{
    //flex:5,
    justifyContent:'center',
    backgroundColor:'#a50000',
    marginLeft:10,
    marginTop:10
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
    width: 80,
    height: 80,
    borderRadius: 200 / 2,
  },

  text: {
    fontSize: 15,
  //  color: 'black',
    marginTop: 10,
  },

  textTen:{
    fontWeight: 'bold',
    color:'black',
    marginLeft:20,
    width:140
  },

  textChat:{
    marginLeft:20
  },


});


