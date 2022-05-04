import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
  Alert,
  ScrollView,
  
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var URL_PT = URL.localhost + '/App_API/LichHen.php';

const ChiTietSP= ({route,navigation}) => {

  const [token, settoken] = useState('');
// };

const [bio, setBio] = useState({});

useEffect(() => {
  AsyncStorage.getItem('token').then(responseJson => {
    settoken(responseJson);
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


  const muangay = (idSP, idKH, gia) =>{
   // console.log(idSP,idKH);
    fetch(URL.localhost+"/App_API/Shop/DatHang.php", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_SanPham":idSP,
        "id_KhachHang":idKH,
        "Gia":gia     
      })
    }) 
      .then((response) => response.json())
      .then((json) => {
        Alert.alert(
          'Thông báo!',
          `Đặt hàng thành công!`,
        );

      })

  }

    const {idSP} = route.params;
    const {tenSP} = route.params;
    const {tenDM} = route.params;
    const {gia} =route.params;
    const {soluong} = route.params;
    const {mota} = route.params;
    const {anh} =route.params;

    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{backgroundColor: 'white'}}
            onPress={() => {
              navigation.pop();
            }}>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <Icon name="angle-left" color="#a50000" size={30} />
            </View>
            <Image source={{uri: anh}} style={styles.coverImage} />
          </TouchableOpacity>

          <Text style={styles.textTen}>{tenSP}</Text>

          <Text style={styles.text}>{gia} vnđ</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 40, color: '#333333', fontSize: 18}}>
              Số lượng :
            </Text>
            <Text style={{color: '#333333', fontSize: 18}}> {soluong}</Text>
          </View>

          <View style={{width: 100, marginLeft: 270}}>
            <Button
              onPress={() => {muangay(idSP, bio.id_KhachHang, gia)}}
              color="#a50000"
              title="Mua ngay"
            />
          </View>
          <View>
            <Text
              style={{
                color: '#a50000',
                fontSize: 18,
                marginLeft: 20,
                fontWeight: 'bold',
              }}>
              Mô tả sản phẩm
            </Text>
            <Text style={{fontSize: 16, color: '#666666', paddingLeft:10}}>{mota}</Text>
          </View>
        </View>
      </ScrollView>
    );
  //}
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    //   flexDirection: 'row',
  },
  coverImage: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    marginLeft: 50,
  },
  metaInfo: {
    marginLeft: 30,
  },
  metaInfo: {
    marginLeft: 30,
  },

  container: {
    flex: 1,
  },

  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
  },

  textTen: {
    color: 'black',
    fontSize: 18,
    marginLeft: 40,
    fontWeight: 'bold',
    marginTop: 30,
  },

  text: {
    fontSize: 18,
    color: '#a50000',
    marginLeft: 40,
  },
});

export default ChiTietSP;