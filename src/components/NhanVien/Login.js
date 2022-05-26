

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
      data:[],
      hidepassword: true
     
    }
  //  this.vd = this.vd.bind(this);
  }

  setPasswordVisibility = () => {
    this.setState({hidepassword: !this.state.hidepassword});
  }

  login(){

    if (!this.state.Email.trim() && !this.state.MatKhau.trim() ){
      alert('Vui lòng nhập Email và mật khẩu');
      return;
    }
    else if (!this.state.Email.trim()) {
      alert('Vui lòng nhập Email');
      return;
    }
    else if (!this.state.MatKhau.trim()) {
      alert('Vui lòng nhập mật khẩu');
      return;
    }

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
      this.setState({
      
     result:responseJson.token
        
      }) 

  if(responseJson.token!='ERROR'){
 // console.log(responseJson.token);
   
     const currentKH=responseJson;
    //   console.log(currentKH);
      AsyncStorage.setItem('token',currentKH.token);

      Alert.alert(
        'Thông báo',
        `Đăng nhập thành công`,
      );

      console.log(responseJson.token);

      fetch(URL.localhost+"/App_API/NhanVien/checkToken.php?token="+responseJson.token)
      .then((response)=>response.json())
      .then((responseJSON)=>{
        this.setState({
          vd:responseJSON
        });
        console.log(responseJSON);
        const currentKH=responseJSON;
      
        AsyncStorage.setItem('id_NhanVien',currentKH.id_NhanVien);
         
      })

      this.props.navigation.navigate('NVTab');
   
  
  
   }


    })
    .catch((error) => {
      Alert.alert(
        'Thông báo!',
        `Email hoặc mật khẩu chưa đúng! 
        Vui lòng kiểm tra lại`,
      );

    })
  } 
 

 
  render() {

    
    // const [Email,setEmail] = useState();
    // const [MatKhau, setMatKhau] = useState();

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={{flex: 30}}>
          <ImageBackground
            source={require('../../images/login.jpg')}
            resizeMode="cover"
            // style={{flex: 30}}
            style={{
              width: 150,
              marginTop: 100,
              height: 100,
              marginLeft: 120,
            }}></ImageBackground>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
            <Icon name="angle-left" color="red" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 70, alignItems: 'center'}}>
          <Text style={styles.title}>Nhân viên</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#cc0000"
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={Email => this.setState({Email})}
            value={this.state.Email}
          />
          {/* <TouchableOpacity onPress={this.setPasswordVisibility}  style={styles.txtInputPW}>
          <TextInput
            placeholder="Password"
            underlineColorAndroid="transparent"
            placeholderTextColor="#cc0000"
            secureTextEntry={true}
            style={styles.txtInput}
            
            onChangeText={(MatKhau) => this.setState({MatKhau})}
            value={this.state.MatKhau}
          />

          <Text style={styles.icon} >
              {!this.state.hidepassword ? 
                  <Icon name="eye" color="#cc0000" size={20} /> :
                  <Icon name="eye-slash" color="#cc0000" size={20} />}
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={this.setPasswordVisibility}
            style={styles.txtInputPW}>
            <TextInput
              placeholder="Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="#cc0000"
              // secureTextEntry={true}
              style={{color: '#cc0000'}}
              onChangeText={MatKhau => this.setState({MatKhau})}
              value={this.state.MatKhau}
              secureTextEntry={this.state.hidepassword}
            />

            <Text style={styles.icon}>
              {!this.state.hidepassword ? (
                <Icon name="eye" color="#cc0000" size={20} />
              ) : (
                <Icon name="eye-slash" color="#cc0000" size={20} />
              )}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.login()}
            style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Đăng nhập</Text>
          </TouchableOpacity>

          <View>
            <Text style={{color: 'white'}}>{this.state.result}</Text>
            <Text style={{color: 'white'}}>{this.state.token}</Text>
          </View>

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
    
  },

  icon:{
    marginLeft:220,
    marginTop:12
  },

  txtInputPW:{
    backgroundColor: '#e6e6e6',
    width: DEVICE_WIDTH - 40,
    marginHorizontal: 20,
   // padding:10,
    borderRadius: 20,
    color: '#cc0000',
    marginTop:20,
    flexDirection:'row',
    paddingLeft:10
    
  },

  
});

