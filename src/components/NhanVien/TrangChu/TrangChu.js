import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {URL} from '../../../../Ip';

const TrangChu = ({route, navigation}) => {
  const [token, settoken] = useState('');

  const [bio, setBio] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('token').then(responseJson => {
      settoken(responseJson);
    });
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      URL.localhost + '/App_API/NhanVien/checkToken.php?token=' + token,
    );
    const data = await response.json();
    // console.log(data);
    setBio(data);
  };
  fetchData();

  const lichlamviec = id => {
    // console.log(id);
    // values.roleId = 4;
    //  let req = JSON.stringify({id_KhachHang:id});
    fetch(URL.localhost + '/App_API/NhanVien/LichLamViec/LichLamViec.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_NhanVien: id,
      }),
    })
      .then(response => response.json())
      .then(json => {
        navigation.navigate('LichLamViec', {
          data: json,
          // id_NhanVien: id,
        });
      });
  };

  const khachhangcuatoi = id => {
    console.log(id);
    // values.roleId = 4;
    //  let req = JSON.stringify({id_KhachHang:id});
    fetch(URL.localhost + '/App_API/NhanVien/KhachHangCuaToi.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_NhanVien: id,
      }),
    })
      .then(response => response.json())
      .then(json => {
        //console.log({data:json});
        navigation.navigate('KhachHangCuaToi', {
          data: json,
        });
      });
  };

  const tinnhan = id => {
    console.log(id);
    fetch(URL.localhost + '/App_API/NhanVien/Chat/ListChat.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_NhanVien: id,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log({data: json});
        navigation.navigate('ListChat', {
          data: json,
          id_NhanVien: id,
        });
      });
  };

  const thongbao = id => {
    // console.log(id);
    fetch(URL.localhost + '/App_API/NhanVien/ThongBao/ListThongBao.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_NhanVien: id,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log({data:json});
        
        navigation.navigate('ThongBao', {
          data: json,
          id_NhanVien: id,
        });
      });
  };

  const {image, text, flatlist, body, item, title, btnHuy} = styles;

  return (
    //  <View style={styles.body}>

    <View style={{flex: 1}}>
      <View style={{height: 200, marginBottom: 40}}>
        <ImageBackground
          source={require('../../../images/background_nhanvien.jpg')}
          resizeMode="cover"
          style={{flex: 2}}>
          <Text style={title}>THỂ DỤC VÀ DINH DƯỠNG TRỰC TUYẾN</Text>
        </ImageBackground>
      </View>

      <View style={{flex: 8}}>
        <View style={{width: 300}}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              lichlamviec(bio.id_NhanVien);
            }}>
            <Text style={[styles.text, styles.textTen]}>Lịch làm việc</Text>
            <View style={{marginLeft: 15}}>
              <Icon name="angle-right" color="#a50000" size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: 300}}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              khachhangcuatoi(bio.id_NhanVien);
            }}>
            <Text style={[styles.text, styles.textTen]}>
              Khách hàng của tôi
            </Text>
            <View style={{marginLeft: 15}}>
              <Icon name="angle-right" color="#a50000" size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: 300}}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              tinnhan(bio.id_NhanVien);
            }}>
            <Text style={[styles.text, styles.textTen]}>Tin nhắn</Text>
            <View style={{marginLeft: 15}}>
              <Icon name="angle-right" color="#a50000" size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: 300}}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              thongbao(bio.id_NhanVien);
            }}>
            <Text style={[styles.text, styles.textTen]}>Thông báo</Text>
            <View style={{marginLeft: 15}}>
              <Icon name="angle-right" color="#a50000" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 80,
    fontSize: 22,
  },

  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    //  flex:2,
    width: 300,
    marginLeft: 60,
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
    width: 200,
  },
});

export default TrangChu;
