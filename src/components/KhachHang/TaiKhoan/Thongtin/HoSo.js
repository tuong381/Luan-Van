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
  Modal,
  RefreshControl,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Redeem, RedeemRounded} from '@material-ui/icons';
import {URL} from '../../../../../Ip';
import DoiMatKhau from './DoiMatKhau';
import {red} from '@mui/material/colors';

import ImagePicker from 'react-native-image-crop-picker';

const HoSo = ({route, navigation}) => {
  // const {data}=route.params;

  const [id_KhachHang, setid_KhachHang] = useState('');

  const [bio, setBio] = useState({});

  useEffect(() => {
    // lay id
    AsyncStorage.getItem('id_KhachHang').then(responseJSON => {
      setid_KhachHang(responseJSON);
    });
  }, []);

  const fetchData = async id_KhachHang => {
    const response = await fetch(URL.localhost + '/App_API/taiKhoan.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_KhachHang: id_KhachHang,
      }),
    });
    const data = await response.json();

    setBio(data);
  };

  fetchData(id_KhachHang);

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={bio}
        keyExtractor={({id_KhachHang}, index) => id_KhachHang}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
              <ImageBackground
                source={require('../../../../images/gym.jpg')}
                resizeMode="cover"
                style={{flex: 30}}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => {
                    navigation.pop();
                  }}>
                  <Icon name="angle-left" color="#334d4d" size={30} />
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <Image source={{uri: item.HinhAnh}} style={styles.coverImage} />

            <Text style={styles.textTen}>{item.TenKH}</Text>

            <TouchableOpacity
              style={{flexDirection: 'row', marginLeft: 120, marginTop: 10}}
              onPress={() =>
                navigation.navigate('SuaThongTin', {
                  ten: item.TenKH,
                  email: item.Email,
                  diachi: item.DiaChi,
                  sdt: item.SoDienThoai,
                  // date:bio.NgaySinh,
                  chieucao: item.ChieuCao,
                  cannang: item.CanNang,
                  anh: item.HinhAnh,
                  gioitinh: item.GioiTinh,
                  id: item.id_KhachHang,
                  anh: item.HinhAnh,
                  ngay: item.NgaySinh,
                })
              }>
              <Text style={styles.textSua}>Thông tin chi tiết </Text>
              <Icon name="edit" size={22} color="black" />
            </TouchableOpacity>

            {/* /// */}

            {/* <TouchableOpacity onPress={()=>show()}>
              <Text>show image</Text>
            </TouchableOpacity> */}

            {/* ///// */}

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 20}}>
              <Icon name="envelope" size={22} />
              <Text style={styles.text}>{item.Email}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="phone" size={22} />
              <Text style={styles.text}>{item.SoDienThoai}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="map-marker" size={22} />
              <Text style={styles.text}>{item.DiaChi}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="user" size={22} />
              <Text style={styles.text}>{item.GioiTinh}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="calendar" size={22} />
              <Text style={styles.text}>{item.NgaySinh}</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
              <Icon name="globe" size={22} />
              <Text style={styles.text}>Cân nặng: {item.CanNang} kg</Text>
              <Text style={styles.text}>Chiều cao: {item.ChieuCao} m</Text>
            </View>

            <View
              style={{
                marginTop: 20,
                width: 150,
                marginLeft: 130,
                marginBottom: 15,
              }}>
              <Button
                style={{color: 'red', borderRadius: 20, fontWeight: 'bold'}}
                onPress={() => {
                  navigation.navigate('DoiMatKhau', {
                    id: item.id_KhachHang,
                    matkhau: item.MatKhau,
                  });
                }}
                title="đổi mật khẩu"
                // disabled={true}
                color="#a50000"
              />
            </View>
            <View
              style={{
                // marginTop: 20,
                width: 150,
                marginLeft: 130,
                marginBottom: 70,
              }}>
              <Button
                style={{color: 'red', borderRadius: 20, fontWeight: 'bold'}}
                onPress={() => {
                  navigation.navigate('Home', {});
                }}
                title="Đăng xuất"
                // disabled={true}
                color="#a50000"
              />
            </View>
          </TouchableOpacity>
          // </View>
        )}
      />
    </View>
  );
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
    width: 150,
    height: 150,
    borderRadius: 200 / 2,
    marginLeft: 135,
    marginTop: -50,
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
    flexDirection: 'row',
  },

  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
    borderRadius: 10,
  },
});

export default HoSo;
