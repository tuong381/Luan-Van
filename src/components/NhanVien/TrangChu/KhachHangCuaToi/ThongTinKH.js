import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../../../../../Ip';

const ThongTinNV = ({route, navigation}) => {

    const [token, settoken] = useState('');
  const [id_NhanVien, setid_NhanVien] = useState('');
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


  const nhantin = (idNV, idKH, Ten, anh) => {
    console.log(idNV, idKH, Ten, anh);
 let timerId= setInterval(()=>{
    fetch(URL.localhost+"/App_API/Chat/NoiDungChat.php", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_KhachHang":idKH, 
        "id_NhanVien":idNV     
      }) 
  })    
  
      .then((response) => response.json())
      .then((json) => {
      //  console.log(json.id);
        navigation.navigate('ChatNV',{
          Ten:Ten,
          idNV:idNV,
          idKH:idKH,
          data:json,
          anh:anh
        });
      }) 
      
    },2000);

    setTimeout(() => { clearInterval(timerId);  }, 25000);

  }

  const {idKH} = route.params;
  const {idNV} = route.params;
  const {gioitinh} = route.params;
  const {Ten} = route.params;
  const {anh} = route.params;
  const {email} = route.params;
  const {sdt} = route.params;
  const {diachi} = route.params;
  const {date} = route.params;
  const {cannang} = route.params;
  const {chieucao} = route.params;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../../../images/groupX.jpg')}
          resizeMode="cover"
          style={{flex: 30}}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
            <Icon name="angle-left" color="white" size={30} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Image source={{uri: anh}}
            style={styles.coverImage} />

      <Text style={styles.textTen}>{Ten}</Text>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 20}}>
        <Icon name="envelope" size={22} />
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="phone" size={22} />
        <Text style={styles.text}>{sdt}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="map-marker" size={22} />
        <Text style={styles.text}>{diachi}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="user" size={22} />
        <Text style={styles.text}>{gioitinh}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="birthday-cake" size={22} />
        <Text style={styles.text}>{date}</Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 10}}>
        <Icon name="globe" size={22} />
        <Text style={styles.text}>Cân nặng: {cannang} kg</Text>
        <Text style={styles.text}>Chiều cao: {chieucao} m</Text>
      </View>

      <View style={styles.btnChat}>
        <Button
          onPress={() => nhantin(id_NhanVien, idKH, Ten, anh)}
          color="#a50000"
          title="nhắn tin" 
        />
      </View>
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
    width: 130,
    height: 130,
    borderRadius: 200 / 2,
    marginLeft: 135,
    marginTop: -70,
  },
  metaInfo: {
    marginLeft: 30,
  },

  container: {
    flex: 1,
    backgroundColor:'white'
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

  btnChat: {
    width: 100,
    marginLeft: 150,
    marginTop: 30,
    borderRadius: 30,
  },
});

export default ThongTinNV;
