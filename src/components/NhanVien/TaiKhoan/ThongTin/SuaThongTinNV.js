
import React, {useState} from "react";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { URL } from "../../../../../Ip";

import {View ,
       Text, 
      StyleSheet,
       TouchableOpacity, 
       TextInput,
       Dimensions,
       ScrollView
      } from 'react-native';

const SuaThongTinNV= ({route,navigation}) => {

  const {
    image, text, flatlist, body,item,title,
} = styles;
    const {ten}= route.params;
    const {email}= route.params; 
    const {sdt}=route.params;
    const {diachi}=route.params;
    const {kinhnghiem}=route.params;
    const {gioitinh}=route.params;
    const {id}=route.params;

    const [TenNV, setTenNV] = useState(ten);
    const [Email, setEmail] = useState(email);
    const [SoDienThoai, setSoDienThoai] = useState(sdt);
    const [KinhNghiem, setKinhNghiem] = useState(kinhnghiem);
    const [GioiTinh, setGioiTinh] = useState(gioitinh);
    const [DiaChi, setDiaChi] = useState(diachi);

    const [result, setResult] = useState('0'); 


  const capnhat = (id) => { 
    console.log(id);
   // values.roleId = 4;
  //  let req = JSON.stringify({id_KhachHang:id});
   fetch(URL.localhost+"/App_API/NhanVien/SuaThongTinNV.php", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "id_NhanVien":id,
      "TenNV":TenNV,
      "SoDienThoai":SoDienThoai,
      "DiaChi":DiaChi, 
      "Email":Email,
      "KinhNghiem":KinhNghiem,
      "GioiTinh":GioiTinh,
     
    })
})
 

    .then((response) => response.json())
    .then((json) => {
    //  console.log(json);
      // console.log({result:json.kq});
      if(json.kq>0){ 
        console.log('ding');
      //  navigation.navigate('TaiKhoan');
        navigation.pop();
     }
      
    })

    
}

    return (
      <ScrollView>
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
            <Text style={styles.titleHeader}> Chỉnh sửa trang cá nhân</Text>
          </View>
        </View>

        <View style={{flex: 70, marginTop: 20}}>


          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Họ tên</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
             onChangeText={(TenNV) => setTenNV(TenNV)}
              value={TenNV}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={(Email) => setEmail(Email)}
              value={Email}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Số điện thoại</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={(SoDienThoai) => setSoDienThoai(SoDienThoai)}
              value={SoDienThoai}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Địa chỉ</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={(DiaChi) => setDiaChi(DiaChi)}
              value={DiaChi}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Giới tính</Text>
            <TextInput
              style={styles.txtInput1}
              underlineColorAndroid="transparent"
              onChangeText={(GioiTinh) => setGioiTinh(GioiTinh)}
              value={GioiTinh}
            />
           
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Kinh nghiệm</Text>
            <TextInput
              style={styles.txtInput1}
              underlineColorAndroid="transparent"
              onChangeText={(KinhNghiem) => setKinhNghiem(KinhNghiem)}
              value={KinhNghiem}
            />
            <Text style={{marginTop:20, color:'black'}}>năm</Text>
          </View>

          

          <TouchableOpacity  style={styles.btnLogin}
            onPress={() => {capnhat(id)}}
            >
            <Text style={styles.txtLogin}>Cập nhật</Text>
          </TouchableOpacity>

        </View>
      </View>
      </ScrollView>
    );
  }

  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;

  const styles = StyleSheet.create({
 

    container: {
      flex:1
    },

    header:{
      flexDirection:'row',
     // flex:1,
      backgroundColor:'#a50000',
      height:60,
    },

    backButton:{
      //flex:5,
      justifyContent:'center',
      backgroundColor:'#a50000',
      marginLeft:10
    },

    baoTitle:{
     // flex:6,
      justifyContent:'center',
      alignItems:'center',
     // marginRight: 200,
      backgroundColor:'#a50000',
      marginLeft:60
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
  
    txtInput:{
      backgroundColor: '#e6e6e6',
      width:250,
     // width: DEVICE_WIDTH - 50,
      marginHorizontal: 20,
      padding:10,
      borderRadius: 20,
      color: '#cc0000',
      marginTop:10
    },

    txtInput1:{
      backgroundColor: '#e6e6e6',
      width:100,
     // width: DEVICE_WIDTH - 50,
      marginHorizontal: 20,
      padding:10,
      borderRadius: 20,
      color: '#cc0000',
      marginTop:10
    },

    btnLogin:{
       width: DEVICE_WIDTH - 40,
       backgroundColor:'#cc0000',
       padding:10,
       borderRadius: 20,
       marginTop:30,
       width:200,
       marginLeft:100
   
    },
    txtLogin:{
      color:'white',
      textAlign:'center',
      fontSize:18,
      fontWeight:'bold'
    },
  
    text:{
      fontSize:16,
      marginTop:15,
      fontWeight:'bold',
      color:'black',
      width:100,
      marginLeft:20
      
    }
    
  })
  

  export default SuaThongTinNV;
