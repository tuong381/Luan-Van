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
  TouchableOpacity
} from 'react-native';

import {List, ListItem} from 'react-native-elements';
import {color} from '@mui/system';
import UITab from '../../../../navigation/UITab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Redeem, RedeemRounded} from '@material-ui/icons';
import {URL} from '../../../../Ip';

const TaiKhoan = ({route, navigation}) => {
  // const [TenKH, setTenKH] = useState('');
   const [id_KhachHang, setid_KhachHang] = useState('');
  // const [HinhAnh, setHinhAnh] = useState('');
  // const [Email, setEmail] = useState('');
  //  const [DiaChi, setDiaChi] = useState('');
  // const [GioiTinh, setGioiTinh] = useState('');
  // const [SoDienThoai, setSoDienThoai] = useState('');
  // const [NgaySinh, setNgaySinh] = useState('');
  // const [ChieuCao, setChieuCao] = useState('');
  // const [CanNang, setCanNang] = useState('');

  const [token, settoken] = useState('');
  // };

  const [bio, setBio] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('token').then(responseJson => {
      settoken(responseJson);
    });

    // lay id
    AsyncStorage.getItem('id_KhachHang').then(responseJSON => {
      setid_KhachHang(responseJSON);
    });
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      URL.localhost + '/App_API/checkToken.php?token=' + token,
    );
    const data = await response.json();
    // console.log(data);
    setBio(data);
  };
  fetchData();


 
  const suaThongTin = (id)=>{
 
    navigation.navigate('SuaThongTin',{
      Ten:bio.TenKH,
      email:bio.Email,
      diachi:bio.DiaChi,
      sdt:bio.SoDienThoai,
      date:bio.NgaySinh,
      chieucao:bio.ChieuCao,
      cannang:bio.CanNang,
      anh:bio.HinhAnh,
      gioitinh:bio.GioiTinh,
      id:bio.id_KhachHang
    });

  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>{id_KhachHang}</Text>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../../images/gym.jpg')}
          resizeMode="cover"
          style={{flex: 25}}>
          {/* <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="angle-left" color="#808080" size={30} />
            </TouchableOpacity> */}
        </ImageBackground>
      </View>

      <Image source={{uri: bio.HinhAnh}} style={styles.coverImage} />

      <Text style={styles.textTen}>{bio.TenKH}</Text>

      <TouchableOpacity 
      style={{flexDirection: 'row', marginLeft: 120, marginTop: 10}}
      onPress={() => {suaThongTin(bio.id_KhachHang)}}
      >
        <Text style={styles.textSua}>Thông tin chi tiết  </Text>
        <Icon name="edit" size={22} color='black'/>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{flexDirection: 'row', marginLeft: 120, marginTop: 10}}
      onPress={() => {thongtin(bio.id_KhachHang)}}
      >
        <Text style={styles.textSua}>Xem trang cá nhân </Text>
        <Icon name="edit" size={22} color='black'/>
      </TouchableOpacity>


      {/* <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="envelope" size={22} />
        <Text style={styles.text}>{bio.Email}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="map-marker" size={22} />
        <Text style={styles.text}>{bio.DiaChi}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="phone" size={22} />
        <Text style={styles.text}>{bio.SoDienThoai}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="user" size={22} />
        <Text style={styles.text}>{bio.GioiTinh}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="birthday-cake" size={22} />
        <Text style={styles.text}>{bio.NgaySinh}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="globe" size={22} />
        <Text style={styles.text}>Cân nặng: {bio.CanNang} kg</Text>
        <Text style={styles.text}>Chiều cao: {bio.ChieuCao} m</Text>
      </View> */}

      <View style={{marginTop: 20, width: 150,marginLeft:130}}>
        <Button
          style={{color: 'red', borderRadius: 20, fontWeight: 'bold'}}
          // onPress={() => {doiMatKhau(bio.id_KhachHang)}}
          title="Doi mat khau"
          // disabled={true}
          color="#a50000"
        />
      </View>
      <View style={{marginTop: 20, width: 150,marginLeft:130, marginBottom:70}}>
        <Button
          style={{color: 'red', borderRadius: 20, fontWeight: 'bold'}}
          onPress={() => {
            navigation.navigate('DangNhap',{
              
            });
          }}
          title="Đăng xuất"
          // disabled={true}
          color="#a50000"
        />
      </View>
    </View>
    </ScrollView>
  );
  // };
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  coverImage: {
    borderWidth: 5,
    borderColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    marginLeft: 150,
    marginTop: -70,
  },
  metaInfo: {
    marginLeft: 30,
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    // flex:1,
    // backgroundColor:'#a50000',
    height: 200,
  },

  backButton: {
    //flex:5,
    justifyContent: 'center',
    // backgroundColor:'#a50000',
    marginLeft: 10,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    //  backgroundColor:'#a50000',
    marginLeft: 105,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
  },

  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 16,
  },

  text: {
    fontSize: 18,
    color: '#404040',
    marginLeft: 20,
  },

  textTen: {
    fontWeight: 'bold',
    color: '#a50000',
    textAlign: 'center',
    fontSize: 22,
  },

  textSua: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    flexDirection:'row'
  },

  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
    borderRadius: 10,
  },
});

export default TaiKhoan;
