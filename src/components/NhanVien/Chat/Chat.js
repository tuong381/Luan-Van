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
import { URL } from '../../../../Ip';


class NodeChat extends Component{
  render(){
      return(
        <View style={styles.chatLineView} >
            <Text style={styles.itemUserName}>{this.props.sender}</Text>
            <Text style={styles.itemText}>{this.props.chatContent}</Text>
        </View>
      );
  }
}


const Chat= ({route,navigation}) => {
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

  const fetchData = async id_NhanVien => {
    const response = await fetch(URL.localhost + '/App_API/NhanVien/Chat/ListChat.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_NhanVien: id_NhanVien,
      }),
    });
    const data = await response.json();

    setBio(data);
  };

  fetchData(id_NhanVien);

 const nhantin = (idKH, idNV, Ten, anh) => {
   // console.log(idKH, idNV, Ten);
    // setTimeout(() =>
let timerId= setInterval(()=>{
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
// console.log({data:json});
    navigation.navigate('ChatNV',{
      Ten:Ten,
      idKH:idKH, 
      idNV:idNV,
      data:json,
      anh:anh
    });
  
    
  })

},2000);

setTimeout(() => { clearInterval(timerId);  }, 25000);


    
  }



    return (
      <View style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.baoTitle}>
          <Text style={styles.titleHeader}> Tin nhắn</Text>
        </View>
      </View>
  
  
        <FlatList
            data={bio}
            keyExtractor={({id_Chat}, index) => id_Chat}
            renderItem={({item}) => (
              <TouchableOpacity  style={styles.listItem} 
              onPress={()=> nhantin(item.id_KhachHang, id_NhanVien,item.TenKH, item.HinhAnh)}
                
              >
                  <Image
                  source={{uri: item.HinhAnh}}
                  style={styles.coverImage} 
                />
                
                <View style={styles.metaInfo}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={[styles.text, styles.textTen]} >{item.TenKH}</Text>
                      <Text style={{margin:10, }}>{item.created_at}</Text>
                  </View>
                  <Text style={[styles.text, styles.textChat]} >{item.TinNhan}</Text>
                           
              
                </View>
    
              </TouchableOpacity>
            )}
          />
      </View>
    )
  
}

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
    marginLeft: 150,
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

export default Chat;