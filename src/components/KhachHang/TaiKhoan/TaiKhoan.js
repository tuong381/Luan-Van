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
} from 'react-native';

import {List, ListItem} from 'react-native-elements';
import {color} from '@mui/system';
import UITab from '../../../../navigation/UITab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redeem, RedeemRounded } from '@material-ui/icons';

//class TaiKhoan extends React.Component {
  const TaiKhoan = props => {

  const [TenKH, setTenKH] = useState('');
  const [id_KhachHang, setid_KhachHang] = useState('');
  const [HinhAnh, setHinhAnh] = useState('');
  const [Email, setEmail] = useState('');
   const [DiaChi, setDiaChi] = useState('');
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

    // lay ten khach hang
    AsyncStorage.getItem('TenKH').then(responseJSON => {
      setTenKH(responseJSON);
    });
     // lay email
     AsyncStorage.getItem('Email').then(responseJSON => {
      setEmail(responseJSON);
    });
    //lay so s=dien thoai
    // AsyncStorage.getItem('SoDienThoai').then(responseJSON => {
    //   setSoDienThoai(responseJSON);
    // });
    // lay hinh anh
   
    AsyncStorage.getItem('HinhAnh').then(responseJSON => {
      setHinhAnh(responseJSON);
    });
  
   
    // lay dia chi
    AsyncStorage.getItem('DiaChi').then(responseJSON => {
      setDiaChi(responseJSON);
    });
    // // lay gioi tinh
    // AsyncStorage.getItem('GioiTinh').then(responseJSON => {
    //   setGioiTinh(responseJSON);
    // });
    
    // // lay ngay sinh
    // AsyncStorage.getItem('NgaySinh').then(responseJSON => {
    //   setNgaySinh(responseJSON);
    // });
    // // lay chieu cao
    // AsyncStorage.getItem('ChieuCao').then(responseJSON => {
    //   setChieuCao(responseJSON);
    // });
    // // lay can nang
    // AsyncStorage.getItem('CanNang').then(responseJSON => {
    //   setCanNang(responseJSON);
    // });


    



    



  }, []);

 
    
  const fetchData = async () => {
    const response = await fetch("http://10.13.146.156/App_API/checkToken.php?token="+token);
    const data = await response.json();
          console.log(data);
          setBio(data);
          
         
      };
      fetchData();
  



  
    
  //const {data}=route.params; <Text style={{color:'red'}}>id KH: {id_KhachHang}</Text>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../../images/gym.jpg')}
          resizeMode="cover"
          style={{flex: 30}}>
          {/* <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="angle-left" color="#808080" size={30} />
            </TouchableOpacity> */}
        </ImageBackground>
      </View>
      {/* <Text style={styles.textTen}>{token}</Text> */}
     
      {/* <Image source={{uri: HinhAnh}} style={styles.coverImage} /> */}

      {/* <FlatList
           
            horizontal
            data={bio}
            keyExtractor={({id_KhachHang}, index) => id_KhachHang}
            renderItem={({item}) => (
              
              <View >
                <Text style={{color:'red'}}>{item.id_KhachHang}</Text>

                

              </View>
             

            )}

          /> */}
      <Text>{bio.id_KhachHang}</Text>

      <Text style={styles.textTen}>{TenKH}</Text>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 20}}>
        <Icon name="envelope" size={22} />
        <Text style={styles.text}>{Email}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="map-marker" size={22} />
        <Text style={styles.text}>{DiaChi}</Text>
      </View>

    {/*  <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="phone" size={22} />
        <Text style={styles.text}>{SoDienThoai}</Text>
      </View>

      

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="user" size={22} />
        <Text style={styles.text}>{GioiTinh}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="birthday-cake" size={22} />
        <Text style={styles.text}>{NgaySinh}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="globe" size={22} />
        <Text style={styles.text}>Cân nặng: {CanNang} kg</Text>
        <Text style={styles.text}>Chiều cao: {ChieuCao} m</Text>
      </View> */}
      

      <View style={{marginTop: 20, width: 150, marginLeft: 130}}>
        <Button
          style={{color: 'red', borderRadius: 20}}
          onPress={() => {
              fetch("http://10.2.7.38/App_API/checkToken.php?token="+token)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      // this.setState({
      //   mang:responseJSON
      // });
      console.log(responseJSON);
    })
    .catch((e)=>{console.log(e)});
            
          
        
          }
              
          }
          title="Them thong tin"
          // disabled={true}
          color="#a50000"
        />
      </View>
    </View>
  );
// };

}

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

  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
    borderRadius: 10,
  },
});

export default TaiKhoan;
