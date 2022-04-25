

import React, {Component, useState} from 'react';
import {StyleSheet,
        Text, 
        View,
        TouchableOpacity, 
        TextInput,
        Image,
        Dimensions,
         ImageBackground,
         Alert,
        } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../../../Ip'

var URL_login= URL.localhost+"/App_API/NhanVien/Login.php";

export default class DangNhap extends Component{
  // const {navigation} = this.props;
  constructor(props){
    super(props);
    this.state={
      Email:"",
      MatKhau:"",
      result:0,
      token:'...',
      mang:[],
      vd:[],
      data:[]
     
    }
  //  this.vd = this.vd.bind(this);
  }

  login(){

    const {navigation} = this.props;
   
    fetch(URL_login, {
      method:"POST", 
      headers:{
       "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        "email":this.state.Email, 
        "matkhau":this.state.MatKhau  
      })  
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      // console.log("++++");
    //   console.log(responseJson);
     //  console.log(responseJson.length);
      this.setState({
       // result:responseJson.kq,
     //  mang:responseJson
     result:responseJson.token
      
       
       
      }) 


  if(responseJson.token!='ERROR'){
  console.log(responseJson.token);
   
     const currentKH=responseJson;
    //   console.log(currentKH);
      AsyncStorage.setItem('token',currentKH.token);

      Alert.alert(
        'Success!',
        `User  has successfully signed in!`,
      );

     this.props.navigation.navigate('NVTab');
   // this.vd(responseJson.token);
   

  
   }


    })
    .catch((error) => {
      console.error(error);

    })
  } 

  // vd(data){
  //   // this.props.navigation.navigate('TaiKhoan', {
  //   //   data:data
  //   // });

  //   fetch("http://10.13.146.156/App_API/checkToken.php?token="+data)
  //   .then((response)=>response.json())
  //   .then((responseJSON)=>{
  //     this.setState({
  //       vd:responseJSON
  //     });
  //     const currentKH=responseJSON;
  //    // console.log(currentKH);
  //     // luu du lieu
     
  //     AsyncStorage.setItem('id_KhachHang',currentKH.id_KhachHang);
  //   //   AsyncStorage.setItem('TenKH',currentKH.TenKH);
  //   //   AsyncStorage.setItem('Email',currentKH.Email);
  //   //    AsyncStorage.setItem('HinhAnh',currentKH.HinhAnh);
  //   //  AsyncStorage.setItem('DiaChi',currentKH.DiaChi);
  //     // AsyncStorage.setItem('GioiTinh',currentKH.GioiTinh);
  //     // AsyncStorage.setItem('ChieuCao',currentKH.ChieuCao);
  //     // AsyncStorage.setItem('CanNang',currentKH.CanNang);
  //     // AsyncStorage.setItem('NgaySinh',currentKH.NgaySinh);
  //     //  AsyncStorage.setItem('SoDienThoai',currentKH.SoDienThoai);
      

  //      this.props.navigation.navigate('UITab');
  //   })
  //   .catch((e)=>{console.log(e)});

  // }





 
  render() {

    
    // const [Email,setEmail] = useState();
    // const [MatKhau, setMatKhau] = useState();

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={{flex: 30, }}>
          <ImageBackground

            source={require('../../images/login.jpg')}
            resizeMode="cover"
            // style={{flex: 30}}
            style={{width:150, marginTop:100, height:100, marginLeft:120}}
            >
</ImageBackground>
            <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.pop();
          }}>
          <Icon name="angle-left" color="red" size={30} />
        </TouchableOpacity>
            
        </View>
        <View style={{flex: 70, alignItems: 'center'}}>
          <Text style={styles.title}>Nhan vien</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#cc0000"
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            
            onChangeText={(Email) => this.setState({Email})}
            value={this.state.Email}
          />
          <TextInput
            placeholder="Password"
            underlineColorAndroid="transparent"
            placeholderTextColor="#cc0000"
            secureTextEntry={true}
            style={styles.txtInput}
            
            onChangeText={(MatKhau) => this.setState({MatKhau})}
            value={this.state.MatKhau}
          />
          <TouchableOpacity onPress={() =>this.login() } style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Đăng nhập</Text>
          </TouchableOpacity>

          <View>
            <Text style={{color:'white'}}>{this.state.result}</Text>
            <Text style={{color:'white'}}>{this.state.token}</Text>
           
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('DangKy')}>
              <Text style={styles.text}>Nếu bạn chưa có tài khoản? 
                  <Text style={{color:'red'}}> Đăng Ký</Text>
              </Text>
              
          </TouchableOpacity>
          {/* <Text>Bạn chưa có tài khoản?</Text> */}
        </View>
      </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
  //  alignItems: 'center',
   // backgroundColor: '#F5FCFF',
   backgroundColor:'white'
  },

  backButton: {
    //flex:5,
    justifyContent: 'center',
    marginLeft: 20,
     marginTop:-190,
    // marginRight:100
  },

  title:{
    fontSize:30,
  //  color:'#cc0000',
  color:'black',
	  marginBottom:20,
    fontWeight:'bold',
    marginTop:25
  },
  txtInput:{
    backgroundColor: '#e6e6e6',
    width: DEVICE_WIDTH - 40,
    marginHorizontal: 20,
    padding:10,
    borderRadius: 20,
    color: '#cc0000',
    marginTop:20
  },
  btnLogin:{
     width: DEVICE_WIDTH - 40,
     backgroundColor:'#cc0000',
     padding:10,
     borderRadius: 20,
     marginTop:30,
     width:200
 
  },
  txtLogin:{
    color:'white',
    textAlign:'center',
	  fontSize:18,
    fontWeight:'bold'
  },

  text:{
    fontSize:16,
    
  }
  
});

