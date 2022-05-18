import React, {useEffect, useState} from 'react';
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



import AsyncStorage from '@react-native-async-storage/async-storage';
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
    AsyncStorage.getItem('id_NhanVien').then(responseJSON => {
      setid_NhanVien(responseJSON);
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


 
const data=[
  {name:'Hồ sơ cá nhân'},
  {name:'Đăng xuất'}
]

const pushView=(name,id)=>{
  if(name=="Hồ sơ cá nhân"){
    
    navigation.navigate('HoSoNV');

  }else{
    navigation.navigate('Home', {});
  }
}

  return (
   
    <View style={styles.container}>
     
      <View style={styles.header}>
        <ImageBackground
          source={require('../../../images/background_taikhoanNV.jpg')}
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


      <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <TouchableOpacity 
            onPress={()=>{pushView( item.name, bio.id_NhanVien)}}
             >
              
              
              <View style={{flexDirection:'row'}}>
                <Text style={[styles.text, styles.textTen]} >{item.name}</Text>
               <View style={{marginLeft:140}}>
               <Icon name="angle-right" color="red" size={30} />
               </View>
               
                 
              </View>
              </TouchableOpacity> 

            </View>
          )}
        />


    </View>
 
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
    fontSize: 22,
    width:180
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
