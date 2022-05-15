
import React, {Component, useState} from 'react';
import {Platform, 
        StyleSheet, 
        Text,Alert, 
        View,TouchableOpacity, 
        TextInput,
        Image,
        Dimensions, 
        ImageBackground,
        ScrollView
      } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { URL } from '../../../Ip';

var URL_DK=URL.localhost+"/App_API/dangky.php"


export default class DangKy extends Component{
  // const {navigation} = this.props;
  constructor(props){
    super(props);
    this.state={
      Email:"",
	  TenKH:"",
	  SoDienThoai:"",
      MatKhau:"",
      result:'...'
    }
  }

  dangky(){

    if (!this.state.Email.trim() && !this.state.MatKhau.trim() && !this.state.TenKH.trim() && !this.state.SoDienThoai.trim()){
      alert('Vui lòng nhập đầy đủ thông tin');
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
    else if (!this.state.TenKH.trim()) {
      alert('Vui lòng nhập tên khách hàng');
      return;
    }
    else if (!this.state.SoDienThoai.trim()) {
      alert('Vui lòng nhập số điện thoại');
      return;
    }

    const {navigation} = this.props;
   
    fetch(URL_DK, {
      method:"POST",
      headers:{
       "Accept": "application/json",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        "email":this.state.Email,
        "hoten":this.state.TenKH,
        "sdt":this.state.SoDienThoai,
        "matkhau":this.state.MatKhau
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      // console.log("++++");
      // console.log(responseJson);
      this.setState({result:responseJson.id}) 
    
    //   if(this.state.result>0){
        //console.warn(responseJson);
        this.props.navigation.navigate('DangNhap');
    // }
     
 
    })
    .catch((error) => {
      // console.error(error);
      Alert.alert(
        'Thông báo!',
        `Vui lòng kiểm tra lại thông tin đăng ký!`,
      );

    })
  } 
 
  render() {

    
    // const [Email,setEmail] = useState();
    // const [MatKhau, setMatKhau] = useState();

    const {navigation} = this.props;

    return (
      <ScrollView style={styles.container}>
        {/* <View style={{flex: 30, backgroundColor: 'red'}}>
          <ImageBackground
            source={require('../../images/logo.png')}
            resizeMode="cover"
            style={{flex: 30}}></ImageBackground>
        </View> */}

        <View style={{ alignItems: 'center', marginTop:70,}}>
          <Text style={styles.title}>Đăng Ký</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#cc0000"
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={Email => this.setState({Email})}
            value={this.state.Email}
          />

          <TextInput
            placeholder="Họ và tên"
            placeholderTextColor="#cc0000"
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={TenKH => this.setState({TenKH})}
            value={this.state.TenKH}
          />

          <TextInput
            placeholder="Số điện thoại"
            placeholderTextColor="#cc0000"
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={SoDienThoai => this.setState({SoDienThoai})}
            value={this.state.SoDienThoai}
          />

          <TextInput
            placeholder="Password"
            underlineColorAndroid="transparent"
            placeholderTextColor="#cc0000"
            secureTextEntry={true}
            style={styles.txtInput}
            onChangeText={MatKhau => this.setState({MatKhau})}
            value={this.state.MatKhau}
          />
          <TouchableOpacity
            onPress={() => this.dangky()}
            style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Đăng ký</Text>
          </TouchableOpacity>

          <View>
            <Text style={{color: 'white'}}>{this.state.result}</Text>
          </View>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
              <Text style={{ fontSize:16}}>Trở về</Text>
            {/* //<Icon name="angle-left" color="#cc0000" size={30} /> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // marginTop:70,
   // justifyContent: 'center',
  //  alignItems: 'center',
    backgroundColor: 'white',
  },
  title:{
    fontSize:30,
    color:'#cc0000',
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

  

  
});

