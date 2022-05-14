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
  TextInput,
  Alert
} from 'react-native';


 
import { URL } from "../../../../../Ip";


const DoiMatKhauNV = ({route, navigation}) => {
    const {id}=route.params;
    const {matkhau}=route.params;

    const [MatKhau, setMatKhau] = useState('');

    

    const datlai = (id) => { 
        console.log(id);
        fetch(URL.localhost+"/App_API/NhanVien/DoiMatKhauNV.php", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "id_NhanVien":id,
            "MatKhau":MatKhau
           
          })
      })
      
          .then((response) => response.json())
          .then((json) => {
          //  console.log(json);
            // console.log({result:json.kq});
            if(json.kq>0){ 
              Alert.alert(
                'Thông báo',
                `Đổi mật khẩu thành công`,
              );
                navigation.navigate('Login');
             //   navigation.pop();
           }
            
          })

    }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.pop();
        }}>
        <Icon name="angle-left" color="#334d4d" size={30} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.body}>
        <Text style={styles.title}>Đổi mật khẩu</Text>
        <TextInput
          placeholder="Nhập mật khẩu mới"
          placeholderTextColor="#a50000"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={(MatKhau) =>setMatKhau(MatKhau)}
            value={MatKhau}
        />
        <View style={{height:50, width:90}}>
        <Button
                style={{marginTop:50}}
                 onPress={() => {datlai(id)}}
                title="Đặt lại"
                // disabled={true}
                color="#a50000"
              />
        </View>
             
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
    container: {
    //  flex:1,
      shadowColor:'red',
      borderRadius:200
    },

    body:{
       // flex: 30, 
       alignItems: 'center',
        
       justifyContent:'center',
        width: 300,
        height: 300,
        elevation: 2,
        borderRadius: 28,
        marginBottom: 3,
        backgroundColor: 'white',
        marginLeft:55
    },
  
    backButton:{
      //flex:5,
      justifyContent:'center',
     // backgroundColor:'#a50000',
      marginLeft:10,  
      marginBottom:130  
    },
  
    title: {
      fontWeight: 'bold',
      color: '#a50000',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginTop:10,
      fontSize: 25,
    },

    txtInput:{
        backgroundColor: '#e6e6e6',
        width:250,
       // width: DEVICE_WIDTH - 50,
        marginHorizontal: 20,
        padding:10,
        borderRadius: 20,
        color: '#cc0000',
        marginTop:20,
        marginBottom:30
      },

     

    
  })

export default DoiMatKhauNV;
